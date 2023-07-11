import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { supabase } from '@/lib/supabase';

export const config = {
  matcher: '/roadmap/:path*',
};

export async function middleware(req: NextRequest) {
  const data = await supabase.auth.getSession();
  console.log(data);
}
