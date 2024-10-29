import { useEffect } from "react"
import { useGetCases } from "../swrHooks/problem";
import { useParams } from "react-router-dom";
import { useCasesStore } from "../stores/useCasesStore";
import { useCaseMoreStore } from "../stores/useCaseMoreStore";

export const useCases = (CaseId: string) => {
    const contestId = localStorage.getItem("contestId")
    const setCaseId = useCaseMoreStore(state => state.setCaseId)
    const { cases, setCases } = useCasesStore(state => ({ cases: state.cases, setCases: state.setCases }))
    const { problemId } = useParams();
    
    const fetchdata = async () => {
        const casesValue = cases.get(problemId!)
        const casesBoolean = casesValue?.some(item => item.id == CaseId)
        if (cases.has(problemId!) && casesBoolean) {
            return
        } else {
            const {data} = useGetCases(contestId!, CaseId)
            if (data?.cases && problemId) {
                setCases(problemId, data?.cases, CaseId)
            }
        }
    }

    useEffect(() => {
        if (CaseId && contestId && problemId) {
            fetchdata()
            setCaseId(CaseId)
        }
    }, [CaseId])

}