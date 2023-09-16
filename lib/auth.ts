import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"

import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { redirect } from "next/navigation"

export const config: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Email", type: "text", placeholder: "email@email.com.br" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // You need to provide your own logic here that takes the credentials
              // submitted and returns either a object representing a user or value
              // that is false/null if the credentials are invalid.
              // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
              // You can also use the `req` object to obtain additional parameters
              // (i.e., the request IP address)
              const res = await fetch("/auth/credentials", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              // If no error and we have user data, return it
              if (res.ok && user) {
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
          }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        }),
    ]
}

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config)
}

// export function loginIsRequiredClientSide() {
//     if (typeof window === "undefined") {
//         const session = useSession() 
//     }
// }

export async function loginIsRequiredClientSide() {
    const session = await getServerSession(config);
    if (!session) {
        return redirect("/sign-in");
    }
}