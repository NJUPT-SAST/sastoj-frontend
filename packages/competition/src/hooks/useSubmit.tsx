/* eslint-disable */
import { useCallback } from "react";
import { useSwrSubmit } from "../swrHooks/submit";
import { useProblemsStatusStore } from "../stores/useProblemsStatusStore";
import { useParams } from "react-router-dom";
import { useSubmitStore } from "../stores/useSubmitStore";
import { useDetailpolling } from "./useDetailpolling";
import { showToast } from "@ui-aurora/react";
import { useLanguageStore } from "../stores/useLanguageStore";

export const useSubmited = () => {
  const { trigger } = useSwrSubmit();
  const { problemsStatus } = useProblemsStatusStore();
  const { problemId } = useParams();
  const { setSubmitState, endSubmit } = useSubmitStore((state) => ({
    setSubmitState: state.setSubmitState,
    endSubmit: state.endSubmit,
  }));
  const language = useLanguageStore((state) => state.language);

  // useDetailSSE();
  useDetailpolling();
  const submit = useCallback(() => {
    try {
      const { code } = problemsStatus.get(problemId!)!;
      console.log("此次提交的信息", code, language);
      trigger({ code, language })
        .then((response) => {
          setSubmitState("Submitting", response?.uuid);
        })
        .catch((error) => {
          if (error.state == 500) {
            showToast({
              type: "error",
              content: "提交操作太频繁啦,请等等哦！",
            });
            endSubmit();
          }
        });
    } catch (error) {}
  }, [problemId, problemsStatus, trigger, setSubmitState]);

  return submit;
};
