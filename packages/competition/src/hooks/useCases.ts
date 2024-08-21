import { useEffect, useRef } from "react"
import { useSubmitStore } from "../stores/useSubmitStore";
import { useParams } from "react-router-dom";

export const useCases = () => {
    const { submitState } = useSubmitStore((state) => (
        {
            submitId: state.submitId,
            submitState: state.submitState
        }));
    const contestId = localStorage.getItem("contestId")
    const { problemId } = useParams();
    const prevSubmitState = useRef(submitState);
    // const { data: swrData, mutate } = useSwrHistorySubmits(contestId!, problemId as unknown as string)

    useEffect(() => {
        //submitState的值由Submitting转为UnSubmitted时,发起请求
        if (
            prevSubmitState.current === "Submitting" &&
            submitState === "UnSubmitted"
            && contestId && problemId
        ) {
            console.log('发起了一下请求哦');
            console.log(prevSubmitState.current);
            console.log(submitState);

        }
        prevSubmitState.current = submitState;
    }, [submitState])

}