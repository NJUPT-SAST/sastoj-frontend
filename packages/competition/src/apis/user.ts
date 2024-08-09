import REQUEST from "../utils/web/request";
import { Problem } from "../types/problem";

interface GetProblemsProps {
  problems: Problem[];
}

export const getProblems = (contestId: number): Promise<GetProblemsProps> => {
  return REQUEST({
    url: `/user/contests/${contestId}/problems`,
    method: "GET",
  });
};

export const getProblem = (
  contestId: number,
  problemId: number,
): Promise<Problem> => {
  return REQUEST({
    url: `/user/contests/${contestId}/problems/${problemId}`,
    method: "GET",
  });
};

interface GetHistoryProps {
  id: string;
  language: string;
  point: number;
  status: number;
  createdAt: string;
}

export const historySubmits = ({ contest_id, problem_id }: { contest_id: string, problem_id: string }): Promise<{ submissions: GetHistoryProps[] }> => {
  return REQUEST({
    url: `/user/contests/${contest_id}/problems/${problem_id}/submissions`,
    method: 'GET'
  })
}