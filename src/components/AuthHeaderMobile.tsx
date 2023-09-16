'use client'

import { useSession, signOut } from 'next-auth/react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

import { FaArrowRightFromBracket } from "react-icons/fa6";

import { ChevronDownIcon} from '@heroicons/react/20/solid'
import Link from 'next/link';

export default function AuthHeaderMobile() {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(true);

  function handleLogout() {
    signOut()
  }

  const profile_options = [
    { name: 'Dashboard', href: '/dashboard'},
    { name: 'Meu Perfil', href: '/my-profile'},
    { name: 'Pagamentos e Faturas', href: 'payment-billing'},
  ]

  return (
    <>
        {!session && (
            <div className="">
                <Link
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-primary"
                    >
                    Entrar
                </Link>
                <Link
                    href="/sign-up"
                    type="button"
                    className="inline-block rounded px-6 py-2 text-md font-semibold leading-6 bg-primary text-[#172645] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Criar Conta Grátis
                </Link>
            </div>
        )}
        {session && (
            <>
                <div className="p-4 items-center lg:flex lg:flex-1 lg:justify-end space-x-4">
                <Popover.Group className="">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-md font-bold leading-6 text-white hover:text-primary">
                            {session?.user?.name}
                            <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                            <img className="w-11 h-11 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={session?.user?.image ?? "default-image.jpg"} alt="Profile Picture"/>
                        </Popover.Button>
                        <Popover.Overlay className="fixed inset-0 bg-black opacity-60" />
        
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute -left-8 top-full z-1 mt-3 overflow-hidden rounded bg-white shadow-lg ring-1 ring-white/5">
                        <div className="">
                            <div className='flex gap-2 p-4 bg-primary items-center'>
                                <img className="w-11 h-11 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={session?.user?.image ?? "default-image.jpg"} alt="Bordered avatar"/>
                                <p className="lex items-center gap-x-1 text-md font-bold leading-6 text-black">{session?.user?.name}</p>
                            </div>
        
                            {profile_options.map((item) => (
                            <div
                                key={item.name}
                                className="pt-4 group relative flex items-center gap-x-6 rounded-lg p-4 pb-2 text-md leading-6">
                                <div className="flex-auto">
                                <Link href={item.href} className="block text-md font-bold text-black hover:text-indigo-600">
                                    {item.name}
                                </Link>
                                </div>
                            </div>
                            ))}
                            <hr
                            className="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            <div className='flex gap-2 items-center'>
                                <a onClick={handleLogout} className="p-4 block text-md font-bold text-black hover:text-indigo-600">
                                    Sair
                                </a>
                                <span>
                                <FaArrowRightFromBracket onClick={handleLogout} size={20} color="rgb(79 70 229)"/>
                                </span>
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </Popover>
                </Popover.Group>
                {profile_options.map((item) => (
                    <div
                        key={item.name}
                        className="pt-4 relative flex items-center gap-x-6 p-4 pb-2 text-md leading-6">
                        <div className="flex-auto">
                        <Link href={item.href} className="text-md font-bold text-white hover:text-indigo-600">
                            {item.name}
                        </Link>
                        </div>
                    </div>
                ))}
                </div>
                <div className='flex gap-2 items-center'>
                    <a onClick={handleLogout} className="p-4 block text-md font-bold text-white hover:text-indigo-600">
                        Sair
                    </a>
                    <span>
                    <FaArrowRightFromBracket onClick={handleLogout} size={20} color="rgb(79 70 229)"/>
                    </span>
                </div>
            </>
        )}
    </>
  )
}


