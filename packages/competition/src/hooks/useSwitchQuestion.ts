import { useCallback } from "react";
import { useSwrGetProblems } from "../swrHooks/problems";
import { useNavigate } from "react-router-dom";

const useSwitchQuestion = (contestId: number) => {
  const { data } = useSwrGetProblems(contestId);
  const navigate = useNavigate();

  const switchNextQuestion = useCallback(
    (problemId: string) => {
      const currentProblemIndex = data?.problems.findIndex(
        (problem) => problem.id === problemId,
      );

      if (
        currentProblemIndex !== -1 &&
        currentProblemIndex !== undefined &&
        data?.problems[currentProblemIndex + 1]
      )
        navigate("/problems/" + data.problems[currentProblemIndex + 1].id);
    },
    [data?.problems],
  );

  return switchNextQuestion;
};

export default useSwitchQuestion;
