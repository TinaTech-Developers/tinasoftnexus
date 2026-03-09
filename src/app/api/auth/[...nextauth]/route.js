// src/app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/User";
import connectDB from "../../../../../lib/mongodb";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = await user.comparePassword(credentials.password);

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
