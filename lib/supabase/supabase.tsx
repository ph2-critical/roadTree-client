import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  createClientComponentClient,
  createMiddlewareClient,
} from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

// Export for usage by the rest of the app
export { supabase, supabaseUrl, supabaseKey };
