import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { pb } from "../../../lib/pocketbase";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        try {
          const authData = await pb.admins.authWithPassword(req.body.email, req.body.password);
          return {
            email: authData.admin.email
          }
        }
        catch(error) {
          return null;
        }

      },
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions)