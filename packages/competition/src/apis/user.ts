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
