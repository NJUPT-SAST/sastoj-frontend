/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from "swr";
import { getCases, getProblem, getSubmitDetail, historySubmits } from "../apis/user";
import useSWRMutation from "swr/mutation";


export const useSwrGetProblem = (contestId: number, problemId: number) => {
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, problemId],
    ([contestId, problemId]) => getProblem(contestId, problemId),
  );

  return { data, isLoading, error, mutate };
};

export const useSwrGetSubmitDetail=(contestId: string, submissionId: string)=>{
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, submissionId],
    ([contestId, submissionId]) => getSubmitDetail({ contest_id: contestId, submission_id: submissionId }),
  )
  return { data, isLoading, error, mutate }
}

export const useSwrHistorySubmits = (contestId: string, problemId: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    [contestId, problemId],
    ([contestId, problemId]) => historySubmits({ contest_id: contestId, problem_id: problemId }),
  );
  return { data, isLoading, error, mutate }
}

export const useGetCases = (contestId: string, submissionId: string) => {
  const { data, error } = useSWRMutation(
    [contestId, submissionId],
    ([contestId, submissionId]) => getCases({ contest_id: contestId, submission_id: submissionId }),
  )
  return { data, error }
}

