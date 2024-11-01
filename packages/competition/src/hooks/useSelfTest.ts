/* eslint-disable */
import { useParams } from "react-router-dom";
import { useSelfTestStatusStore } from "../stores/useSelfTestStore";
import { useSwrSelfTest } from "../swrHooks/selfTest";
import { useSelfStore } from "../stores/useSelfSotre";
import { useSelefpolling } from "./useSelfpolling";
import { useCallback } from "react";
import { useProblemsStatusStore } from "../stores/useProblemsStatusStore";
import { showToast } from "@ui-aurora/react";

export const useSelfTest = () => {
  const { trigger } = useSwrSelfTest();
  const { SelfsStatus } = useSelfTestStatusStore();
  const { problemsStatus } = useProblemsStatusStore();
  const { problemId } = useParams();
  const { setSelfState, endSelf } = useSelfStore((state) => ({
    setSelfState: state.setSelfState,
    endSelf: state.endSelf,
  }));

  useSelefpolling();
  const selfTest = useCallback(() => {
    const { code: input } = SelfsStatus.get(problemId!)!;
    const { code } = problemsStatus.get(problemId!)!;
    const language = JSON.parse(localStorage.getItem("language") ?? "").state
      .language;
    console.log("拿到的language", language);
    trigger({ code, language, input })
      .then((res) => {
        setSelfState("Selfing", res?.uuid);
      })
      .catch((err) => {
        if (err.state == 500) {
          showToast({ type: "error", content: "自测操作太频繁啦,请等等哦！" });
          endSelf();
        }
      });
  }, [problemId, SelfsStatus, setSelfState, trigger]);

  return selfTest;
};
