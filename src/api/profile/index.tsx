import { supabase } from "@/lib/supabase";

export const myPageApi = async (id: string) => {
  const frontData = await supabase
    .from("front_ref")
    .select("ref_id, state,created_at")
    .eq("user_id", id);

  const backData = await supabase
    .from("back_ref")
    .select("ref_id, state,created_at")
    .eq("user_id", id);

  return { frontData, backData };

  // const myData = await supabase
  //   .from("ref_state")
  //   .select("rid, state, created_at")
  //   .eq("user_id", id);

  // return { myData };
};
