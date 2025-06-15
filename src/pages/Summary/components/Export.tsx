import { useSocket } from "@/hooks/useSocket";
import CompletePDF from "./CompletePDF";
import ReadyPDF from "./ReadyPDF";
const Export = () => {
  const { entireSummary } = useSocket();

  return (
    <div className="flex flex-col gap-3 pt-4 pl-4 pr-4">
      <p className="font-semibold text-lg">Export to PDF</p>
      <p className="text-center text-base pb-3">
        <span>We've summarized your meeting and created a PDF for you.</span>
        <span> You can download it now or start a new meeting.</span>
      </p>
      {entireSummary ? (
        <CompletePDF pdfLink={entireSummary?.pdfLinks} />
      ) : (
        <ReadyPDF />
      )}
    </div>
  );
};

export default Export;
