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

export interface GetHistoryProps {
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

export interface CasesProps {
  index: number;
  point: number;
  state: number;
  time: string;
  memory: string;
}


export const getCases = ({ contest_id, submission_id }: { contest_id: string, submission_id: string }): Promise<{ cases: CasesProps[] }> => {
  return REQUEST({
    url: `/user/contests/${contest_id}/submissions/${submission_id}/cases`,
    method: 'GET'
  })
}

export interface SingleDetial {
  id: string;
  code:string;
  language:string;
  point:number;
  state: number;
  totalTime: string;
  maxMemory: string;
  stderr?:string;
  createdAt:string;
}

export const getSubmitDetail=({ contest_id, submission_id }: { contest_id: string, submission_id: string }):Promise<SingleDetial>=>{
  return REQUEST({
    url: `/user/contests/${contest_id}/submissions/${submission_id}`,
    method: 'GET'
  })
}