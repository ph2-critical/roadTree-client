"use client";

import { supabase } from "@/lib/supabase/supabase";
import { WithLogin } from "@/src/components/HOC/withLogin";
import RoadTreeLayout from "@/src/components/RoadmapPage/RoadTreeLayout";
import SideBar from "@/src/components/RoadmapPage/SideBar";
import { track } from "@amplitude/analytics-browser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface roadmapParams {
  studyType: number;
}

function page({ params }: { params: roadmapParams }) {
  const { studyType } = params;
  const whatStudy: number = studyType;
  const whatStudyTable = ["frontend", "backend", "ai"];
  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [isShowRef, setIsShowRef] = useState<boolean>(false);

  useEffect(() => {
    if (whatStudy == 2) {
      alert("AI 과정은 준비중입니다.");
      router.push("/");
    }
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      const userId: string | undefined = user.data.user?.id;
      userId && setId(userId);
    };
    getUser();

    track(`enter_${whatStudyTable[whatStudy]}_roadmap_page`);
  }, []);

  return (
    <div className="flex flex-grow h-screenWithoutHeader mt-[73px]">
      <main
        className={
          "mx-auto max-w-screen-xl flex flex-1 align-middle justify-centent flex-col grow transition-transform w-10"
        }
      >
        <RoadTreeLayout
          whatStudy={whatStudy}
          userId={id}
          setIsShowRef={setIsShowRef}
        />
      </main>

      <SideBar
        whatStudy={whatStudy}
        userId={id}
        showRef={{ isShowRef, setIsShowRef }}
      />
    </div>
  );
}

const RoadMapWithLogin = WithLogin(page);

export default RoadMapWithLogin;
