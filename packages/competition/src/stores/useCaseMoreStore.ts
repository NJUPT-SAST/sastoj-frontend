import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface ToCaseMoreStore {
    CaseId: undefined | string;
    setCaseId: (value: string) => void;
    clearCaseId: () => void;
}

export const useCaseMoreStore = create<ToCaseMoreStore>((set) => (
    {
        CaseId: undefined,
        setCaseId: (value: string) => set({ CaseId: value }),
        clearCaseId: () => set({ CaseId: undefined })
    }
)
)

// export const useCaseMoreStore = create<ToCaseMoreStore>()(
//     persist(
//         (set) => (
//             {
//                 CaseId: undefined,
//                 setCaseId: (value: string) => set({ CaseId: value }),
//                 clearCaseId: () => set({ CaseId: undefined })
//             }
//         ),
//         { name: 'CaseID' }
//     )
// )