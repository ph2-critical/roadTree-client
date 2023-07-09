'use client';

import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';

const Login = () => {
  const LoginTest = () => {
    supabase.auth
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
  };

  useEffect(() => {
    LoginTest();
  }, []);
  return <div></div>;
};

export default Login;
