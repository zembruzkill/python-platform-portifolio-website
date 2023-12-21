import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'

import { PrismaAdapter } from '@auth/prisma-adapter'

import Google from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { redirect } from 'next/navigation'
import { db } from './db'

import bcrypt from 'bcrypt'

export const config: NextAuthOptions = {
    adapter: PrismaAdapter(db as any),
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
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'email@email.com.br',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req): Promise<any> {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                console.log('Authorize method: ', credentials)

                if (!credentials?.email || !credentials.password)
                    throw new Error('Credenciais inválidas.')

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })

                if (!user || !user.hashedPassword) {
                    throw new Error('Usuário cadstrado pelo Google.')
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isPasswordValid) {
                    throw new Error('Senha inválida.')
                }

                return user
            },
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    pages: {
        signIn: '/sign-in',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
}

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(
    ...args:
        | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, config)
}

// export function loginIsRequiredClientSide() {
//     if (typeof window === "undefined") {
//         const session = useSession()
//     }
// }

export async function loginIsRequiredClientSide() {
    const session = await getServerSession(config)
    if (!session) {
        return redirect('/sign-in')
    }
}
