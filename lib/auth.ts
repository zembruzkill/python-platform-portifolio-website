import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"

import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export const config: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
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