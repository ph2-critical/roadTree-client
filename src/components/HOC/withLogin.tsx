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
