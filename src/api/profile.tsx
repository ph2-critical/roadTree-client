import { supabase } from "@/lib/supabase";
import { ProfileResponse, WrapperType } from "../components/DragDrop/Wrapper";

// interface UpdateProps {
//   id: string;
//   rid: string;
//   state: string;
//   state_id: number;
//   // created_at: string;
// }

interface UpdateProps extends WrapperType {
  user_id: string;
}

interface upsertProps {
  state: string;
  state_id: number;
  rid: string;
}

export const myPageApi = async (
  id: string,
): Promise<ProfileResponse[] | null> => {
  const { data } = await supabase
    .from("ref_state_test")
    .select(
      "rid, state,state_id, created_at, reference!inner(rid, title, grade, category, amount, price, url, created_at)",
    )
    .eq("user_id", id);

  return data;
};

export const myPageUpdateApi = async (props: UpdateProps) => {
  const { todo, doing, done, user_id } = props;
  const upSert = async (props: upsertProps) => {
    await supabase
      .from("ref_state_test")
      .update({
        state: props.state,
        state_id: props.state_id,
      })
      .eq("user_id", user_id)
      .eq("rid", props.rid);
  };

  todo.map(async (t) => {
    await upSert({
      state: "학습예정",
      state_id: t.index,
      rid: t.cardId,
    });
  });
  doing.map(async (t) => {
    await upSert({
      state: "학습중",
      state_id: t.index,
      rid: t.cardId,
    });
  });
  done.map(async (t) => {
    await upSert({
      state: "학습완료",
      state_id: t.index,
      rid: t.cardId,
    });
  });
};

export const getNodeNameFromRid = async (rid: string) => {
  const data = await supabase
    .from("node_reference")
    .select("node!inner(name, type)")
    .eq("rid", rid);

  return data.data![0].node;
};

export const getParentNodeNameFromNid = async (nid: string) => {
  const data = await supabase
    .from("node")
    .select("parent_node_nid")
    .eq("nid", nid);

  return data.data![0].parent_node_nid;
};
