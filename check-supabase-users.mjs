import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const { data, error } = await supabase.auth.admin.listUsers({ limit: 20 });
console.log(JSON.stringify({ error, data }, null, 2));
