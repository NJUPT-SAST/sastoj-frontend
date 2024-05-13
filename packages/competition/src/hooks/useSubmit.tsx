import { useCallback } from "react";
import { useSwrSubmit } from "../swrHooks/submit";
import { useProblemsStatusStore } from "../stores/useProblemsStatusStore";
import { useParams } from "react-router-dom";
import { useSubmitStore } from "../stores/useSubmitStore";

export const useSubmit = () => {
  const { trigger } = useSwrSubmit();
  const { problemsStatus } = useProblemsStatusStore();
  const { problemId } = useParams();
  const setSubmitState = useSubmitStore((state) => state.setSubmitState);
  const submit = useCallback(() => {
    try {
      const { code, language } = problemsStatus.get(problemId!)!;

      trigger({ code, language })
        .then((response) => {
          console.log(response.submitId);
          setSubmitState("submitting");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [problemId, problemsStatus, trigger, setSubmitState]);

  return submit;
};
