import create from "zustand";

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  data: [],
  setData: (newData) => set(() => ({ data: newData })),
}));
