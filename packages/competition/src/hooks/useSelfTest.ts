import { useParams } from "react-router-dom";
import { useSelfTestStatusStore } from "../stores/useSelfTestStore";
import { useSwrSelfTest } from "../swrHooks/selfTest";
import { useSelfStore } from "../stores/useSelfSotre";
import { useSelefpolling } from "./useSelfpolling";
import { useCallback } from "react";
import { useProblemsStatusStore } from "../stores/useProblemsStatusStore";

export const useSelfTest = () => {
  const { trigger } = useSwrSelfTest();
  const { SelfsStatus } = useSelfTestStatusStore()
  const { problemsStatus } = useProblemsStatusStore();
  const { problemId } = useParams()
  const setSelfState = useSelfStore((state) => state.setSelfState)

  useSelefpolling()
  const selfTest = useCallback(() => {
    try {
      const { code: input } = SelfsStatus.get(problemId!)!;
      const { language, code } = problemsStatus.get(problemId!)!;
      trigger({ code, language, input })
        .then((res) => {
          setSelfState('Selfing', res?.uuid)     
        })
    } catch (err) {
      console.log(err);
    }
  }, [problemId, SelfsStatus, setSelfState, trigger])


  return selfTest;
};
