"use client";
import { supabase } from "@/lib/supabase";
import SubmissionList from "@/src/components/LearningList/LearningList";
import { Ranking } from "@/src/components/Ranking/ranking";
import { useNicknameStore } from "@/src/state/store";
import { useEffect, useState } from "react";

export default function RankingPage() {
  const { nickname, setNickname } = useNicknameStore();

  const [formData, setFormData] = useState({
    nickname: nickname,
    category: "",
    content: "",
    url: "",
    study: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      setNickname(user.data.user?.user_metadata.full_name);
    };
    getUser().then(() => {
      setFormData((prevData) => ({
        ...prevData,
        nickname: nickname,
      }));
    });
  }, [nickname]);

  return (
    <>
      <br></br>
      <div>
        <Ranking></Ranking>
        <div className="mt-8"></div>
        <SubmissionList nickname={nickname}></SubmissionList>
      </div>
    </>
  );
}
