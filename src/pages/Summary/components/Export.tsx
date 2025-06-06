import { useState } from "react";
import CompletePDF from "./CompletePDF";

const Export = () => {
  const [isComplete, setIsComplete] = useState(true);
  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="font-semibold text-lg">Export to PDF</p>
      <p className="text-center text-sm pb-3">
        We've summarized your meeting and created a PDF for you. You can
        download it now or start a new meeting.
      </p>
      {isComplete ? <CompletePDF /> : <></>}
    </div>
  );
};

export default Export;
