import { supabase } from "@/lib/supabase";
import { ProfileResponse } from "../components/DragDrop/Wrapper";

export const myPageApi = async (
  id: string,
): Promise<ProfileResponse[] | null> => {
  const { data } = await supabase
    .from("ref_state")
    .select("rid, state, created_at, reference!inner(title)")
    .eq("user_id", id);

  return data;
};
