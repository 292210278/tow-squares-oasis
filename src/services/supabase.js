import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lvjmaqhxdafqkudilkeh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2am1hcWh4ZGFmcWt1ZGlsa2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzOTA1MzksImV4cCI6MjAyNzk2NjUzOX0.v_73b4x0v9dJ6E1PlCCIr9pZf0yFTidXAEHHCgDZ3_s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
