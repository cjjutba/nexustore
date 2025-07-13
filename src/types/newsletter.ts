// Newsletter subscription types and interfaces

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribedAt: string;
  isActive: boolean;
  preferences?: NewsletterPreferences;
}

export interface NewsletterPreferences {
  categories: string[];
  frequency: 'daily' | 'weekly' | 'monthly';
  dealThreshold: number;
}

export interface NewsletterFormState {
  email: string;
  isLoading: boolean;
  isSubscribed: boolean;
  error: string | null;
  lastSubmissionTime: number | null;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface NewsletterHookReturn {
  formState: NewsletterFormState;
  handleEmailChange: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  isRateLimited: boolean;
}

export interface StoredNewsletterData {
  subscriptions: NewsletterSubscription[];
  lastCleanup: string;
  totalSubscriptions: number;
}

// Security-related types
export interface SecurityConfig {
  maxEmailLength: number;
  rateLimitWindow: number; // in milliseconds
  maxSubmissionsPerWindow: number;
  allowedDomains?: string[];
  blockedDomains?: string[];
}

export interface SanitizationResult {
  sanitized: string;
  wasModified: boolean;
  threats: string[];
}

// Constants for security configuration
export const SECURITY_CONFIG: SecurityConfig = {
  maxEmailLength: 254, // RFC 5321 standard
  rateLimitWindow: 60000, // 1 minute
  maxSubmissionsPerWindow: 3,
  blockedDomains: [
    'tempmail.org',
    '10minutemail.com',
    'guerrillamail.com',
    'mailinator.com'
  ]
};

// Storage keys
export const STORAGE_KEYS = {
  NEWSLETTER_DATA: 'nexustore_newsletter_data',
  RATE_LIMIT: 'nexustore_newsletter_rate_limit',
  LAST_SUBMISSION: 'nexustore_newsletter_last_submission'
} as const;
