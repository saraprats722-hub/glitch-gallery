// Tipos generados automáticamente desde el schema de Supabase.
// Para regenerar: npx supabase gen types typescript --project-id <tu-project-id> > lib/database.types.ts

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Severity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | 'LEGENDARY';
export type BugStatus = 'unsolved' | 'workaround' | 'fixed';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id:         string;
          username:   string | null;
          avatar_url: string | null;
          bio:        string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id:         string;
          username?:  string | null;
          avatar_url?: string | null;
          bio?:       string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>;
      };
      bugs: {
        Row: {
          id:                 string;
          author_id:          string;
          title:              string;
          description:        string;
          expected_behavior:  string | null;
          fix:                string | null;
          language:           string;
          framework:          string | null;
          severity:           Severity;
          status:             BugStatus;
          upvotes:            number;
          tags:               string[];
          code_snippet:       string | null;
          error_output:       string | null;
          created_at:         string;
          updated_at:         string;
        };
        Insert: {
          id?:                string;
          author_id:          string;
          title:              string;
          description:        string;
          expected_behavior?: string | null;
          fix?:               string | null;
          language:           string;
          framework?:         string | null;
          severity?:          Severity;
          status?:            BugStatus;
          upvotes?:           number;
          tags?:              string[];
          code_snippet?:      string | null;
          error_output?:      string | null;
          created_at?:        string;
          updated_at?:        string;
        };
        Update: Partial<Database['public']['Tables']['bugs']['Insert']>;
      };
      solutions: {
        Row: {
          id:         string;
          bug_id:     string;
          author_id:  string;
          body:       string;
          code_fix:   string | null;
          votes:      number;
          accepted:   boolean;
          created_at: string;
        };
        Insert: {
          id?:        string;
          bug_id:     string;
          author_id:  string;
          body:       string;
          code_fix?:  string | null;
          votes?:     number;
          accepted?:  boolean;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['solutions']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      severity:   { LOW: 'LOW'; MEDIUM: 'MEDIUM'; HIGH: 'HIGH'; CRITICAL: 'CRITICAL'; LEGENDARY: 'LEGENDARY' };
      bug_status: { unsolved: 'unsolved'; workaround: 'workaround'; fixed: 'fixed' };
    };
  };
}
