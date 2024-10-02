import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MsgStore {
    title: string | undefined;
    setTitle: (title: string) => void
}

export const useMsg = create<MsgStore>()(
    persist(
        (set) => ({
                title: undefined,
                setTitle: (title: string) => set({ title: title }) 
        }),
        {name:'title'}
    )
)