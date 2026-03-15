-- ═══════════════════════════════════════════════════
--  Galería de Glitches — Schema inicial
--  Ejecutar en: Supabase Dashboard → SQL Editor
-- ═══════════════════════════════════════════════════

-- Tipos enumerados
create type severity   as enum ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL', 'LEGENDARY');
create type bug_status as enum ('unsolved', 'workaround', 'fixed');

-- ── Tabla: profiles ──────────────────────────────
create table if not exists public.profiles (
  id          uuid        primary key references auth.users(id) on delete cascade,
  username    text        unique,
  avatar_url  text,
  bio         text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Trigger: sincronizar perfil automáticamente al registrar usuario
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Tabla: bugs ──────────────────────────────────
create table if not exists public.bugs (
  id                uuid        primary key default gen_random_uuid(),
  author_id         uuid        not null references public.profiles(id) on delete cascade,
  title             text        not null,
  description       text        not null,
  expected_behavior text,
  fix               text,
  language          text        not null,
  framework         text,
  severity          severity    not null default 'MEDIUM',
  status            bug_status  not null default 'unsolved',
  upvotes           integer     not null default 0,
  tags              text[]      not null default '{}',
  code_snippet      text,
  error_output      text,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- Índices de búsqueda
create index bugs_author_id_idx  on public.bugs(author_id);
create index bugs_language_idx   on public.bugs(language);
create index bugs_severity_idx   on public.bugs(severity);
create index bugs_status_idx     on public.bugs(status);
create index bugs_created_at_idx on public.bugs(created_at desc);

-- ── Tabla: solutions ─────────────────────────────
create table if not exists public.solutions (
  id          uuid        primary key default gen_random_uuid(),
  bug_id      uuid        not null references public.bugs(id) on delete cascade,
  author_id   uuid        not null references public.profiles(id) on delete cascade,
  body        text        not null,
  code_fix    text,
  votes       integer     not null default 0,
  accepted    boolean     not null default false,
  created_at  timestamptz not null default now()
);

create index solutions_bug_id_idx on public.solutions(bug_id);

-- ── Row Level Security (RLS) ─────────────────────

-- profiles
alter table public.profiles enable row level security;

create policy "Perfil público visible"
  on public.profiles for select
  using (true);

create policy "Usuario actualiza su propio perfil"
  on public.profiles for update
  using (auth.uid() = id);

-- bugs
alter table public.bugs enable row level security;

create policy "Bugs visibles públicamente"
  on public.bugs for select
  using (true);

create policy "Usuario autenticado puede crear bug"
  on public.bugs for insert
  with check (auth.uid() = author_id);

create policy "Autor puede editar su bug"
  on public.bugs for update
  using (auth.uid() = author_id);

create policy "Autor puede eliminar su bug"
  on public.bugs for delete
  using (auth.uid() = author_id);

-- solutions
alter table public.solutions enable row level security;

create policy "Soluciones visibles públicamente"
  on public.solutions for select
  using (true);

create policy "Usuario autenticado puede proponer solución"
  on public.solutions for insert
  with check (auth.uid() = author_id);

create policy "Autor puede editar su solución"
  on public.solutions for update
  using (auth.uid() = author_id);

-- ── Trigger: updated_at automático ───────────────
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_bugs_updated_at
  before update on public.bugs
  for each row execute function public.set_updated_at();

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();
