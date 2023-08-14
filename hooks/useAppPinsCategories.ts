import { create } from "zustand";

type StoreState = {
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
};

export const useAppPinsCategories = create<StoreState>((set, get) => ({
  selectedCategory: 'online-courses',
  setSelectedCategory: (slug: string) => set({ selectedCategory: slug }),
}));
