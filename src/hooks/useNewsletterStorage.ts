import { useState, useEffect, useCallback } from 'react';
import { NewsletterSubscription, StoredNewsletterData, STORAGE_KEYS } from '@/types/newsletter';

/**
 * Custom hook for managing newsletter subscriptions in localStorage
 */
export const useNewsletterStorage = () => {
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Generate unique ID for subscription
   */
  const generateId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  /**
   * Get default storage data structure
   */
  const getDefaultStorageData = (): StoredNewsletterData => ({
    subscriptions: [],
    lastCleanup: new Date().toISOString(),
    totalSubscriptions: 0
  });

  /**
   * Safely parse JSON from localStorage
   */
  const safeParseJSON = <T>(data: string | null, fallback: T): T => {
    if (!data) return fallback;
    
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to parse newsletter data from localStorage:', error);
      return fallback;
    }
  };

  /**
   * Load subscriptions from localStorage
   */
  const loadSubscriptions = useCallback(() => {
    try {
      setIsLoading(true);
      setError(null);

      const rawData = localStorage.getItem(STORAGE_KEYS.NEWSLETTER_DATA);
      const data = safeParseJSON(rawData, getDefaultStorageData());

      // Validate data structure
      if (!Array.isArray(data.subscriptions)) {
        throw new Error('Invalid subscription data structure');
      }

      // Filter out invalid subscriptions
      const validSubscriptions = data.subscriptions.filter((sub: any) => 
        sub && 
        typeof sub.id === 'string' && 
        typeof sub.email === 'string' && 
        typeof sub.subscribedAt === 'string' &&
        typeof sub.isActive === 'boolean'
      );

      setSubscriptions(validSubscriptions);
    } catch (error) {
      console.error('Failed to load newsletter subscriptions:', error);
      setError('Failed to load subscription data');
      setSubscriptions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Save subscriptions to localStorage
   */
  const saveSubscriptions = useCallback((newSubscriptions: NewsletterSubscription[]) => {
    try {
      const storageData: StoredNewsletterData = {
        subscriptions: newSubscriptions,
        lastCleanup: new Date().toISOString(),
        totalSubscriptions: newSubscriptions.length
      };

      localStorage.setItem(STORAGE_KEYS.NEWSLETTER_DATA, JSON.stringify(storageData));
      setSubscriptions(newSubscriptions);
      setError(null);
    } catch (error) {
      console.error('Failed to save newsletter subscriptions:', error);
      setError('Failed to save subscription data');
      throw error;
    }
  }, []);

  /**
   * Add new subscription
   */
  const addSubscription = useCallback((email: string): Promise<NewsletterSubscription> => {
    return new Promise((resolve, reject) => {
      try {
        // Check if email already exists
        const existingSubscription = subscriptions.find(
          sub => sub.email.toLowerCase() === email.toLowerCase() && sub.isActive
        );

        if (existingSubscription) {
          reject(new Error('Email address is already subscribed'));
          return;
        }

        const newSubscription: NewsletterSubscription = {
          id: generateId(),
          email: email.toLowerCase().trim(),
          subscribedAt: new Date().toISOString(),
          isActive: true,
          preferences: {
            categories: [],
            frequency: 'weekly',
            dealThreshold: 0
          }
        };

        const updatedSubscriptions = [...subscriptions, newSubscription];
        saveSubscriptions(updatedSubscriptions);
        resolve(newSubscription);
      } catch (error) {
        reject(error);
      }
    });
  }, [subscriptions, saveSubscriptions]);

  /**
   * Check if email is already subscribed
   */
  const isEmailSubscribed = useCallback((email: string): boolean => {
    return subscriptions.some(
      sub => sub.email.toLowerCase() === email.toLowerCase() && sub.isActive
    );
  }, [subscriptions]);

  /**
   * Unsubscribe email
   */
  const unsubscribeEmail = useCallback((email: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        const updatedSubscriptions = subscriptions.map(sub =>
          sub.email.toLowerCase() === email.toLowerCase()
            ? { ...sub, isActive: false }
            : sub
        );

        saveSubscriptions(updatedSubscriptions);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }, [subscriptions, saveSubscriptions]);

  /**
   * Get subscription statistics
   */
  const getStats = useCallback(() => {
    const activeSubscriptions = subscriptions.filter(sub => sub.isActive);
    const totalSubscriptions = subscriptions.length;
    const inactiveSubscriptions = totalSubscriptions - activeSubscriptions.length;

    // Calculate subscription trends (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentSubscriptions = activeSubscriptions.filter(
      sub => new Date(sub.subscribedAt) >= thirtyDaysAgo
    );

    return {
      total: totalSubscriptions,
      active: activeSubscriptions.length,
      inactive: inactiveSubscriptions,
      recent: recentSubscriptions.length,
      subscriptions: activeSubscriptions
    };
  }, [subscriptions]);

  /**
   * Clean up old inactive subscriptions
   */
  const cleanupOldSubscriptions = useCallback((daysOld: number = 90) => {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);

      const cleanedSubscriptions = subscriptions.filter(sub => {
        if (sub.isActive) return true; // Keep all active subscriptions
        
        const subscribedDate = new Date(sub.subscribedAt);
        return subscribedDate >= cutoffDate; // Keep recent inactive subscriptions
      });

      if (cleanedSubscriptions.length !== subscriptions.length) {
        saveSubscriptions(cleanedSubscriptions);
        return subscriptions.length - cleanedSubscriptions.length; // Return number of cleaned items
      }

      return 0;
    } catch (error) {
      console.error('Failed to cleanup old subscriptions:', error);
      return 0;
    }
  }, [subscriptions, saveSubscriptions]);

  /**
   * Clear all subscription data
   */
  const clearAllData = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEYS.NEWSLETTER_DATA);
      setSubscriptions([]);
      setError(null);
    } catch (error) {
      console.error('Failed to clear newsletter data:', error);
      setError('Failed to clear subscription data');
    }
  }, []);

  /**
   * Export subscription data
   */
  const exportData = useCallback(() => {
    try {
      const exportData = {
        subscriptions: subscriptions.filter(sub => sub.isActive),
        exportedAt: new Date().toISOString(),
        totalCount: subscriptions.filter(sub => sub.isActive).length
      };

      return JSON.stringify(exportData, null, 2);
    } catch (error) {
      console.error('Failed to export newsletter data:', error);
      throw new Error('Failed to export subscription data');
    }
  }, [subscriptions]);

  // Load subscriptions on mount
  useEffect(() => {
    loadSubscriptions();
  }, [loadSubscriptions]);

  // Auto-cleanup old subscriptions periodically
  useEffect(() => {
    const cleanup = () => {
      const lastCleanup = localStorage.getItem('newsletter_last_cleanup');
      const now = Date.now();
      const oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

      if (!lastCleanup || now - parseInt(lastCleanup) > oneWeek) {
        cleanupOldSubscriptions();
        localStorage.setItem('newsletter_last_cleanup', now.toString());
      }
    };

    cleanup();
  }, [cleanupOldSubscriptions]);

  return {
    subscriptions: subscriptions.filter(sub => sub.isActive),
    allSubscriptions: subscriptions,
    isLoading,
    error,
    addSubscription,
    isEmailSubscribed,
    unsubscribeEmail,
    getStats,
    cleanupOldSubscriptions,
    clearAllData,
    exportData,
    reloadSubscriptions: loadSubscriptions
  };
};
