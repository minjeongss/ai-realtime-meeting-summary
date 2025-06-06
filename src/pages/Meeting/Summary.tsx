import { MockSummary } from "../../mocks/MockSummary";

const Summary = () => {
  return (
    <div className="flex flex-col p-5">
      <p className="pb-3 font-semibold text-xl">Meeting Summary so far</p>
      <p>{MockSummary}</p>
    </div>
  );
};

export default Summary;
