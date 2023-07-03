// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
// import { NextResponse } from 'next/server';

// import type { NextRequest } from 'next/server';
// import type { UserDB } from '@/lib/database.types';

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient<UserDB>({ req, res });
//   await supabase.auth.getSession();
//   return res;
// }
