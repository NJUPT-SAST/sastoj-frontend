import { create } from "zustand";

interface MsgStore {
    title: string | undefined;
    setTitle: (title: string) => void
}

export const useMsg = create<MsgStore>((set) => ({
    title: undefined,
    setTitle: (title: string) => set({ title: title })
}))