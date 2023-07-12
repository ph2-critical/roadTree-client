'use client';

import React, { useEffect, useState } from 'react';
import { supabase, midbase } from '@/lib/supabase';

// interface WrapProps {
//   WrapperComponent: React.ComponentProps<any> | React.ComponentType<any>;
// }

export const WithLogin = (WrapperComponent: React.ComponentProps<any>): any => {
  //any type 추후 수정해야함!!!!!!!!!!!!!!!!!!!!!!
  const HOC = async (props: any) => {
    const {
      data: { user },
    } = await midbase.auth.getUser();
    if (user) {
      return <WrapperComponent {...props} />;
    } else {
      midbase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      // console.log('hi');
    }
  };

  return HOC;
};
