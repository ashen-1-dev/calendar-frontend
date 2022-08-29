import { useEffect, useState } from 'react';

export const useRemainingTimeUntilNow = (date: Date): number => {
  const [remainingTime, setRemainingTime] = useState<number>(
    date.getTime() - new Date().getTime(),
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(date.getTime() - new Date().getTime());
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return remainingTime;
};
