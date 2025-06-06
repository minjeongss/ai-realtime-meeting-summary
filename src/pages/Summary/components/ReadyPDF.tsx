import { Progress } from "@/components/ui/progress";
import { useEffect, useState, type SetStateAction } from "react";

const ReadyPDF = ({
  setIsComplete,
}: {
  setIsComplete: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [progress, setProgress] = useState(0);

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

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center pt-3 pb-3">
        음성 기록 {`->`} 요약 {`->`} PDF 생성
      </p>
      <p>회의록 생성중</p>
      <Progress value={progress} />
      <p className="text-sm text-[#4D7399]">예상 소요 시간: 2분</p>
    </div>
  );
};

export default ReadyPDF;
