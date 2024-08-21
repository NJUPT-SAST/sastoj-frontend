import { useEffect, useState } from "react";
import { useCaseMoreStore } from "../stores/useCaseMoreStore";

export const useMonitorCaseId = () => {
    const CaseId = useCaseMoreStore(state => state.CaseId);
    const [currentCaseId, setCurrentCaseId] = useState(CaseId);

    useEffect(() => {
        setCurrentCaseId(CaseId)
    }, [CaseId])
    return currentCaseId
};  