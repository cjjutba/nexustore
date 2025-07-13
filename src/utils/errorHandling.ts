// Error types for better error handling
export enum ErrorType {
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  NETWORK = 'network',
  STORAGE = 'storage',
  UNKNOWN = 'unknown'
}

export interface AppError {
  type: ErrorType;
  message: string;
  details?: string;
  code?: string;
}

// Create standardized error objects
export const createError = (
  type: ErrorType,
  message: string,
  details?: string,
  code?: string
): AppError => ({
  type,
  message,
  details,
  code
});

// Common error messages
export const ERROR_MESSAGES = {
  // Authentication errors
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_EXISTS: 'An account with this email already exists',
  WEAK_PASSWORD: 'Password must be at least 6 characters long',
  PASSWORDS_DONT_MATCH: "Passwords don't match",
  UNAUTHORIZED: 'You must be logged in to access this feature',
  
  // Validation errors
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  
  // Network errors
  NETWORK_ERROR: 'Network error. Please check your connection',
  SERVER_ERROR: 'Server error. Please try again later',
  
  // Storage errors
  STORAGE_ERROR: 'Unable to save data. Please try again',
  STORAGE_FULL: 'Storage is full. Please clear some data',
  
  // Generic errors
  UNKNOWN_ERROR: 'An unexpected error occurred',
  OPERATION_FAILED: 'Operation failed. Please try again'
};

// Validation functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < 6) {
    return { isValid: false, message: ERROR_MESSAGES.WEAK_PASSWORD };
  }
  return { isValid: true };
};

export const validateRequired = (value: string, fieldName: string): { isValid: boolean; message?: string } => {
  if (!value.trim()) {
    return { isValid: false, message: `${fieldName} is required` };
  }
  return { isValid: true };
};

// Form validation helper
export const validateForm = (
  data: Record<string, any>,
  rules: Record<string, (value: any) => { isValid: boolean; message?: string }>
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  let isValid = true;

  Object.keys(rules).forEach(field => {
    const validation = rules[field](data[field]);
    if (!validation.isValid) {
      errors[field] = validation.message || ERROR_MESSAGES.UNKNOWN_ERROR;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Error logging (in a real app, this would send to a logging service)
export const logError = (error: AppError, context?: string): void => {
  console.error(`[${error.type.toUpperCase()}] ${error.message}`, {
    details: error.details,
    code: error.code,
    context,
    timestamp: new Date().toISOString()
  });
};

// Handle localStorage errors gracefully
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      logError(createError(ErrorType.STORAGE, 'Failed to read from localStorage'), key);
      return null;
    }
  },

  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      logError(createError(ErrorType.STORAGE, 'Failed to write to localStorage'), key);
      return false;
    }
  },

  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      logError(createError(ErrorType.STORAGE, 'Failed to remove from localStorage'), key);
      return false;
    }
  }
};

// Retry mechanism for failed operations
export const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError!;
};
