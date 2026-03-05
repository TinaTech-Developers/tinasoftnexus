// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/User";
import connectDB from "../../../../../lib/mongodb";

connectDB();

export const POST = async (req) =>
  NextAuth(req, {
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
          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error("No user found with this email");

          const isValid = await user.comparePassword(credentials.password);
          if (!isValid) throw new Error("Incorrect password");

          return { id: user._id, email: user.email };
        },
      }),
    ],
    session: { strategy: "jwt" },
    pages: { signIn: "/auth" },
  });

// Also support GET (for NextAuth callbacks)
export const GET = POST;
