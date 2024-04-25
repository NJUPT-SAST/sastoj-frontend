import REQUEST from "../utils/web/request";

export const getProblems = (contestId: number) => {
  return REQUEST({
    url: `/user/contests/${contestId}/problems`,
    method: "GET",
  });
};

export const getProblem = (contestId: number, problemId: number) => {
  return REQUEST({
    url: `/user/contests/${contestId}/problems/${problemId}`,
    method: "GET",
  });
};
