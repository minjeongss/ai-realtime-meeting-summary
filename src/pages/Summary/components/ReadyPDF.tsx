import { Progress } from "@/components/ui/progress";
import useTimer from "@/hooks/useTimer";
import { useState, type SetStateAction } from "react";

const ReadyPDF = ({
  setIsComplete,
}: {
  setIsComplete: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [progress, setProgress] = useState<number>(0);
  useTimer({ progress, setProgress, setIsComplete });

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
