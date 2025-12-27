/**
 * Hook for testing countdown - shows time until 2 minutes from now instead of midnight
 * USE THIS FOR TESTING ONLY
 */
import { useState, useEffect } from 'react';

export const useTestCountdown = (testDurationMinutes: number = 2) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const testEnd = new Date(now.getTime() + testDurationMinutes * 60 * 1000);
      
      const diff = testEnd.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [testDurationMinutes]);

  return timeLeft;
};

