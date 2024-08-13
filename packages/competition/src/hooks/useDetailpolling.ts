import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSubmitStore } from "../stores/useSubmitStore";
import { useDetailStore } from "../stores/useDetailStore";
import { BASE_URL } from "../utils/web/request";

const POLLING_INTERVAL = 1000;

export const useDetailpolling = () => {
    const contestId = localStorage.getItem('contestId');
    const { problemId } = useParams();

    const submitId = useSubmitStore((state) => state.submitId);
    const setDetailState = useDetailStore((state) => state.setDetailState);
    const clearHistory = useDetailStore((state) => state.clearHistory);
    const endSubmit = useSubmitStore((state) => state.endSubmit);
    const token = localStorage.getItem('token');
    const [url, setUrl] = useState<string | undefined>()

    useEffect(() => {
        submitId && setUrl(`${BASE_URL}/user/contests/${contestId}/submissions/${submitId}`);

    }, [contestId, problemId, submitId]);

    useEffect(() => {
        if (url !== undefined) {
            clearHistory()
            const fetchDetails = async () => {
                try {
                    const response = await fetch(url, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setDetailState(data);
                        clearInterval(intervalId);
                        endSubmit();
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
                endSubmit();
            }
        }
    }, [contestId, problemId, submitId, url])
}