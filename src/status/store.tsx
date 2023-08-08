import { create } from "zustand";

interface LoginInterface {
  isLogin: boolean;
  userId: string;
  setLogin: (id: string) => void;
  setLogout: () => void;
}

export const useLoginStore = create<LoginInterface>((set) => ({
  isLogin: false,
  userId: "",
  setLogin: (id: string) => set(() => ({ isLogin: true, userId: id })),
  setLogout: () => set(() => ({ isLogin: false, userId: "" })),
}));
