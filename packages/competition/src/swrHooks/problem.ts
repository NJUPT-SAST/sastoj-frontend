/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from "swr";
import { getProblem } from "../apis/user";

//TODO: error的类型为 any

export const useSwrGetProblem = (contestId: number, problemId: number) => {
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, problemId],
    ([contestId, problemId]) => getProblem(contestId, problemId)
  );

  return { data, isLoading, error, mutate };
};
