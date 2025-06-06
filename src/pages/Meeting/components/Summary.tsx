import Button from "@/components/Button";
import { MockSummary } from "../../../mocks/MockSummary";

const Summary = () => {
  const handleLoadSummary = () => {};
  return (
    <div className="flex flex-col p-5 gap-3">
      <p className="font-semibold text-lg">Meeting Summary so far</p>
      <p>{MockSummary}</p>
      <Button color="gray" onClick={handleLoadSummary}>
        Load Summary
      </Button>
    </div>
  );
};

export default Summary;
