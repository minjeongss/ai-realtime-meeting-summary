import { Progress } from "@/components/ui/progress";
import useTimer from "@/hooks/useTimer";
import { useState } from "react";

const ReadyPDF = () => {
  const [progress, setProgress] = useState<number>(0);
  useTimer({ setProgress });

  return (
    <div className="flex flex-col gap-3">
      <p>Making meeting summary 🔥</p>
      <Progress value={progress} />
      <p className="text-sm text-[#4D7399]">Expected Time: 2 Minutes</p>
    </div>
  );
};

export default ReadyPDF;
