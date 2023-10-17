
import Header from "./layout/headers/Header";

import background from '../assets/images/bg-grid-background.svg'
import Image from 'next/image'
import Iam from "./Iam";
import CodeSnippet from "./CodeSnippet";

export default function Hero() {

  return (
    <>
    <div className='bg-[#0D1224]'>
      <div className="bg-grid-background">
        <Header items={true}/>
        <div className="block 2xl:flex xl:flex items-center mx-auto xl:ml-16 2xl:ml-32 xl:mr-16 2xl:mr-32 justify-between p-2 relative">
          <div className="flex w-full justify-center">
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
                  <a className="text-sm font-semibold leading-6 text-white">
                    Saiba mais <span aria-hidden="true">→</span>
                  </a>
                </div>
          </div>
          </div>
          <div className="w-full p-4 py-32 ">
          <div>
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
                <CodeSnippet code={`class Programmer:
      def __init__(self, name, skills, hardWorker, problemSolver):
          self.name = name
          self.skills = skills
          self.hardWorker = hardWorker
          self.problemSolver = problemSolver

          programmer = Programmer("Python Pro", ["Python"], True, True)`}/>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Iam />
    </div>
    </>
  )
}
