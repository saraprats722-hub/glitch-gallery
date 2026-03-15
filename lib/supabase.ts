import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL  ?? '';
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// Indica si Supabase está configurado (útil para mostrar estados de carga condicionales)
export const isSupabaseConfigured =
  supabaseUrl.startsWith('https://') && supabaseAnon.length > 20;

export const supabase = createClient<Database>(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnon || 'placeholder');
