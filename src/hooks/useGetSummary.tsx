import type { TemporalSummaryResponse } from "@/types/ServerResponse";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { SetStateAction } from "react";

export const useGetTemporalSummary = () => {
  const { data, refetch, isFetching } = useQuery<TemporalSummaryResponse>({
    queryKey: ["temporalSummary"],
    queryFn: async () => (await fetch("/temporal")).json(),
    enabled: false,
    retry: 3,
    retryDelay: 500,
  });
  return { data, refetch, isFetching };
};

export const useGetEntireSummary = (
  setIsComplete: React.Dispatch<SetStateAction<boolean>>
) => {
  const { mutate, data } = useMutation({
    mutationKey: ["entireSummary"],
    mutationFn: async () => (await fetch("/entire", { method: "POST" })).json(),
    onSuccess: () => {
      setIsComplete(true);
    },
    retry: 3,
    retryDelay: 500,
  });
  return { mutate, data };
};
