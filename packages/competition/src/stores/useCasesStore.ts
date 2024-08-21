import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SingleCase {
    index: number;
    point: number;
    state: number;
    time: string;
    memory: string;
}

export interface CasesType {
    id: string;
    singleCases: SingleCase[];
}

export interface CasesStore {
    cases: Map<string, CasesType[]>;
    setCases: (problemId: string, value: SingleCase[], id: string) => void;
}


export const useCasesStore = create<CasesStore>()(
    persist(
        (set) => ({
            cases: new Map<string, CasesType[]>(),
            setCases: (problemId: string, value: SingleCase[], id: string) =>
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
                    const persistedCases = persistedState.cases as [string, CasesType[]][];
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