import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SingleCase {
    index: number;
    point: number;
    state: 1 | 0;
    time: string;
    memorry: string;
}

export interface CasesType {
    id: number;
    singleCases: SingleCase[];
}

export interface CasesStore {
    cases: Map<number, CasesType[]>;
    setCases: (problemId: number, value: SingleCase[], id: number) => void;
}


export const useCasesStore = create<CasesStore>()(
    persist(
        (set) => ({
            cases: new Map<number, CasesType[]>(),
            setCases: (problemId: number, value: SingleCase[], id: number) =>
                set((state) => {
                    const updatedCases = new Map(state.cases);
                    if (updatedCases.has(problemId)) {
                        const existedCases = updatedCases.get(problemId);
                        existedCases?.push({ id, singleCases: value });
                    } else {
                        updatedCases.set(problemId, [{ id, singleCases: value }]);
                    }
                    return { cases: updatedCases };
                }),
        }),
        {
            name: "cases-storage",
            partialize: (state) => ({ cases: Array.from(state.cases.entries()) }),//将Map转为数组存进去
            merge: (persistedState: any, currentState: CasesStore) => {
                const mergedCases = new Map(currentState.cases);

                if (persistedState?.cases) {
                    const persistedCases = persistedState.cases as [number, CasesType[]][];
                    persistedCases.forEach(([problemId, casesArray]) => {
                        if (mergedCases.has(problemId)) {
                            const existedCasesArray = mergedCases.get(problemId);
                            if (existedCasesArray) {
                                casesArray.forEach((newCase) => {
                                    const isDuplicate = existedCasesArray.some(
                                        (existedCase) => existedCase.id === newCase.id
                                    );
                                    if (!isDuplicate) {
                                        existedCasesArray.push(newCase);
                                    }
                                })
                            }
                        } else {
                            mergedCases.set(problemId, casesArray);
                        }
                    });
                }

                return { cases: mergedCases, setCases: currentState.setCases, };
            },
        }
    )
)