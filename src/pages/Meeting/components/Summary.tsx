import Button from "@/components/Button";
import { useGetTemporalSummary } from "@/hooks/useGetSummary";

const Summary = () => {
  const { data, refetch, isFetching } = useGetTemporalSummary();
  const handleLoadSummary = () => {
    refetch();
  };
  return (
    <div className="flex flex-col p-5 gap-3">
      <p className="font-semibold text-lg">Meeting Summary so far</p>
      <p>
        {isFetching ? "회의록을 불러오고 있습니다...🤖" : data?.parsed.summary}
      </p>
      <Button color="gray" onClick={handleLoadSummary}>
        Load Summary
      </Button>
    </div>
  );
};

export default Summary;
