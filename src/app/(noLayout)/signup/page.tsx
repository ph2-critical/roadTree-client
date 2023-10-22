"use client";
import { useLoginStore } from "@/src/state/store";
import { usePathname } from "next/navigation";

import EditProfile from "@/src/components/Profile";
import { useEffect } from "react";
import { track } from "@amplitude/analytics-browser";

export interface ExtraInfoInterface {
  nickname: string;
  email: string;
  age: number;
  gender: string;
  career: string;
  stack: string;
}

export default function Page() {
  const { userId } = useLoginStore();
  const path = usePathname();
  useEffect(() => {
    track("enter_signup_page");
  }, []);

  return (
    <>
      <EditProfile id={userId} path={path} />
    </>
  );
}
