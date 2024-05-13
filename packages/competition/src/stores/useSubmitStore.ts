import { create } from "zustand";

type SubmitType = "submitting" | "submitted";

interface SubmitStore {
  submitState: SubmitType;
  setSubmitState: (value: SubmitType) => void;
}

export const useSubmitStore = create<SubmitStore>((set) => ({
  submitState: "submitted",
  setSubmitState: (value: SubmitType) => set({ submitState: value }),
}));
