import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnon) {
  throw new Error(
    'Faltan variables de entorno de Supabase. ' +
    'Copia .env.example → .env.local y añade tus claves.'
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnon);
