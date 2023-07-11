import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { supabase } from '@/lib/supabase';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const config = {
  matcher: '/roadmap/:path*',
};

export async function middleware(req: NextRequest) {
  // const user = await supabase.auth.getSession();
  // const reqHeader = req.headers;
  // const cookie = req.cookies.get('sb');
  // const isLogin = (await supabase.auth.getSession()).data.session;
  // console.log(isLogin);

  const res = NextResponse.next();
  const sb = createMiddlewareClient({ req, res }, { supabaseUrl, supabaseKey });

  const user = (await sb.auth.getUser()).data.user;
  // return res;
  if (!user) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
}
