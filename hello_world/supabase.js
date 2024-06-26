import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import Config from 'react-native-config'; // this line for the environment variables configuration
import {supabase} from './supabase';

const supabaseUrl = Config.SUPABASE_URL;
const supabaseAnonKey = Config.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});