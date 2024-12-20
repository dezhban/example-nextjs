import { Auth0Client } from "@auth0/nextjs-auth0/server";

const DEFAULT_SCOPES = ["openid", "profile", "email"].join(" ");

const configs = {
  appBaseUrl: process.env.NEXT_AUTH_PUBLIC_APP_URL,
  clientId: process.env.NEXT_AUTH_CLIENT_ID,
  clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET,
  secret: process.env.NEXT_AUTH_SECRET,
  domain: process.env.NEXT_AUTH_URL,
};

const authOptions: ConstructorParameters<typeof Auth0Client>[0] = {
  appBaseUrl: configs.appBaseUrl,
  clientId: configs.clientId,
  clientSecret: configs.clientSecret,
  secret: configs.secret,
  domain: configs.domain,
  authorizationParameters: {
    scope: DEFAULT_SCOPES,
  },
};

export const authClient = new Auth0Client(authOptions);