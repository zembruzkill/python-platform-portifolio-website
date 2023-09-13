'use client'

import {useState } from 'react'

import Editor from "../../components/Editor";

import Link from 'next/link'

import { Dialog, Popover } from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon
} from '@heroicons/react/24/solid'

import logo from '../../assets/logo.svg'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className='bg-gradient-to-r h-screen from-[#172645] to-[#ff80b5]'>
      <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
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
        </div>
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

          <a href="#" className="text-md font-semibold leading-6 text-white hover:text-yellow-300">
            Cursos
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-white hover:text-yellow-300">
            Preços
          </a>
          <a href="#" className="text-md font-semibold leading-6 text-white hover:text-yellow-300">
            Blog
          </a>
        </Popover.Group>
        <div className="hidden items-center lg:flex lg:flex-1 lg:justify-end space-x-4">
          <a href="#" className="text-md font-semibold leading-6 text-white hover:text-yellow-300">
            Entrar
          </a>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 py-2 text-md font-semibold leading-6 bg-yellow-300 text-[#172645] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Criar Conta Grátis
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-[#172645] to-[#ff80b5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
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
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-300"
                >
                  Cursos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-300"
                >
                  Preços
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-300"
                >
                  Blog
                </a>
              </div>
              <div className="">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-yellow-300"
                >
                  Entrar
                </a>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 py-2 text-md font-semibold leading-6 bg-yellow-300 text-[#172645] shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  Criar Conta Grátis
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    <div className="flex items-center mx-auto max-w-7xl justify-between p-2 lg:px-8">
      <div className=" flex w-full justify-center">
      <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Aprenda Python da Melhor Maneira
            </h1>
            <p className="mt-6 text-lg leading-8 text-yellow-300">
            Perfeito para equipes e indivíduos, oferecemos uma ampla gama de cursos práticos. Comece a dominar Python hoje!
            </p>
            <div className="mt-10 flex items-center justify-begin gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Começar Agora
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-100">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
      </div>
      </div>
      <div className="w-full p-4 py-32">
        <Editor />
      </div>
    </div>
    </div>
    </>
  )
}
