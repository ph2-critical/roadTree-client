'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

// interface WrapProps {
//   WrapperComponent: React.ComponentProps<any> | React.ComponentType<any>;
// }

const isAuth = async () => {
  await supabase.auth.getUser().then((res) => {
    if (res.data.user === null) {
      return false;
    }
  });
  return true;
};

export const WithLogin = (WrapperComponent: React.ComponentProps<any>): any => {
  //any type 추후 수정해야함!!!!!!!!!!!!!!!!!!!!!!
  const HOC = async () => {
    if (await isAuth()) {
      return <WrapperComponent />;
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

      return <></>;
    }
  };

  return HOC;
};
