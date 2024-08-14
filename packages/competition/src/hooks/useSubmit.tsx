import { useCallback } from "react";
import { useSwrSubmit } from "../swrHooks/submit";
import { useProblemsStatusStore } from "../stores/useProblemsStatusStore";
import { useParams } from "react-router-dom";
import { useSubmitStore } from "../stores/useSubmitStore";
import { useDetailpolling } from "./useDetailpolling";
import { useSwrHistorySubmits } from "../swrHooks/problem";
// import { useDetailSSE } from "./useDetailSSE";

export const useSubmited = () => {
  const { trigger } = useSwrSubmit();
  const { problemsStatus } = useProblemsStatusStore();
  const contestId = localStorage.getItem('contestId');
  const { problemId } = useParams();
  const setSubmitState = useSubmitStore((state) => state.setSubmitState);
  const { mutate } = useSwrHistorySubmits(contestId as unknown as string, problemId as unknown as string)

  // useDetailSSE();
  useDetailpolling()
  const submit = useCallback(() => {
    try {
      const { code, language } = problemsStatus.get(problemId!)!;
      trigger({ code, language })
        .then((response) => {
          console.log(response);
          mutate().then(res => {
            setSubmitState("Submitting", res?.submissions[0]?.id||'0');
          })
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