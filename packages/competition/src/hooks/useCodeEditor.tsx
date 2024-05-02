import { useParams } from "react-router-dom";
import { useProblemsStatusStore } from "../stores/useProblemsStatusStore";
import { useMemo } from "react";

export const useCodeEditor = () => {
  const { problemId } = useParams();

  const [problemsStatus, initProblem, changeContent] = useProblemsStatusStore(
    (state) => [state.problemsStatus, state.initProblem, state.changeContent],
  );

  const handleCodeEditor = (value: string) => {
    if (problemId) {
      if (!problemsStatus.get(problemId)) {
        initProblem?.(problemId);
      }
      changeContent?.(problemId, value);
    } else {
      throw new Error("题目ID不存在");
    }
  };

  const defaultValue: string | undefined = useMemo(() => {
    if (problemId && problemsStatus.get(problemId)) {
      return problemsStatus.get(problemId)?.content;
    } else return `Problem: ${problemId} \n Write some code here !!!`;
  }, [problemId, problemsStatus]);

  return { handleCodeEditor, defaultValue };
};
