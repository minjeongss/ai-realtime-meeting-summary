import useDownloadPDF from "@/hooks/useDownloadPDF";
import Button from "../../../components/Button";

const CompletePDF = ({ PDF }) => {
  const handleDownloadPDF = useDownloadPDF();
  return (
    <div className="flex flex-col gap-3">
      <img
        className="rounded-xl overflow-hidden"
        src="/src/assets/images/pdf.svg"
        alt="pdf"
      />
      <Button color="blue" onClick={handleDownloadPDF}>
        Download PDF
      </Button>
    </div>
  );
};

export default CompletePDF;
