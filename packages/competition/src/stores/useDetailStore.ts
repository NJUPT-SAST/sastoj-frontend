import { create } from "zustand";

export interface Detail {
  code: string;
  createdAt: string;
  id: number;
  language: string;
  maxMemory: number;
  point: number;
  status: number;
  totalTime: number;
  updatedAt: string;
}

interface DetailStore {
  detail: Detail[];
  setDetailState: (value: Detail) => void;
  clearHistory: () => void;
}

export const useDetailStore = create<DetailStore>((set) => ({
  detail: [],
  setDetailState: (value: Detail) =>
    set((state) => ({ detail: state.detail.concat(value) })),
  clearHistory: () => set({ detail: [] }),
}));
