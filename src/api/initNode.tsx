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
      .select("rid, title, url, grade, category, amount, price, created_at")
      .eq("rid", item.rid);

    const refData: reference = {
      rid: data2.data![0].rid,
      title: data2.data![0].title,
      url: data2.data![0].url,
      grade: data2.data![0].grade ?? 0,
      category: data2.data![0].category,
      amount: data2.data![0].amount,
      price: data2.data![0].price,
      created_at: data2.data![0].created_at,
    };

    return refData;
  });

  const promiseEnd = await Promise.all(promise!);
  refData = promiseEnd as reference[];

  refData.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return refData!;
};
