"use client";
import { getUserInfo } from "@/src/api/signup";
import EditProfile, { ProfileProps } from "@/src/components/Profile";
import { useLoginStore } from "@/src/state/store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface EditInterface extends ProfileProps {
  profile_image: string;
}

export default function Page() {
  const { userId } = useLoginStore();
  const [data, setData] = useState<EditInterface>();
  const path = usePathname();
  useEffect(() => {
    getUserInfo(userId).then((res) => {
      if (res !== null) {
        setData(res && res[0]);
      }
    });
  }, []);

  return (
    <>
      <EditProfile
        id={userId}
        email={data?.email}
        path={path}
        nickname={data?.nickname}
        gender={data?.gender}
        age={data?.age}
        career={data?.career}
        stack={data?.stack}
      />
    </>
  );
}
