// Flash Deal Timer Utility with localStorage persistence
// Creates urgency with shorter timer duration (45 minutes instead of 24 hours)

import React from 'react';

const TIMER_DURATION_MINUTES = 45; // 45 minutes for urgency
const STORAGE_KEY = 'nexustore_flash_deal_timer';

interface TimerData {
  endTime: number;
  startTime: number;
}

// Get the current timer data from localStorage or create new one
export const getTimerData = (): TimerData => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data: TimerData = JSON.parse(stored);
      const now = Date.now();
      
      // Check if timer has expired
      if (now >= data.endTime) {
        // Timer expired, create new timer
        return createNewTimer();
      }
      
      return data;
    }
  } catch (error) {
    console.error('Error reading timer from localStorage:', error);
  }
  
  // No stored timer or error, create new one
  return createNewTimer();
};

// Create a new timer and save to localStorage
const createNewTimer = (): TimerData => {
  const now = Date.now();
  const endTime = now + (TIMER_DURATION_MINUTES * 60 * 1000); // Convert minutes to milliseconds
  
  const timerData: TimerData = {
    startTime: now,
    endTime: endTime
  };
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timerData));
  } catch (error) {
    console.error('Error saving timer to localStorage:', error);
  }
  
  return timerData;
};

// Get remaining seconds for the timer
export const getRemainingSeconds = (): number => {
  const timerData = getTimerData();
  const now = Date.now();
  const remainingMs = Math.max(0, timerData.endTime - now);
  return Math.floor(remainingMs / 1000);
};

// Format time display (HH:MM:SS)
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// Reset timer (create new timer cycle)
export const resetTimer = (): TimerData => {
  return createNewTimer();
};

// Hook for using flash deal timer in React components
export const useFlashDealTimer = () => {
  const [timeLeft, setTimeLeft] = React.useState(() => getRemainingSeconds());
  
  React.useEffect(() => {
    // Update timer immediately
    setTimeLeft(getRemainingSeconds());
    
    const timer = setInterval(() => {
      const remaining = getRemainingSeconds();
      setTimeLeft(remaining);
      
      // If timer reaches 0, reset it automatically
      if (remaining <= 0) {
        resetTimer();
        setTimeLeft(getRemainingSeconds());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    resetTimer: () => {
      resetTimer();
      setTimeLeft(getRemainingSeconds());
    }
  };
};


