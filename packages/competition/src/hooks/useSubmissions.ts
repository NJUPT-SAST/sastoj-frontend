import { useEffect} from "react"
import { useSubmitStore } from "../stores/useSubmitStore";
import { useParams } from "react-router-dom";
import { useSwrHistorySubmits } from "../swrHooks/problem";

export const useSubmissons = () => {
    const submitState = useSubmitStore((state) => state.submitState);
    const contestId = localStorage.getItem("contestId");
    const { problemId } = useParams();
    const { data: swrData, mutate } = useSwrHistorySubmits(contestId as string, problemId as unknown as string)
    useEffect(() => {
        if (submitState && contestId && problemId) {
            mutate();
        }
    }, [submitState])
    return swrData
}