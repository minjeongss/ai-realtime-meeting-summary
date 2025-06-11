import type { SummaryResponse } from "@/types/ServerResponse";
import { useQuery } from "@tanstack/react-query";

export const useGetTemporalSummary = () => {
  const { data, refetch, isFetching } = useQuery<SummaryResponse>({
    queryKey: ["temporalSummary"],
    queryFn: async () => (await fetch("/temporal")).json(),
    enabled: false,
  });
  return { data, refetch, isFetching };
};

export const useGetEntireSummary = () => {
  const query = useQuery({
    queryKey: ["entireSummary"],
    queryFn: async () => (await fetch("/entire")).json(),
  });
};
