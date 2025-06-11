import useDownloadPDF from "@/hooks/useDownloadPDF";
import Button from "../../../components/Button";
import pdfImage from "@/assets/images/pdf.svg";

const CompletePDF = ({ pdfLink }: { pdfLink: string }) => {
  const handleDownloadPDF = useDownloadPDF();
  return (
    <div className="flex flex-col gap-3">
      <img className="rounded-xl overflow-hidden" src={pdfImage} alt="pdf" />
      <Button color="blue" onClick={handleDownloadPDF}>
        Download PDF
      </Button>
    </div>
  );
};

export default CompletePDF;
