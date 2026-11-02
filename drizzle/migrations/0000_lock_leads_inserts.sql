DROP POLICY IF EXISTS "Anyone can submit a consultation request" ON public.leads;
REVOKE INSERT ON public.leads FROM anon, authenticated;
GRANT ALL ON public.leads TO service_role;