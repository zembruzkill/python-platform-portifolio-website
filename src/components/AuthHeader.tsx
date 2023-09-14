'use client'

import { useSession } from 'next-auth/react'

export default function AuthHeader() {
  const { data: session } = useSession()

  console.log(session)

  return (
    <>
        {!session && (
            <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end space-x-4">
                <a href="/sign-in" className="text-md font-semibold leading-6 text-white hover:text-primary">
                Entrar
                </a>
                <a
                href="/sign-up"
                type="button"
                className="inline-block rounded bg-primary px-6 py-2 text-md font-semibold leading-6 text-[#172645] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Criar Conta Grátis
                </a>
            </div>
        )}
            {session && (
                <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end space-x-4">
                <a href="/sign-in" className="text-md font-semibold leading-6 text-white hover:text-primary">
                {session?.user?.name}
                </a>
                <img className="w-11 h-11 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={session?.user?.image ?? "default-image.jpg"} alt="Bordered avatar"/>
            </div>
        )}
    </>
  )
}


