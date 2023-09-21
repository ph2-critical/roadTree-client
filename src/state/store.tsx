import { create } from "zustand";

interface LoginInterface {
  isLogin: boolean;
  userId: string;
  setLogin: (id: string) => void;
  setLogout: () => void;
}
interface NicknameInterface {
  nickname: string;
  setNickname: (nickname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  userPicture: string;
  setUserPicture: (userPicture: string) => void;
}

export const useLoginStore = create<LoginInterface>((set) => ({
  isLogin: false,
  userId: "",
  setLogin: (id: string) => set(() => ({ isLogin: true, userId: id })),
  setLogout: () => set(() => ({ isLogin: false, userId: "" })),
}));

export const useNicknameStore = create<NicknameInterface>((set) => ({
  nickname: "",
  setNickname: (str: string) => set(() => ({ nickname: str })),
  email: "",
  setEmail: (str: string) => set(() => ({ email: str })),
  userPicture: "",
  setUserPicture: (str: string) => set(() => ({ userPicture: str })),
}));
