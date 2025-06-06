import Button from "../../../components/Button";

const CompletePDF = () => {
  return (
    <div>
      <img
        className="rounded-xl overflow-hidden"
        src="/src/assets/images/pdf.svg"
        alt="pdf"
      />
      <Button color="blue">Download PDF</Button>
    </div>
  );
};

export default CompletePDF;
