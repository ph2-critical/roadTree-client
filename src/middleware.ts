import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { supabaseUrl, supabaseKey } from '@/lib/supabase';

export const config = {
  matcher: '/roadmap/:path*',
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const sb = createMiddlewareClient({ req, res }, { supabaseUrl, supabaseKey });

  const user = (await sb.auth.getUser()).data.user;
  // return res;
  if (!user) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
}
