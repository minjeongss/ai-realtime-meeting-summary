import { useEffect, type SetStateAction } from "react";

interface UseTimerProps {
  setProgress: React.Dispatch<SetStateAction<number>>;
}

const useTimer = ({ setProgress }: UseTimerProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 10;
        if (nextProgress >= 90) {
          clearInterval(timer);
          return 100;
        }
        return nextProgress;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);
};

export default useTimer;
