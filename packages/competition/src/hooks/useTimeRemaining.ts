import { useCallback, useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useTimeRemaining = (targetDate: Date) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(),
  );

  function calculateTimeRemaining(): TimeRemaining {
    const currentTime = new Date().getTime();
    const difference = new Date(targetDate).getTime() - currentTime;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const cachedCalculateTimeRemaining = useCallback(calculateTimeRemaining, [
    targetDate,
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(cachedCalculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [cachedCalculateTimeRemaining]);

  return timeRemaining;
};
