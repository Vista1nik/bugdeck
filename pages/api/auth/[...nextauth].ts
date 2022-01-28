import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { hash, compare } from 'bcryptjs';

// export async function hashPassword(password) {
//   const hashedPassword = await hash(password, 12);
//   return hashedPassword;
// }

import { prisma } from "../../../lib/prisma";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "admin",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials?.username
                    }
                })

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    const isPasswordValid = await compare(credentials?.password!, user.password)

                    if (isPasswordValid) {
                        return user;
                    } else {
                        return null
                    }
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;
                }
            },
        }),
        // ...add more providers here
    ],
});
