"use client";

import React, { useEffect } from "react";
import { supabase } from "@/lib/supabase/supabase";

export const WithLogin = (WrapperComponent: React.ComponentProps<any>) => {
  //any type 추후 수정해야함!!!!!!!!!!!!!!!!!!!!!!

  const HOC = (props: any) => {
    useEffect(() => {
      supabase.auth.getUser().then((res) => {
        if (!res.data.user) {
          supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              queryParams: {
                access_type: "offline",
                prompt: "consent",
              },
            },
          });
        }
      });
    }, []);
    return <WrapperComponent {...props} />;
  };
  return HOC;
};
