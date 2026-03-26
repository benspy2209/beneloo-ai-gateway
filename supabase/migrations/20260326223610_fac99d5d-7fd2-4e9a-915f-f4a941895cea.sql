CREATE TABLE public.diagnostics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  email TEXT NOT NULL,
  score INTEGER,
  robots_ok BOOLEAN,
  jsonld_ok BOOLEAN,
  faq_ok BOOLEAN,
  og_ok BOOLEAN,
  meta_ok BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.diagnostics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON public.diagnostics
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);