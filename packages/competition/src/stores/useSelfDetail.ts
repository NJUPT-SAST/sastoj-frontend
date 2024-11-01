import { create } from "zustand";

export interface SelfDetail {
  isCompiled: boolean;
  complieMsg?: string;
  stdout?: string;
  stderr?: string;
  time?: number;
  memory?: number;
}

interface SelfDetailStore {
  SelfDetail: {} | SelfDetail;
  setSelfDetail: (value: SelfDetail) => void;
  clearSelfDetail: () => void;
}

export const useSelfDetail = create<SelfDetailStore>((set) => ({
  SelfDetail: {},
  setSelfDetail: (value: SelfDetail) => set({ SelfDetail: value }),
  clearSelfDetail: () => set({ SelfDetail: {} }),
}));
