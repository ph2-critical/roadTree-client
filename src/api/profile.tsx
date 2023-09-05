import { supabase } from "@/lib/supabase";
import { ProfileResponse } from "../components/DragDrop/Wrapper";

interface UpdateProps {
  id: string;
  rid: string;
  state: string;
  state_id: number;
  // created_at: string;
}

export const myPageApi = async (
  id: string,
): Promise<ProfileResponse[] | null> => {
  const { data } = await supabase
    .from("ref_state_test")
    .select("rid, state, state_id, created_at,reference!inner(title)")
    .eq("user_id", id);

  return data;
};

export const myPageUpdateApi = async (props: UpdateProps) => {
  await supabase
    .from("ref_state_test")
    .update({
      state: props.state,
    })
    .eq("user_id", props.id)
    .eq("rid", props.rid);
};
