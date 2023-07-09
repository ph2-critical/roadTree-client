'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

// interface WrapProps {
//   WrapperComponent: React.ComponentProps<any> | React.ComponentType<any>;
// }

export const WithLogin = (WrapperComponent: React.ComponentProps<any>): any => {
  //any type 추후 수정해야함!!!!!!!!!!!!!!!!!!!!!!
  const HOC = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      return <WrapperComponent />;
    } else {
      supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
    }
  };

  return HOC;
};
