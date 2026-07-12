create table if not exists public.student_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  phone text not null,
  email text not null,
  university text not null,
  campus text not null,
  program text not null,
  home_city text not null,
  status text not null default 'new',
  notes text not null default ''
);

create index if not exists student_inquiries_created_at_idx on public.student_inquiries (created_at desc);
