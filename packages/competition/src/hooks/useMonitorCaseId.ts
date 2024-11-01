import { useEffect, useRef, useState } from "react";
import { useCaseMoreStore } from "../stores/useCaseMoreStore";
import { useParams } from "react-router-dom";

export const useMonitorCaseId = () => {
  const CaseId = useCaseMoreStore((state) => state.CaseId);
  const [currentCaseId, setCurrentCaseId] = useState<string | undefined>(
    CaseId,
  );
  const { problemId } = useParams();
  const previousProblemId = useRef<string | undefined>();

  useEffect(() => {
    if (previousProblemId.current !== problemId) {
      setCurrentCaseId(undefined);
    } else {
      setCurrentCaseId(CaseId);
    }
    previousProblemId.current = problemId;
  }, [CaseId, problemId]);
  return currentCaseId;
};
