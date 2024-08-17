import { useParams } from "react-router-dom";
import { ProblemsStatusState } from "../stores/useProblemsStatusStore";
import { useMemo } from "react";
import { showToast } from "@ui-aurora/react";

export const useCodeEditor = <T extends ProblemsStatusState>(
  useStore: (selector: (state: T) => any) => any, defaultMsg: string
) => {
  const { problemId } = useParams();



  const [problemsStatus, initProblem, changeContent] = useStore(
    (state) => [state.problemsStatus, state.initProblem, state.changeContent],
  );

  const handleCodeEditor = (value: string, language: string) => {
    if (problemId) {
      if (!problemsStatus.get(problemId)) {
        initProblem?.(problemId);
      }
      changeContent?.(problemId, value, language);
    } else {
      showToast({
        type: "error",
        content: <>题目ID不存在</>,
      });
      throw new Error("题目ID不存在");
    }
  };

  const defaultValue: string | undefined = useMemo(() => {
    if (problemId && problemsStatus.get(problemId)) {
      return problemsStatus.get(problemId)?.code;
    } else return defaultMsg;
  }, [problemId, problemsStatus]);

  return { handleCodeEditor, defaultValue };
};
