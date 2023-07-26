import { create } from "zustand";

interface LoginInterface {
  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

export const useLoginStore = create<LoginInterface>((set) => ({
  isLogin: false,
  setLogin: () => set(() => ({ isLogin: true })),
  setLogout: () => set(() => ({ isLogin: false })),
}));
