import { createClient } from "@supabase/supabase-js";
import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY,
} from "$env/static/public";

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;

const client = (token: Promise<string | null> | undefined) => {
  return createClient(supabaseUrl, supabaseKey, {
    async accessToken() {
      return token || null;
    },
  });
};

export default client;
