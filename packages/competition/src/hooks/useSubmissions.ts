import { useEffect, useState } from "react"
import { useSubmitStore } from "../stores/useSubmitStore";
import { useParams } from "react-router-dom";
import { useSwrHistorySubmits } from "../swrHooks/problem";
import { GetHistoryProps } from "../apis/user";

export const useSubmissons = () => {
    const [data, setData] = useState<{ submissions: GetHistoryProps[] } | null>();
    const submitState = useSubmitStore((state) => state.submitState);
    const contestId = localStorage.getItem("contestId");
    const { problemId } = useParams();
    const { data: swrData } = useSwrHistorySubmits(contestId as unknown as string, problemId as unknown as string)
    useEffect(() => {
        if (submitState === "UnSubmitted" && contestId && problemId) {
            // 当 submitState 为 "UnSubmitted" 时，设置数据
            console.log('<<<<<<<<<<<<<<<<<<<<<<<');
            console.log('重新请求了数据');
            setData(swrData);
        } else {
            // 如果不满足请求条件，则清除数据
            setData(null);
        }
    }, [submitState])
    return data
}