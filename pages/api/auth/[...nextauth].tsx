import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import FacebookProvider from "next-auth/providers/facebook"
const options = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: "3BnhH4VWTe9ugPOu2mcbT8pmBqfwg9wp",
      clientSecret: "3Z_MUbuNzvf5dHcilyqWtOeIdZXmCBkOSWIod__2oTfasL4OxKCyjBPmbEYNF3qW",
      issuer: "https://dev-61nfp2k7.us.auth0.com",
    }),
    FacebookProvider({
      clientId: "3BnhH4VWTe9ugPOu2mcbT8pmBqfwg9wp",
      clientSecret: "3Z_MUbuNzvf5dHcilyqWtOeIdZXmCBkOSWIod__2oTfasL4OxKCyjBPmbEYNF3qW"
    })
  ],
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);