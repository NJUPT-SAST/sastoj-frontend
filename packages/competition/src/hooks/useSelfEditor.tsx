import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { showToast } from "@ui-aurora/react";
import { useSelfTestStatusStore } from "../stores/useSelfTestStore";

export const useSelfEditor = () => {
    const { problemId } = useParams();



    const [problemsStatus, initProblem, changeContent] = useSelfTestStatusStore(
        (state) => [state.problemsStatus, state.initProblem, state.changeContent],
    );

    const handleCodeEditor = (value: string, language: string) => {
        if (problemId) {
            if (!problemsStatus.get(problemId)) {
                initProblem?.(problemId);
            }
            changeContent?.(problemId, value, language);
        } else {
            showToast({
                type: "error",
                content: <>题目ID不存在</>,
            });
            throw new Error("题目ID不存在");
        }
    };

    const defaultValue: string | undefined = useMemo(() => {
        if (problemId && problemsStatus.get(problemId)) {
            return problemsStatus.get(problemId)?.code;
        } else return `Problem: ${problemId} \n 'Write some tests here !!!'`;
    }, [problemId, problemsStatus]);

    return { handleCodeEditor, defaultValue };
};
