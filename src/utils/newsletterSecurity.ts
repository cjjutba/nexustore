/**
 * Additional security utilities for newsletter functionality
 * Provides comprehensive frontend security measures
 */

import { SECURITY_CONFIG } from '@/types/newsletter';

/**
 * Content Security Policy utilities
 */
export class CSPUtils {
  /**
   * Check if the current environment supports CSP
   */
  static isCSPSupported(): boolean {
    return typeof window !== 'undefined' && 'SecurityPolicyViolationEvent' in window;
  }

  /**
   * Report CSP violations (for monitoring)
   */
  static reportViolation(violation: SecurityPolicyViolationEvent): void {
    console.warn('CSP Violation detected:', {
      blockedURI: violation.blockedURI,
      violatedDirective: violation.violatedDirective,
      originalPolicy: violation.originalPolicy,
      timestamp: new Date().toISOString()
    });

    // In a real application, you would send this to your monitoring service
    // Example: sendToMonitoringService(violation);
  }

  /**
   * Initialize CSP violation reporting
   */
  static initializeCSPReporting(): void {
    if (this.isCSPSupported()) {
      document.addEventListener('securitypolicyviolation', this.reportViolation);
    }
  }
}

/**
 * Input sanitization and validation utilities
 */
export class InputSecurity {
  private static readonly SUSPICIOUS_KEYWORDS = [
    'script', 'javascript', 'vbscript', 'onload', 'onerror', 'onclick',
    'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit', 'iframe',
    'object', 'embed', 'applet', 'meta', 'link', 'style', 'base'
  ];

  /**
   * Check for suspicious keywords in input
   */
  static containsSuspiciousKeywords(input: string): boolean {
    const lowerInput = input.toLowerCase();
    return this.SUSPICIOUS_KEYWORDS.some(keyword => lowerInput.includes(keyword));
  }

  /**
   * Encode HTML entities to prevent XSS
   */
  static encodeHTMLEntities(input: string): string {
    const entityMap: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };

    return input.replace(/[&<>"'`=\/]/g, (char) => entityMap[char]);
  }

  /**
   * Remove potentially dangerous Unicode characters
   */
  static removeDangerousUnicode(input: string): string {
    // Remove zero-width characters that could be used for obfuscation
    return input.replace(/[\u200B-\u200D\uFEFF]/g, '')
                .replace(/[\u0000-\u001F\u007F-\u009F]/g, ''); // Remove control characters
  }

  /**
   * Comprehensive input cleaning
   */
  static cleanInput(input: string): string {
    let cleaned = input;
    
    // Remove dangerous Unicode
    cleaned = this.removeDangerousUnicode(cleaned);
    
    // Encode HTML entities
    cleaned = this.encodeHTMLEntities(cleaned);
    
    // Normalize whitespace
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    
    return cleaned;
  }
}

/**
 * Browser fingerprinting detection (basic)
 */
export class FingerprintDetection {
  /**
   * Generate a simple browser fingerprint for rate limiting
   */
  static generateFingerprint(): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Newsletter fingerprint', 2, 2);
    }

    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');

    // Simple hash function
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }

    return Math.abs(hash).toString(36);
  }

  /**
   * Check if the current session appears to be automated
   */
  static detectAutomation(): boolean {
    // Check for common automation indicators
    const indicators = [
      !navigator.webdriver === undefined, // Selenium
      'callPhantom' in window, // PhantomJS
      '_phantom' in window, // PhantomJS
      'Buffer' in window, // Node.js environment
      navigator.userAgent.includes('HeadlessChrome')
    ];

    return indicators.some(indicator => indicator);
  }
}

/**
 * Session security utilities
 */
export class SessionSecurity {
  private static readonly SESSION_KEY = 'newsletter_session';
  private static readonly SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Create a secure session token
   */
  static createSessionToken(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    const fingerprint = FingerprintDetection.generateFingerprint();
    
    return btoa(`${timestamp}:${random}:${fingerprint}`);
  }

  /**
   * Validate session token
   */
  static validateSession(): boolean {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY);
      if (!sessionData) return false;

