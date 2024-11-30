import { IronSession, SessionOptions, getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import * as client from 'openid-client';

const DEFAULT_SCOPES = ['openid', 'profile', 'email', 'offline_access'].join(
  ' ',
);

export const clientConfig = {
  url: `https://dezh.me/realms/${process.env.NEXT_AUTH_REALM}`,
  client_id: process.env.NEXT_AUTH_CLIENT_ID,
  client_secret: process.env.NEXT_AUTH_CLIENT_SECRET,
  scope: DEFAULT_SCOPES,
  redirect_uri: `${process.env.NEXT_AUTH_APP_URL}/auth/callback`,
  post_logout_redirect_uri: `${process.env.NEXT_AUTH_APP_URL}`,
  response_type: 'code',
  grant_type: 'authorization_code',
  post_login_route: `${process.env.NEXT_AUTH_APP_URL}`,
  code_challenge_method: 'S256',
};

export interface SessionData {
  isLoggedIn: boolean;
  access_token?: string;
  id_token?: string;
  code_verifier?: string;
  state?: string;
  userInfo?: {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
  };
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
  access_token: undefined,
  code_verifier: undefined,
  state: undefined,
  userInfo: undefined,
};

export const sessionOptions: SessionOptions = {
  password: process.env.NEXT_AUTH_SECRET!,
  cookieName: 'auth_session',
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: process.env.NODE_ENV === 'production',
  },
  ttl: 60 * 60 * 24 * 7, // 1 week
};

export async function getSession(): Promise<IronSession<SessionData>> {
  const cookiesList = await cookies();
  const session = await getIronSession<SessionData>(
    cookiesList,
    sessionOptions,
  );
  if (!session.isLoggedIn) {
    session.access_token = defaultSession.access_token;
    session.userInfo = defaultSession.userInfo;
  }
  return session;
}

export async function getClientConfig() {
  return await client.discovery(
    new URL(clientConfig.url!),
    clientConfig.client_id!,
    clientConfig.client_secret,
  );
}
