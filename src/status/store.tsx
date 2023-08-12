import { create } from "zustand";

interface LoginInterface {
  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
}
interface NicknameInterface {
  nickname: string;
  setNickname: (nickname: string) => void;
}

export const useLoginStore = create<LoginInterface>((set) => ({
  isLogin: false,
  setLogin: () => set(() => ({ isLogin: true })),
  setLogout: () => set(() => ({ isLogin: false })),
}));

export const useNicknameStore = create<NicknameInterface>((set) => ({
  nickname: "",
  setNickname: (str: string) => set(() => ({ nickname: str })),
}));