import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase URL and Anon Key must be provided in environment variables"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function addContactMessage(data: {
  name: string;
  phone: string;
  email: string;
  organization: string;
  message: string;
  type: string;
  way: string;
}) {
  try {
    const { data: response, error } = await supabase
      .from("contact_list")
      .insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          organization: data.organization,
          message: data.message,
          type: data.type,
          way: data.way,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data: response };
  } catch (error) {
    console.error("Error adding contact message:", error);
    throw error;
  }
}
