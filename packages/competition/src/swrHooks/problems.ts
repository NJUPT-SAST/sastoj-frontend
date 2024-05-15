import useSWR from "swr";
import { getProblems } from "../apis/user";

export const useSwrGetProblems = (contestId: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading, error } = useSWR(
    ["get problems", contestId],
    ([, contestId]) => getProblems(contestId),
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { data, isLoading, error };
};
