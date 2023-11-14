import { supabase } from "@/lib/supabase";

export const getUserInfo = async (id: string) => {
  const { data } = await supabase.from("user").select("*").eq("id", id);
  return data;
};

export const getUserNickname = async (id: string) => {
  const { data } = await supabase
    .from("user")
    .select("nickname")
    .eq("id", id)
    .single();
  return data;
};
