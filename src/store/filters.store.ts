import create from "zustand";

interface FilterState {
  region: string;
  text: string;
  updateRegion: (region: string) => void;
}

export const useFiltersStore = create<FilterState>((set) => ({
  region: "",
  text: "",
  updateRegion: (region: string) => set((state: any) => ({ region })),
}));
