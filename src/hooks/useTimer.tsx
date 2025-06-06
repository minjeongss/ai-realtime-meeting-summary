import { useEffect, type SetStateAction } from "react";

interface UseTimerProps {
  progress: number;
  setProgress: React.Dispatch<SetStateAction<number>>;
  setIsComplete: React.Dispatch<SetStateAction<boolean>>;
}

const useTimer = ({ progress, setProgress, setIsComplete }: UseTimerProps) => {
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
    if (progress === 100) setIsComplete(true);
  }, [progress, setProgress, setIsComplete]);
};

export default useTimer;
