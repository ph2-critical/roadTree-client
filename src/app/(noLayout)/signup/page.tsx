"use client";
import { useLoginStore } from "@/src/state/store";
import { usePathname } from "next/navigation";

import EditProfile from "@/src/components/Profile";

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

  return (
    <>
      <EditProfile id={userId} path={path} />
    </>
  );
}
