'use client';

import { supabase } from '@/lib/supabase';

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
  return (
    <button
      onClick={() => {
        LoginTest();
      }}
    >
      test
    </button>
  );
};

export default Login;
