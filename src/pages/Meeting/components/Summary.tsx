import type { TemporalSummaryResponse } from "@/types/SocketResponse";

const Summary = ({
  temporalSummary,
}: {
  temporalSummary: TemporalSummaryResponse | null;
}) => {
  return (
    <div className="flex flex-col p-5 gap-3">
      <p className="font-semibold text-lg">Meeting Summary so far</p>
      <p>
        {temporalSummary
          ? temporalSummary.summaryText.summary
          : "A summary of the previous meeting will appear in 2 seconds. Please wait a moment! 🤖"}
      </p>
    </div>
  );
};

export default Summary;
