import { useEffect, useState } from 'react';

export default function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  return time;
}
