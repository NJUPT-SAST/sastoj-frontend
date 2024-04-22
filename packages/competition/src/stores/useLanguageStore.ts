import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LanguageType } from "../types/language";

export interface languageState {
  language: LanguageType;
  setLanguage: (value: LanguageType) => void;
}

export const useLanguageStore = create<languageState>()(
  persist(
    (set) => ({
      language: "javascript",
      setLanguage: (value: LanguageType) => set(() => ({ language: value })),
    }),
    { name: "language" }
  )
);
