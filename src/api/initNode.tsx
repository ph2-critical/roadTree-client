import { supabase } from "@/lib/supabase";
import { reference } from "@/roadmap_json/roadmap_data";

export const getNodeId = async (name: string) => {
  const data = await supabase.from("node").select("nid").eq("name", name);
  return data.data![0].nid as string;
};

export const getNodeChildren = async (nid: string) => {
  const data = await supabase
    .from("node")
    .select("nid, name, description, depth")
    .eq("parent_node_nid", nid);
  return data.data!;
};

export const getReferenceUsingNid = async (nid: string) => {
  let refData: reference[] = [];

  const data = await supabase
    .from("node_reference")
    .select("rid")
    .eq("nid", nid);

  const promise = data.data?.map(async (item) => {
    const data2 = await supabase
      .from("reference")
      .select("rid, title, url, grade, category, amount, price")
      .eq("rid", item.rid);
    return data2.data![0];
  });
  const promiseEnd = await Promise.all(promise!);
  refData = promiseEnd as reference[];

  return refData!;
};
