import { supabase } from "@/lib/supabase";

export interface getRefStateProps {
  user_id: string;
  ref_id: string;
}

export interface postRefStateProps {
  roadmap_type: string; // front, back, ai
  user_id: string;
  rid: string;
  state: string;
}

export const getRefState = async (props: getRefStateProps) => {
  const data = await supabase
    .from("ref_state")
    .select("state")
    .eq("user_id", props.user_id)
    .eq("rid", props.ref_id);

  return data;
};

export const postRefState = async (props: postRefStateProps) => {
  const a = await supabase
    .from("ref_state")
    .upsert([
      {
        user_id: props.user_id,
        rid: props.rid,
        state: props.state,
      },
    ])
    .eq("user_id", props.user_id)
    .eq("rid", props.rid);
  console.log(a);
};

export interface getNodeStateProps {
  roadmap_type: string; // front, back, ai
  depth: number;
  user_id: string;
}

export interface postNodeStateProps {
  state: string;
  node_id: string;
  user_id: string;
}

export const getNodeState = async (props: getNodeStateProps) => {
  const data = await supabase
    .from("node_state")
    .select("nid, state, node!inner(depth, type)")
    .eq("node.depth", props.depth)
    .eq("user_id", props.user_id);

  // .eq('node(depth)', props.depth);
  // .eq('roadmap_type', props.roadmap_type)
  // .eq('depth', props.depth);
  return data;
};

export const upsertNodeState = async (props: postNodeStateProps) => {
  const { data } = await supabase
    .from("node_state")
    .upsert([
      {
        user_id: props.user_id,
        state: props.state,
        nid: props.node_id,
      },
    ])
    .eq("user_id", props.user_id)
    .eq("nid", props.node_id);

  return data;
};
