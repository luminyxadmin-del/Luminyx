import fs from "fs/promises";
import { createClient } from "@supabase/supabase-js";
const envText = await fs.readFile(".env.local", "utf8");
envText.split(/\r?\n/).filter(l => l && !l.startsWith("#")).forEach(l => { const [k,v] = l.split("=",2); process.env[k]=v; });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
console.log('URL', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('KEY', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0,10)+'...');
const response = await supabase.auth.signInWithPassword({ email: 'luminyx@admin.com', password: 'Luminyx@123' });
console.log(JSON.stringify(response, null, 2));
