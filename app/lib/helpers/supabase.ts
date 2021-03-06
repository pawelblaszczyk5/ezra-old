import type { Provider } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { AuthorizationType } from '~/lib/enums';

export const supabaseClient = createClient(SUPABASE_PROJECT_URL, SUPABASE_PROJECT_ANON_KEY, {
  fetch: fetch.bind(globalThis),
});

export const getProvider = (type: Exclude<AuthorizationType, AuthorizationType.EMAIL>): Provider => {
  switch (type) {
    case AuthorizationType.GITHUB: {
      return 'github';
    }
    case AuthorizationType.SPOTIFY: {
      return 'spotify';
    }
    case AuthorizationType.GITLAB: {
      return 'gitlab';
    }
  }
};

export const getRedirectURL = (request: Request) => `${new URL(request.url).origin}/authorize`;
