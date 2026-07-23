import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://grgjkjfnhntxeyqsvdxm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZ2pramZuaG50eGV5cXN2ZHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMjE4MDAsImV4cCI6MjA5OTU5NzgwMH0.kX-C8K-w1mZXflvk8oWw0h5PSTrbGTJ-81UJcZJW1pk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
