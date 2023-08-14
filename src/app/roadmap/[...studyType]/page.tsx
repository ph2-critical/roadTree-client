"use client";

import { supabase } from "@/lib/supabase/supabase";
import { WithLogin } from "@/src/components/HOC/withLogin";
import RoadTreeLayout, {
  useRoadTreeStore,
} from "@/src/components/RoadmapPage/RoadTreeLayout";
import SideBar from "@/src/components/RoadmapPage/SideBar";
import { useNicknameStore } from "@/src/state/store";
import { track } from "@amplitude/analytics-browser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface roadmapParams {
  studyType: number;
}

function page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  const { setNickname } = useNicknameStore();
  const whatStudy: number = studyType;
  const whatStudyTable = ["frontend", "backend", "ai"];
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [isShowRef, setIsShowRef] = useState<boolean>(false);
  const { select } = useRoadTreeStore();

  useEffect(() => {
    if (whatStudy == 2) {
      alert("AI 과정은 준비중입니다.");
      router.push("/");
    } else {
      const getUser = async () => {
        const user = await supabase.auth.getUser();
        setNickname(user.data.user?.user_metadata.full_name);
        // console.log(nickname);
        const userId: string | undefined = user.data.user?.id;
        userId && setId(userId);
      };
      getUser();

      track(`enter_${whatStudyTable[whatStudy]}_roadmap_page`);
    }
  }, []);

  return (
    id !== "" && (
      <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
        <main
          className={
            "mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10 z-[0]"
          }
        >
          <RoadTreeLayout
            key={whatStudy}
            whatStudy={whatStudy}
            userId={id}
            setIsShowRef={setIsShowRef}
          />
        </main>

        <SideBar
          key={select?.nid}
          whatStudy={whatStudy}
          userId={id}
          showRef={{ isShowRef, setIsShowRef }}
          select={select}
        />
      </div>
    )
  );
}

const RoadMapWithLogin = WithLogin(page);

export default RoadMapWithLogin;
