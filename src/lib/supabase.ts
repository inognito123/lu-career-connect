import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ynswrynfgcbwqjglftgk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inluc3dyeW5mZ2Nid3FqZ2xmdGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3OTM2NzUsImV4cCI6MjA1NDM2OTY3NX0.dZAPBfhT2q-UQ82u_kLLzl-iGxlW0l3uLlXJTbUlksQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)