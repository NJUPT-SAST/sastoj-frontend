import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { showToast } from "@ui-aurora/react";
import { useSelfTestStatusStore } from "../stores/useSelfTestStore";

export const useSelfEditor = () => {
    const { problemId } = useParams();


    const [SelfsStatus, initSelf, changeContent] = useSelfTestStatusStore(
        (state) => [state.SelfsStatus, state.initSelf, state.changeContent],
    );

    const handleCodeEditor = (value: string, language: string) => {
        if (problemId) {
            if (!SelfsStatus.get(problemId)) {
                initSelf?.(problemId);
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
        if (problemId && SelfsStatus.get(problemId)) {
            return SelfsStatus.get(problemId)?.code;
        } else return `Problem: ${problemId} \n 'write tests here'`;
    }, [problemId, SelfsStatus]);

    return { handleCodeEditor, defaultValue };
};
