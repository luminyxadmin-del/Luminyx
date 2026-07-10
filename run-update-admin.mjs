import fs from "fs/promises";
import { createClient } from "@supabase/supabase-js";
const envText = await fs.readFile(".env.local", "utf8");
envText.split(/\r?\n/).filter(l => l && !l.startsWith("#")).forEach(l => { const [k,v] = l.split("=",2); process.env[k] = v; });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log("Loaded supabase url", process.env.NEXT_PUBLIC_SUPABASE_URL);
const { data: users, error: listError } = await supabase.auth.admin.listUsers({ limit: 20 });
console.log("listError", listError);
console.log("users", users?.users?.map(u => ({ id: u.id, email: u.email, confirmed_at: u.confirmed_at })));
const user = users?.users?.find(u => u.email === "luminyx@admin.com");
if (!user) {
  console.log("User not found");
  process.exit(1);
}
const { data, error } = await supabase.auth.admin.updateUserById(user.id, { password: "Luminyx@123" });
console.log("updateError", error);
console.log("updateData", data);
