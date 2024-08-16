// TODO: 将类型申明抽离
import { create } from "zustand";
import { PersistStorage, persist, StorageValue } from "zustand/middleware";
import superjson from "superjson";

export interface ProblemStatus {
    status: "finished" | "unfinished";
    code: string;
    language: string;
}

export interface ProblemsStatusState {
    problemsStatus: Map<string, ProblemStatus>;
    initProblem: (key: string) => void;
    finishProblem: (key: string) => void;
    changeContent: (key: string, newContent: string, language: string) => void;
}

// 这个storage是为persist map对象创建的一个存储local storage的一个中间件
const Selfstorage: PersistStorage<ProblemsStatusState> = {
    getItem: (name: string) => {
        const str = localStorage.getItem(name);
        if (!str) return null;
        return superjson.parse<StorageValue<ProblemsStatusState>>(str);
    },
    setItem: (name, value) => {
        localStorage.setItem(name, superjson.stringify(value));
    },
    removeItem: (name) => localStorage.removeItem(name),
};

export const useSelfTestStatusStore = create<ProblemsStatusState>()(
    persist(
        (set) => ({
            problemsStatus: new Map(),
            initProblem: (key: string) =>
                set((state) => ({
                    problemsStatus: state.problemsStatus.set(key, {
                        status: "unfinished",
                        code: "",
                        language: "",
                    }),
                })),

            finishProblem: (key: string) =>
                set((state) => {
                    const problemStatus = state.problemsStatus.get(key);
                    if (problemStatus) {
                        problemStatus.status = "finished";
                        state.problemsStatus.set(key, problemStatus);
                    }
                    return { ...state };
                }),

            changeContent: (key: string, newContent: string, language: string) =>
                set((state) => {
                    const problemStatus = state.problemsStatus.get(key);

                    if (problemStatus) {
                        problemStatus.code = newContent;
                        problemStatus.language = language;
                        state.problemsStatus.set(key, problemStatus);
                    }
                    return { ...state };
                }),
        }),
        {
            name: "SelfTest",
            storage: Selfstorage,
        },
    ),
);