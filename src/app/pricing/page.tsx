import Header  from "@/components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pricing = () => {
    return (
      <div>
        <div className='bg-gradient-to-r from-[#172645] to-[#ff80b5]'>
        <Header items={true}/>
        <div className="mx-auto max-w-7xl items-center p-4 lg:px-8 pt-6">
          <div className="min-h-screen flex justify-center items-center">
              <div className="">
                  <div className="text-center font-semibold">
                      <h1 className="text-5xl">
                          <span className="text-primary tracking-wide">Escolha </span>
                          <span className="text-white">a opção que funciona melhor para você</span>
                      </h1>
                      <p className="flex justify-center items-center pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                      <span className="text-white tracking-wide">Ou faça um test drive com nosso </span>
                      <span className="hover:text-indigo-600 font-bold tracking-wide pl-2 pr-2"> <a href="/sign-up">Plano Grátis</a></span>
                      <span><FaArrowRight size={20} color="rgb(79 70 229)" /></span>
                      </p>
                  </div>
                  <div className="pt-24 flex flex-row">
                      <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                          <h1 className="text-black font-semibold text-2xl">Individual</h1>
                          <p className="pt-2 tracking-wide">
                              <span className="text-gray-400 align-top">R$ </span>
                              <span className="text-3xl font-semibold">27,90</span>
                          </p>
                          <div className="pt-8">
                              <p className="text-gray-400 text-center">
                                  <span className="pl-2">
                                    Acesso vitalício a um único curso
                                  </span>
                              </p>
                              <p className="text-gray-400 text-center pt-5">
                                  <span className="pl-2">
                                    Melhor se você estiver interessado apenas em cursos específicos
                                  </span>
                              </p>

                              <a href="/courses" className="">
                                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                      <span className="font-medium">
                                          Escolher um curso
                                      </span>
                                  </p>
                              </a>
                          </div>
                      </div>
                      <div className="w-80 p-8 bg-primary text-center rounded-3xl text-white border-4 shadow-xl border-primary transform scale-125">
                          <h1 className="text-black font-semibold text-2xl">Vitalício</h1>
                          <p className="pt-2 tracking-wide">
                              <span className="text-black  text-bold align-top">R$ </span>
                              <span className="text-3xl text-black font-bold">49,90</span>
                          </p>
                          <div className="pt-8">
                              <p className="text-black text-center">
                                  <span className="pl-2">
                                    Acesso vitalício a todos os cursos atuais e futuros
                                  </span>
                              </p>
                              <p className="text-black text-center pt-5">
                                  <span className="pl-2">
                                    Melhor opção de custo-benefício para aprender e praticar Python
                                  </span>
                              </p>

                              <a href="#" className="">
                                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                      <span className="font-medium">
                                          Comprar Agora
                                      </span>
                                  </p>
                              </a>
                          </div>
                          <div className="absolute top-4 right-4">
                              <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                          </div>
                      </div>
                      <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                          <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
                          <p className="pt-2 tracking-wide">
                              <span className="text-gray-400 align-top">R$ </span>
                              <span className="text-3xl font-semibold">99,00</span>
                          </p>
                          <div className="pt-8">
                              <p className="text-gray-400 text-center">
                                  <span className="pl-2">
                                  Confira nossas soluções para empresas, que incluem cursos personalizados de Python, tarefas, acompanhamento do progresso do usuário e muito mais.
                                  </span>
                              </p>

                              <a href="#" className="">
                                  <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                      <span className="font-medium">
                                          Comprar Agora
                                      </span>
                                  </p>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-12 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:rounded-lg sm:px-10 mb-12">
          <div className="mx-auto px-5">
              <div className="flex flex-col items-center">
                  <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                  <p className="mt-3 text-lg text-neutral-500 md:text-xl">Perguntas Frequentes

                  </p>
              </div>
              <div className="mx-auto mt-8 grid max-w-2xl divide-y divide-neutral-200">
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Como posso testar o curso?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Se você deseja apenas verificar a aparência da interface do aplicativo, como funciona e quais recursos possui, escolha o plano de conta Gratuito. Isso lhe dará acesso à seção gratuita de todos os cursos. Você pode optar por atualizar sua conta gratuita para um plano pago a qualquer momento.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Tenho que assinar um contrato de longo prazo?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Não, não há contrato. Dependendo do plano, você pagará uma taxa única e terá acesso vitalício a cursos individuais, no caso do plano Curso Único, ou a todo o nosso currículo, se decidir adquirir o plano Vitalício.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Você precisa de um cartão de crédito para registrar uma conta de teste?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Não. Ao se registrar em um plano de conta de teste, você não será solicitado a fornecer nenhuma informação de faturamento. Portanto, nenhum cartão de crédito é necessário, apenas seu nome e endereço de e-mail. Você precisará fornecer informações de cobrança somente quando quiser fazer upgrade para um plano pago..
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Quais as opções de pagamento disponíveis?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Aceitamos todos os principais cartões de crédito, incluindo Visa, MasterCard, Elo, American Express, Boleto Bancário e Pix.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Posso alterar meu plano de conta?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Sim. Você sempre pode atualizar seu plano a qualquer momento..
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Posso encerrar minha conta?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Você pode remover sua conta a qualquer momento através da opção Fechar conta em Meu perfil.
                          </p>
                      </details>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
      </div>
    );
  };
  
  export default Pricing;