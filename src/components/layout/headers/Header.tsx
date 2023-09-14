'use client'

import { useState } from 'react'

import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'

import AuthHeader from '@/components/AuthHeader'

export default function Header(props: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-gradient-to-r from-[#172645] to-[#ff80b5]'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href='/' className="-m-1.5 p-1.5">
            <div className=''>
              <Image
                className=''
                src={logo}
                alt="Logo of the website"
                width={220}
                height={220}
              />
            </div>
          </a>
        </div>
        {props.items && (
          <>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <a
                href="/courses"
                className="text-md font-semibold leading-6 text-white hover:text-primary">
                Cursos
              </a>
              <a
                href="/pricing"
                className="text-md font-semibold leading-6 text-white hover:text-primary">
                Preços
              </a>
              <a
                href="/blog"
                className="text-md font-semibold leading-6 text-white hover:text-primary">
                Blog
              </a>
            </Popover.Group>
            <AuthHeader />
          </>
        )}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-[#172645] to-[#ff80b5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href='/' className="-m-1.5 p-1.5">
              <div className=''>
                <Image
                  className='ml-4'
                  src={logo}
                  alt="Logo of the website"
                  width={220}
                  height={220}
                />
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/courses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-primary"
                >
                  Cursos
                </a>
                <a
                  href="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-primary"
                >
                  Preços
                </a>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-primary"
                >
                  Blog
                </a>
              </div>
              <div className="">
                <a
                  href="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-primary"
                >
                  Entrar
                </a>
                <a
                  href="/sign-up"
                  type="button"
                  className="inline-block rounded bg-primary px-6 py-2 text-md font-semibold leading-6 text-[#172645] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  Criar Conta Grátis
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
