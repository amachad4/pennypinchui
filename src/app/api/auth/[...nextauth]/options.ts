import useLoginUser, { AppUser } from "@/hooks/useLoginUser";
import { FetchResult } from "@apollo/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const email = credentials?.email;
        const password = credentials?.password;
        let user: undefined | FetchResult<AppUser>;
        if (email && password) {
          user = await useLoginUser({ email, password });
        }

        const data = user?.data;

        // If no error and we have user data, return it
        if (data) {
          return data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