      const [timestamp, , fingerprint] = atob(sessionData).split(':');
      const sessionAge = Date.now() - parseInt(timestamp);

      // Check if session is expired
      if (sessionAge > this.SESSION_DURATION) {
        this.clearSession();
        return false;
      }

      // Check if fingerprint matches (basic anti-tampering)
      const currentFingerprint = FingerprintDetection.generateFingerprint();
      if (fingerprint !== currentFingerprint) {
        this.clearSession();
        return false;
      }

      return true;
    } catch (error) {
      console.error('Session validation error:', error);
      this.clearSession();
      return false;
    }
  }

  /**
   * Initialize or refresh session
   */
  static initializeSession(): void {
    const token = this.createSessionToken();
    localStorage.setItem(this.SESSION_KEY, token);
  }

  /**
   * Clear session data
   */
  static clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  /**
   * Get session info for debugging
   */
  static getSessionInfo(): { age: number; valid: boolean } | null {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY);
      if (!sessionData) return null;

      const [timestamp] = atob(sessionData).split(':');
      const age = Date.now() - parseInt(timestamp);
      const valid = this.validateSession();

      return { age, valid };
    } catch (error) {
      return null;
    }
  }
}

/**
 * Honeypot field utilities for bot detection
 */
export class HoneypotSecurity {
  /**
   * Create honeypot field properties
   */
  static getHoneypotProps(): React.InputHTMLAttributes<HTMLInputElement> {
    return {
      name: 'website', // Common honeypot field name
      autoComplete: 'off',
      tabIndex: -1,
      style: {
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        pointerEvents: 'none'
      },
      'aria-hidden': true
    };
  }

  /**
   * Check if honeypot was filled (indicates bot)
   */
  static isHoneypotFilled(value: string): boolean {
    return value.trim().length > 0;
  }
}

/**
 * Main security manager
 */
export class NewsletterSecurityManager {
  private static instance: NewsletterSecurityManager;
  private initialized = false;

  static getInstance(): NewsletterSecurityManager {
    if (!this.instance) {
      this.instance = new NewsletterSecurityManager();
    }
    return this.instance;
  }

  /**
   * Initialize all security measures
   */
  initialize(): void {
    if (this.initialized) return;

    // Initialize CSP reporting
    CSPUtils.initializeCSPReporting();

    // Initialize session
    if (!SessionSecurity.validateSession()) {
      SessionSecurity.initializeSession();
    }

    // Log security initialization
    console.log('Newsletter security initialized', {
      timestamp: new Date().toISOString(),
      fingerprint: FingerprintDetection.generateFingerprint(),
      automation: FingerprintDetection.detectAutomation()
    });

    this.initialized = true;
  }

  /**
   * Perform comprehensive security check
   */
  performSecurityCheck(email: string, honeypotValue?: string): {
    passed: boolean;
    reasons: string[];
  } {
    const reasons: string[] = [];

    // Check honeypot
    if (honeypotValue && HoneypotSecurity.isHoneypotFilled(honeypotValue)) {
      reasons.push('Bot detection triggered');
    }

    // Check for automation
    if (FingerprintDetection.detectAutomation()) {
      reasons.push('Automated browser detected');
    }

    // Check session validity
    if (!SessionSecurity.validateSession()) {
      reasons.push('Invalid session');
    }

    // Check for suspicious keywords
    if (InputSecurity.containsSuspiciousKeywords(email)) {
      reasons.push('Suspicious content detected');
    }

    return {
      passed: reasons.length === 0,
      reasons
    };
  }

  /**
   * Get security status for debugging
   */
  getSecurityStatus(): {
    initialized: boolean;
    sessionValid: boolean;
    fingerprint: string;
    automationDetected: boolean;
  } {
    return {
      initialized: this.initialized,
      sessionValid: SessionSecurity.validateSession(),
      fingerprint: FingerprintDetection.generateFingerprint(),
      automationDetected: FingerprintDetection.detectAutomation()
    };
  }
}
