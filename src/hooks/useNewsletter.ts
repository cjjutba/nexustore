import { useState, useCallback, useEffect } from 'react';
import { NewsletterFormState, NewsletterHookReturn } from '@/types/newsletter';
import { NewsletterValidator, RateLimiter } from '@/utils/newsletterValidation';
import { useNewsletterStorage } from './useNewsletterStorage';
import { useToast } from '@/hooks/use-toast';

/**
 * Main newsletter hook that manages form state, validation, and submission
 */
export const useNewsletter = (): NewsletterHookReturn => {
  const { toast } = useToast();
  const { addSubscription, isEmailSubscribed, getStats } = useNewsletterStorage();

  const [formState, setFormState] = useState<NewsletterFormState>({
    email: '',
    isLoading: false,
    isSubscribed: false,
    error: null,
    lastSubmissionTime: null
  });

  const [isRateLimited, setIsRateLimited] = useState(false);

  /**
   * Check rate limiting status
   */
  const checkRateLimit = useCallback(() => {
    const rateLimited = RateLimiter.isRateLimited('newsletter_subscription');
    setIsRateLimited(rateLimited);
    return rateLimited;
  }, []);

  /**
   * Handle email input change with real-time validation
   */
  const handleEmailChange = useCallback((email: string) => {
    setFormState(prev => ({
      ...prev,
      email,
      error: null,
      isSubscribed: false
    }));
  }, []);

  /**
   * Validate email with comprehensive checks
   */
  const validateEmail = useCallback((email: string) => {
    // Basic validation
    const validationResult = NewsletterValidator.fullValidation(email);
    if (!validationResult.isValid) {
      return validationResult;
    }

    // Check if already subscribed
    if (isEmailSubscribed(email)) {
      return {
        isValid: false,
        error: 'This email address is already subscribed to our newsletter'
      };
    }

    return { isValid: true };
  }, [isEmailSubscribed]);

  /**
   * Simulate newsletter subscription process
   */
  const simulateSubscription = useCallback(async (email: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Simulate occasional failures for demonstration
    if (Math.random() < 0.05) { // 5% failure rate
      throw new Error('Network error. Please try again.');
    }

    // Add to local storage
    await addSubscription(email);
  }, [addSubscription]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limiting
    if (checkRateLimit()) {
      const resetTime = RateLimiter.getResetTime('newsletter_subscription');
      const minutes = Math.ceil(resetTime / 60000);
      
      setFormState(prev => ({
        ...prev,
        error: `Too many attempts. Please try again in ${minutes} minute${minutes !== 1 ? 's' : ''}.`
      }));

      toast({
        title: "Rate Limited",
        description: `Please wait ${minutes} minute${minutes !== 1 ? 's' : ''} before trying again.`,
        variant: "destructive",
      });

      return;
    }

    const email = formState.email.trim();

    // Validate email
    const validationResult = validateEmail(email);
    if (!validationResult.isValid) {
      setFormState(prev => ({
        ...prev,
        error: validationResult.error || 'Invalid email address'
      }));

      toast({
        title: "Validation Error",
        description: validationResult.error || 'Invalid email address',
        variant: "destructive",
      });

      return;
    }

    // Record rate limit attempt
    RateLimiter.recordAttempt('newsletter_subscription');

    // Start loading state
    setFormState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      lastSubmissionTime: Date.now()
    }));

    try {
      // Simulate subscription process
      await simulateSubscription(email);

      // Success state
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        isSubscribed: true,
        email: '' // Clear email on success
      }));

      // Get updated stats for success message
      const stats = getStats();

      toast({
        title: "Successfully Subscribed!",
        description: `Welcome to NexuStore newsletter! You're subscriber #${stats.active}.`,
        variant: "default",
      });

      // Auto-reset success state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          isSubscribed: false
        }));
      }, 5000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to subscribe. Please try again.';
      
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage
      }));

      toast({
        title: "Subscription Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [formState.email, validateEmail, simulateSubscription, checkRateLimit, getStats, toast]);

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setFormState({
      email: '',
      isLoading: false,
      isSubscribed: false,
      error: null,
      lastSubmissionTime: null
    });
  }, []);

  /**
   * Check rate limit status on mount and periodically
   */
  useEffect(() => {
    checkRateLimit();
    
    // Check rate limit every 30 seconds
    const interval = setInterval(checkRateLimit, 30000);
    
    return () => clearInterval(interval);
  }, [checkRateLimit]);

  /**
   * Auto-clear errors after 10 seconds
   */
  useEffect(() => {
    if (formState.error) {
      const timeout = setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          error: null
        }));
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [formState.error]);

  return {
    formState,
    handleEmailChange,
    handleSubmit,
    resetForm,
    isRateLimited
  };
};
