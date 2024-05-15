import { create } from "zustand";

type SubmitType = "Submitting" | "UnSubmitted";

interface SubmitStore {
  submitId: string | undefined;
  submitState: SubmitType;
  setSubmitState: (state: SubmitType, Id: string) => void;
  endSubmit: () => void;
}

export const useSubmitStore = create<SubmitStore>((set) => ({
  submitId: undefined,
  submitState: "UnSubmitted",
  setSubmitState: (state: SubmitType, Id: string) =>
    set({ submitState: state, submitId: Id }),
  endSubmit: () => set({ submitState: "UnSubmitted" }),
}));
