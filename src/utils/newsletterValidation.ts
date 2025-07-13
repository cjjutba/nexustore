import { ValidationResult, SanitizationResult, SECURITY_CONFIG } from '@/types/newsletter';

/**
 * Comprehensive email validation with security measures
 */
export class NewsletterValidator {
  private static readonly EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  private static readonly DANGEROUS_PATTERNS = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
    /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
    /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
    /data:text\/html/gi,
    /vbscript:/gi
  ];

  /**
   * Sanitize input to prevent XSS attacks
   */
  static sanitizeInput(input: string): SanitizationResult {
    const original = input;
    const threats: string[] = [];
    
    // Remove dangerous patterns
    let sanitized = input;
    this.DANGEROUS_PATTERNS.forEach((pattern, index) => {
      if (pattern.test(sanitized)) {
        threats.push(`Dangerous pattern ${index + 1} detected`);
        sanitized = sanitized.replace(pattern, '');
      }
    });

    // Remove HTML tags
    sanitized = sanitized.replace(/<[^>]*>/g, '');
    
    // Remove excessive whitespace
    sanitized = sanitized.trim().replace(/\s+/g, ' ');
    
    // Limit length
    if (sanitized.length > SECURITY_CONFIG.maxEmailLength) {
      sanitized = sanitized.substring(0, SECURITY_CONFIG.maxEmailLength);
      threats.push('Input length exceeded maximum allowed');
    }

    return {
      sanitized,
      wasModified: sanitized !== original,
      threats
    };
  }

  /**
   * Validate email format
   */
  static validateEmailFormat(email: string): ValidationResult {
    if (!email) {
      return { isValid: false, error: 'Email address is required' };
    }

    if (email.length > SECURITY_CONFIG.maxEmailLength) {
      return { isValid: false, error: 'Email address is too long' };
    }

    if (!this.EMAIL_REGEX.test(email)) {
      return { isValid: false, error: 'Please enter a valid email address' };
    }

    return { isValid: true };
  }

  /**
   * Check if domain is blocked
   */
  static validateDomain(email: string): ValidationResult {
    const domain = email.split('@')[1]?.toLowerCase();
    
    if (!domain) {
      return { isValid: false, error: 'Invalid email domain' };
    }

    // Check blocked domains
    if (SECURITY_CONFIG.blockedDomains?.includes(domain)) {
      return { isValid: false, error: 'Temporary email addresses are not allowed' };
    }

    // Basic domain format validation
    const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!domainRegex.test(domain)) {
      return { isValid: false, error: 'Invalid email domain format' };
    }

    return { isValid: true };
  }

  /**
   * Comprehensive email validation
   */
  static validateEmail(email: string): ValidationResult {
    // First sanitize the input
    const sanitizationResult = this.sanitizeInput(email);
    
    if (sanitizationResult.threats.length > 0) {
      return { isValid: false, error: 'Invalid characters detected in email' };
    }

    const sanitizedEmail = sanitizationResult.sanitized;

    // Validate format
    const formatResult = this.validateEmailFormat(sanitizedEmail);
    if (!formatResult.isValid) {
      return formatResult;
    }

    // Validate domain
    const domainResult = this.validateDomain(sanitizedEmail);
    if (!domainResult.isValid) {
      return domainResult;
    }

    return { isValid: true };
  }

  /**
   * Check for suspicious patterns that might indicate spam or abuse
   */
  static detectSuspiciousPatterns(email: string): ValidationResult {
    const suspiciousPatterns = [
      /(.)\1{4,}/, // Repeated characters (5 or more)
      /^[0-9]+@/, // Email starting with only numbers
      /\+.*\+/, // Multiple plus signs
      /\.{2,}/, // Multiple consecutive dots
      /-{3,}/, // Multiple consecutive hyphens
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(email)) {
        return { isValid: false, error: 'Email format appears suspicious' };
      }
    }

    return { isValid: true };
  }

  /**
   * Full validation pipeline
   */
  static fullValidation(email: string): ValidationResult {
    // Basic validation
    const basicResult = this.validateEmail(email);
    if (!basicResult.isValid) {
      return basicResult;
    }

    // Suspicious pattern detection
    const suspiciousResult = this.detectSuspiciousPatterns(email);
    if (!suspiciousResult.isValid) {
      return suspiciousResult;
    }

    return { isValid: true };
  }
}

/**
 * Rate limiting utilities
 */
export class RateLimiter {
  private static getStorageKey(identifier: string): string {
    return `rate_limit_${identifier}`;
  }

  /**
   * Check if action is rate limited
   */
  static isRateLimited(identifier: string): boolean {
    try {
      const key = this.getStorageKey(identifier);
      const data = localStorage.getItem(key);
      
      if (!data) return false;

      const { attempts, windowStart } = JSON.parse(data);
      const now = Date.now();
      
      // Check if we're still in the same window
      if (now - windowStart < SECURITY_CONFIG.rateLimitWindow) {
        return attempts >= SECURITY_CONFIG.maxSubmissionsPerWindow;
      }

      // Window expired, reset
      localStorage.removeItem(key);
      return false;
    } catch (error) {
      console.error('Rate limiter error:', error);
      return false;
    }
  }

  /**
   * Record an attempt
   */
  static recordAttempt(identifier: string): void {
    try {
      const key = this.getStorageKey(identifier);
      const now = Date.now();
      const data = localStorage.getItem(key);

      if (!data) {
        // First attempt
        localStorage.setItem(key, JSON.stringify({
          attempts: 1,
          windowStart: now
        }));
        return;
      }

      const { attempts, windowStart } = JSON.parse(data);

      if (now - windowStart < SECURITY_CONFIG.rateLimitWindow) {
        // Same window, increment attempts
        localStorage.setItem(key, JSON.stringify({
          attempts: attempts + 1,
          windowStart
        }));
      } else {
        // New window, reset
        localStorage.setItem(key, JSON.stringify({
          attempts: 1,
          windowStart: now
        }));
      }
    } catch (error) {
      console.error('Failed to record rate limit attempt:', error);
    }
  }

  /**
   * Get remaining time until rate limit resets
   */
  static getResetTime(identifier: string): number {
    try {
      const key = this.getStorageKey(identifier);
      const data = localStorage.getItem(key);
      
      if (!data) return 0;

      const { windowStart } = JSON.parse(data);
      const now = Date.now();
      const elapsed = now - windowStart;
      
      return Math.max(0, SECURITY_CONFIG.rateLimitWindow - elapsed);
    } catch (error) {
      console.error('Failed to get reset time:', error);
      return 0;
    }
  }
}
