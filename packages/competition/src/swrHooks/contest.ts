import useSWR from "swr";
import { getContest } from "../apis/contest";

export const useSwrGetContest = (contestId: number) => {
  const { data, isLoading } = useSWR(
    ["get contest", contestId],
    ([, contestId]) => getContest(contestId),
  );

  return { data, isLoading };
};
