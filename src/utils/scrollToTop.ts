import { useEffect } from 'react';

/**
 * Utility function to scroll to the top of the page
 * This is used when navigating to category pages to ensure
 * users see the page header and content from the beginning
 */
export const scrollToTop = (behavior: ScrollBehavior = 'instant') => {
  // Scroll to the very top of the page
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior
  });
};

/**
 * Hook to automatically scroll to top when component mounts
 * Use this in category pages to ensure they start at the top
 */
export const useScrollToTop = (behavior: ScrollBehavior = 'instant') => {
  useEffect(() => {
    scrollToTop(behavior);
  }, [behavior]);
};
