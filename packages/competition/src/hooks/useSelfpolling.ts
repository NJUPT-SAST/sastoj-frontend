import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useSubmitStore } from "../stores/useSubmitStore";
import { useSelfStore } from "../stores/useSelfSotre";
import { BASE_URL } from "../utils/web/request";
import { useSelfDetail } from "../stores/useSelfDetail";

const POLLING_INTERVAL = 1000;

export const useSelefpolling = () => {
    const [url, setUrl] = useState<string | undefined>()
    const contestId = localStorage.getItem('contestId');
    const token = localStorage.getItem('token');
    const { problemId } = useParams();

    const endSelf = useSelfStore((state) => state.endSelf);
    const selfId = useSelfStore((state) => state.selfId);
    const setSelfDetail = useSelfDetail((state) => state.setSelfDetail)


    useEffect(() => {
        selfId && setUrl(`${BASE_URL}/user/contests/${contestId}/self-tests/${selfId}`);

    }, [contestId, problemId, selfId]);

    useEffect(() => {
        if (url !== undefined) {
            // clearHistory()
            const fetchDetails = async () => {
                try {
                    const response = await fetch(url, {
                        //@ts-ignore
                        headers: {
                            Token: token
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        // setDetailState(data);
                        setSelfDetail(data)
                        endSelf();
                        clearInterval(intervalId);
                    } else {
                        console.error("请求失败", response);
                    }
                } catch (err) {
                    console.error("请求出错", err);
                }
            }
            const intervalId = setInterval(fetchDetails, POLLING_INTERVAL);
            return () => {
                clearInterval(intervalId)
                endSelf();
            }
        }
    }, [contestId, problemId, selfId, url])
}