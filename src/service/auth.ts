import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // 👈 مهم جدًا
};

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
