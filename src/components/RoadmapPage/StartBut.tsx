"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoginModal, { useModalStore } from "./LoginModal";
import { auth } from "./Fbase";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

export default function StartBut(props: {cid: number}) {
  const { setModalTrue, lastModalonId, setLastModalonId } = useModalStore();
  const router = useRouter();
  const cid = props.cid;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("startbut user" + lastModalonId);
      if (lastModalonId === 1) {
        setLastModalonId(0);
        router.push("/roadmap?front");
      } else if (lastModalonId === 2) {
        setLastModalonId(0);
        router.push("/roadmap?back");
      }
    }
  });

  useEffect(() => {
    console.log(lastModalonId);
  }, [lastModalonId]);

  const checkUserAndLogin = () => {
    setLastModalonId(cid);
    if (auth.currentUser === null) {
      setModalTrue();
    } else {
      if (cid === 1) {
        setLastModalonId(0);
        router.push("/roadmap?front");
      } else if (cid === 2) {
        setLastModalonId(0);
        router.push("/roadmap?back");
      }
    }
  };

  return (
    <button
      className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={checkUserAndLogin}
    >
      Get started
    </button>
  );
}
