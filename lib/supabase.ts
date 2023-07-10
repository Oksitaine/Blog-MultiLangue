
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabasetype'

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(
    process.env.ACCES_URL_SUPABASE as string, 
    process.env.ACCES_ANON_SUPABASE as string
)