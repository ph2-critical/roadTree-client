import { supabase } from "@/lib/supabase";
import { ProfileResponse } from "../components/DragDrop/Wrapper";

interface UpdateProps {
  id: string;
  rid: string;
  state: string;
  created_at: string;
}

export const myPageApi = async (
  id: string,
): Promise<ProfileResponse[] | null> => {
  const { data } = await supabase
    .from("ref_state")
    .select("rid, state, created_at, reference!inner(rid, title, grade, category, amount, price, url)")
    .eq("user_id", id)
    .order("created_at", { ascending: false });

  return data;
};

export const myPageUpdateApi = async (props: UpdateProps) => {
  await supabase
    .from("ref_state")
    .update({
      state: props.state,
      created_at: props.created_at,
    })
    .eq("user_id", props.id)
    .eq("rid", props.rid);
};

export const getNodeNameFromRid = async (rid: string) => {
  const data = await supabase
    .from("node_reference")
    .select("node!inner(name, type)")
    .eq("rid", rid);
  console.log(data)

  return data.data![0].node;
}