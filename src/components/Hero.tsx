
import Header from "./layout/headers/Header";

import background from '../assets/images/bg-grid-background.svg'
import Image from 'next/image'
import Iam from "./Iam";
import CodeSnippet from "./CodeSnippet";
import Features from "./Features";

export default function Hero() {

  return (
    <>
    <div className='bg-[#0D1224]'>
      <div className="bg-grid-background">
        <Header items={true}/>
        <div className="mx-auto max-w-7xl items-center 2xl:flex xl:flex justify-between p-2 relative">
          <div className="flex w-full items-center">
          <div className="p-2 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
            <h1 className="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10">Torne-se o<span className="text-green-400 mx-2">engenheiro de software</span>que as empresas<span className="text-pink-500 mx-2">adoram contratar</span></h1>
            <p className="leading-relaxed text-zinc-300 text-lg my-5 md:my-7 md:text-xl">Todos os<strong className="text-white mx-1">cursos de programação</strong>de que você precisa para se destacar<strong className="text-white mx-1">em um só lugar.</strong></p>
            <a className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined" role="button" href="/courses">Ver Cursos<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg></a>
          </div>
          </div>
          <div className="p-4 pt-4 2xl:pt-32 xl:pt-32">
            <div className="bg-gradient-to-r from-[#11152C] to-[#0A0C38] rounded-lg select-none border border-[#1F223C] relative">
              <div className="flex flex-row">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
              </div>
              <div className="px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="rounded-full bg-red-400 w-3 h-3"></div>
                  <div className="rounded-full bg-orange-400 w-3 h-3"></div>
                  <div className="rounded-full bg-green-200 w-3 h-3"></div>
                </div>
              </div>
              <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
                <CodeSnippet code={`class Programador:
    def __init__(self, nome, habilidades, trabalhador_dedicado):
        self.nome = nome
        self.habilidades = habilidades
        self.trabalhador_dedicado = trabalhador_dedicado

    def apresentar(self):
        print(f"Olá, eu sou {self.nome}.")
        if self.trabalhador_dedicado:
            print("Sou um trabalhador dedicado.")
        else:
            print("Não sou um trabalhador dedicado.")

programador = Programador("Python Pro", ["Python"], True)
programador.apresentar()
`}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Iam />
      <Features /> 
    </div>
    </>
  )
}
