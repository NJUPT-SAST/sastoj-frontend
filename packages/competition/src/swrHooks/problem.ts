/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from "swr";
import { getProblem, historySubmits } from "../apis/user";

//TODO: error的类型为 any

export const useSwrGetProblem = (contestId: number, problemId: number) => {
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, problemId],
    ([contestId, problemId]) => getProblem(contestId, problemId),
  );

  return { data, isLoading, error, mutate };
};

export const useSwrHistorySubmits = (contestId: string, problemId: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, problemId],
    ([contestId, problemId]) => historySubmits({ contest_id: contestId, problem_id: problemId }),
  );
  return { data, isLoading, error, mutate }
}
