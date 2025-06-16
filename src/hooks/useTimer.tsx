import { useEffect, type SetStateAction } from "react";

interface UseTimerProps {
  setProgress: React.Dispatch<SetStateAction<number>>;
}

const useTimer = ({ setProgress }: UseTimerProps) => {
  useEffect(() => {
    let elapsedSeconds = 0;
    const totalSeconds = 35;
    const timer = setInterval(() => {
      elapsedSeconds++;
      const nextProgress = Math.min((elapsedSeconds / totalSeconds) * 100, 100);
      setProgress(nextProgress);

      if (elapsedSeconds >= totalSeconds) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
};

export default useTimer;
