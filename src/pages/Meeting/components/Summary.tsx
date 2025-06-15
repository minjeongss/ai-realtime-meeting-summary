import Button from "@/components/Button";
// import { useGetTemporalSummary } from "@/hooks/useGetSummary";
import type { TemporalSummaryResponse } from "@/types/SocketResponse";

const Summary = ({
  temporalSummary,
}: {
  temporalSummary: TemporalSummaryResponse | null;
}) => {
  // http가 아닌 socket 사용
  // const { data, refetch, isFetching } = useGetTemporalSummary();
  const handleLoadSummary = () => {
    // refetch();
  };
  return (
    <div className="flex flex-col p-5 gap-3">
      <p className="font-semibold text-lg">Meeting Summary so far</p>
      <p>{temporalSummary ? temporalSummary.title : ""}</p>
      <Button color="gray" onClick={handleLoadSummary}>
        Load Summary
      </Button>
    </div>
  );
};

export default Summary;
