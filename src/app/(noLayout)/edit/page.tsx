"use client";
import { getUserInfo } from "@/src/api/signup";
import EditProfile, { UserInfo } from "@/src/components/Profile";
import { useLoginStore } from "@/src/state/store";
import { track } from "@amplitude/analytics-browser";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { userId } = useLoginStore();
  const [data, setData] = useState<UserInfo>();
  const path = usePathname();
  useEffect(() => {
    getUserInfo(userId).then((res) => {
      if (res !== null) {
        setData(res && res[0]);
      }
      track("enter_edit_profile_page");
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
