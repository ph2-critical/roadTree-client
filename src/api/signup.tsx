import { ExtraInfoInterface } from "@/src/app/(noLayout)/signup/page";
import { supabase } from "@/lib/supabase";

interface PostUserProps extends ExtraInfoInterface {
  id: string;
}

export const postUserInfo = async (props: PostUserProps) => {
  const { id, email, nickname, gender, age, career, stack } = props;
  await supabase.from("user").upsert({
    id: id,
    email: email,
    nickname: nickname,
    gender: gender,
    age: age,
    career: career,
    stack: stack,
  });
};

// get 해와서 없으면 이 창으로 넘어가게?
export const getUserInfo = async (id: string) => {
  const { data } = await supabase.from("user").select("*").eq("id", id);
  return data;
};
