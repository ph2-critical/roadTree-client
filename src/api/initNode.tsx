import { supabase } from "@/lib/supabase";

export const getNodeId = async (name: string) => {
  const data = await supabase
    .from('node')
    .select('nid')
    .eq('name', name);
  console.log(data.data![0])
  return data.data![0].nid as string;
};

export const getNodeChildren = async (nid: string) => {
  const data = await supabase
    .from('node')
    .select('nid, name, description, depth')
    .eq('parent_node_nid', nid);

  return data.data!
}