import { create } from 'zustand';
import type { User } from '@supabase/supabase-js';

interface LoginState {
  user: User | null;
}

interface LoginAction {
  setUser: (user: User) => void;
}

export const useLoginStore = create<LoginState & LoginAction>((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
}));
