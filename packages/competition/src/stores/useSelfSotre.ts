import { create } from "zustand";

type SelfType = "Selfing" | "UnSelfed";

interface SelfStore {
    selfId: string | undefined;
    selfState: SelfType;
    setSelfState: (state: SelfType, Id: string) => void;
    endSelf: () => void;
    startSelf: () => void
}

export const useSelfStore = create<SelfStore>((set) => ({
    selfId: undefined,
    selfState: "UnSelfed",
    setSelfState: (state: SelfType, Id: string) =>
        set({ selfState: state, selfId: Id }),
    startSelf: () => set({ selfState: 'Selfing' }),
    endSelf: () => set({ selfState: "UnSelfed" }),
}));