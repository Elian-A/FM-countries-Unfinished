import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface FilterState {
  region: string;
  text: string;
  updateRegion: (region: string) => void;
  updateText: (region: string) => void;
}

export const useFiltersStore = create<FilterState>((set) => ({
  region: "",
  text: "",
  updateRegion: (region: string) => set(() => ({ region })),
  updateText: (text: string) => set(() => ({ text })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useFiltersStore);
}
