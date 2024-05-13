import useSWR from "swr";
import { getContest } from "../apis/contest";

export const useSwrGetContest = (contestId: number) => {
  const { data, isLoading } = useSWR([contestId], ([contestId]) =>
    getContest(contestId),
  );

  return { data, isLoading };
};
