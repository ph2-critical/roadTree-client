'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

const isAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });

  return isLogin;
};

export const WithLogin = (WrapperComponent: React.ComponentType<any>): any => {
  const HOC = (props: any) => {
    //any type 추후 수정해야함!!!!!!!!!!!!!!!!!!!!!!
    if (isAuth()) {
      return <WrapperComponent {...props} />;
    } else {
      return supabase.auth
        .signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return HOC;
};
