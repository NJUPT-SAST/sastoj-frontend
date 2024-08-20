import { create } from "zustand";
import { PersistStorage, persist, StorageValue } from "zustand/middleware";
import superjson from "superjson";

export interface SelfStatus {
    status: "finished" | "unfinished";
    code: string;
    language: string;
}

export interface SelfsStatusState {
    SelfsStatus: Map<string, SelfStatus>;
    initSelf: (key: string) => void;
    finishSelf: (key: string) => void;
    changeContent: (key: string, newContent: string, language: string) => void;
}

// 这个storage是为persist map对象创建的一个存储local storage的一个中间件
const Selfstorage: PersistStorage<SelfsStatusState> = {
    getItem: (name: string) => {
        const str = localStorage.getItem(name);
        if (!str) return null;
        return superjson.parse<StorageValue<SelfsStatusState>>(str);
    },
    setItem: (name, value) => {
        localStorage.setItem(name, superjson.stringify(value));
    },
    removeItem: (name) => localStorage.removeItem(name),
};

export const useSelfTestStatusStore = create<SelfsStatusState>()(
    persist(
        (set) => ({
            SelfsStatus: new Map(),
            initSelf: (key: string) =>
                set((state) => ({
                    SelfsStatus: state.SelfsStatus.set(key, {
                        status: "unfinished",
                        code: "",
                        language: "",
                    }),
                })),

            finishSelf: (key: string) =>
                set((state) => {
                    const SelfStatus = state.SelfsStatus.get(key);
                    if (SelfStatus) {
                        SelfStatus.status = "finished";
                        state.SelfsStatus.set(key, SelfStatus);
                    }
                    return { ...state };
                }),

            changeContent: (key: string, newContent: string, language: string) =>
                set((state) => {
                    const SelfStatus = state.SelfsStatus.get(key);

                    if (SelfStatus) {
                        SelfStatus.code = newContent;
                        SelfStatus.language = language;
                        state.SelfsStatus.set(key, SelfStatus);
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