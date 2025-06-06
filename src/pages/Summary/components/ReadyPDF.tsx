import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const ReadyPDF = () => {
  const [progress, setProgress] = useState(13);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center pt-3 pb-3">
        음성 기록 {`->`} 요약 {`->`} PDF 생성
      </p>
      <p>회의록 생성중</p>
      <Progress value={progress} />
      <p className="text-sm text-[#4D7399]">예상 남은 시간: 2분</p>
    </div>
  );
};

export default ReadyPDF;
