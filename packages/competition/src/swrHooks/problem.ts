/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from "swr";
import { getCases, getProblem, historySubmits } from "../apis/user";


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

export const useGetCases = (contestId: string, submissionId: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, submissionId],
    ([contestId, submissionId]) => getCases({ contest_id: contestId, submission_id: submissionId }),
    {
      revalidateOnMount: false,   // 禁用组件挂载时的自动请求
      revalidateOnFocus: false,   // 禁用页面获取焦点时的自动请求
      revalidateOnReconnect: false // 禁用重新连接时的自动请求
  }
  )
  return { data, isLoading, error, mutate }
}