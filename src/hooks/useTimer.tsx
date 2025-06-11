import { useEffect, type SetStateAction } from "react";

interface UseTimerProps {
  progress: number;
  setProgress: React.Dispatch<SetStateAction<number>>;
  isComplete: boolean;
}

const useTimer = ({ progress, setProgress, isComplete }: UseTimerProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 10;
        if (nextProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return nextProgress;
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isComplete === true) setProgress(100);
  }, [progress, setProgress, isComplete]);
};

export default useTimer;
