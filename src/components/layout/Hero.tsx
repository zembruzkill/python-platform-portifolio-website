'use client'

import { useRouter } from 'next/navigation';
import {useState } from 'react'

import Editor from "../../components/Editor";
import Header from "../../components/layout/headers/Header";

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

export default function Hero() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className='bg-gradient-to-r h-screen from-[#172645] to-[#ff80b5]'>
      <Header />
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
              
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Começar Agora
              </a>
              <a className="text-sm font-semibold leading-6 text-gray-100">
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
