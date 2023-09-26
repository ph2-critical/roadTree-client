"use client";

import { supabase } from "@/lib/supabase/supabase";
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

function Page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  const { setNickname } = useNicknameStore();
  const whatStudy: number = studyType;
  const whatStudyTable = ["frontend", "backend", "ai"];
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [isShowRef, setIsShowRef] = useState<boolean>(false);
  const { select } = useRoadTreeStore();
  const { userId } = useNicknameStore();

  useEffect(() => {
    if (whatStudy == 2) {
      alert("AI 과정은 준비중입니다.");
      router.push("/roadmap");
    } else {
      track(`enter_${whatStudyTable[whatStudy]}_roadmap_page`);
    }
  }, []);

  return (
    <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
      <main
        className={
          "mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10 z-[0]"
        }
      >
        <RoadTreeLayout
          key={whatStudy}
          whatStudy={whatStudy}
          userId={userId}
          setIsShowRef={setIsShowRef}
        />
      </main>

      <SideBar
        key={select?.nid}
        whatStudy={whatStudy}
        userId={userId}
        showRef={{ isShowRef, setIsShowRef }}
        select={select}
      />
    </div>
  );
}

export default Page;
