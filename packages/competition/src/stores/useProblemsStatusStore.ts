 
 
 
// TODO: 在使用superjson的时候出现一系列 eslint any 报错
import { create } from "zustand";
import { PersistStorage, persist, StorageValue } from "zustand/middleware";
import superjson from "superjson";

export interface ProblemStatus {
  status: "finished" | "unfinished";
  content: string;
}

export interface ProblemsStatusState {
  problemsStatus: Map<string, ProblemStatus>;
  initProblem: (key: string) => void;
  finishProblem: (key: string) => void;
  changeContent: (key: string, newContent: string) => void;
}

// 这个storage是为persist map对象创建的一个存储local storage的一个中间件
const storage: PersistStorage<ProblemsStatusState> = {
  getItem: (name: string) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    return superjson.parse<StorageValue<ProblemsStatusState>>(
      str
    );
  },
  setItem: (name, value) => {
    localStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useProblemsStatusStore = create<ProblemsStatusState>()(
  persist(
    (set) => ({
      problemsStatus: new Map(),
      initProblem: (key: string) =>
        set((state) => ({
          problemsStatus: state.problemsStatus.set(key, {
            status: "unfinished",
            content: "",
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

      changeContent: (key: string, newContent: string) =>
        set((state) => {
          const problemStatus = state.problemsStatus.get(key);

          if (problemStatus) {
            problemStatus.content = newContent;
            state.problemsStatus.set(key, problemStatus);
          }
          return { ...state };
        }),
    }),
    {
      name: "problemsStatusStore",
      storage,
    }
  )
);
