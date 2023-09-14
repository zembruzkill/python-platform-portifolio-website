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
                              <span className="text-3xl text-black font-bold">99,90</span>
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
                              <span className="text-3xl font-semibold">35</span>
                          </p>
                          <div className="pt-8">
                              <p className="text-gray-400 text-center">
                                  <span className="pl-2">
                                  Check out our solutions for businesses, which include Custom Python Courses, Assignments, User Progress Tracking and much more.
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
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-12 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 mb-12">
          <div className="mx-auto px-5">
              <div className="flex flex-col items-center">
                  <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                  <p className="mt-3 text-lg text-neutral-500 md:text-xl">Perguntas Frequentes

                  </p>
              </div>
              <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> How does the billing work?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                              billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                              pricing for certain services. Payment is typically made through a credit card or other
                              secure online payment method.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Can I get a refund for my subscription?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                              guarantee for most of its subscription plans. If you are not satisfied with your
                              subscription within the first 30 days, you can request a full refund. Refunds for
                              subscriptions that have been active for longer than 30 days may be considered on a
                              case-by-case basis.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> How do I cancel my subscription?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                              log in to your account and navigate to the subscription management page. From there, you
                              should be able to cancel your subscription and stop future billing.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Is there a free trial?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                              for a limited time. During the trial period, you will have access to a limited set of
                              features and functionality, but you will not be charged.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> How do I contact support?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                              have any other questions, you can contact the company's support team by submitting a support
                              request through the website or by emailing support@ourwebsite.com.
                          </p>
                      </details>
                  </div>
                  <div className="py-5">
                      <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                              <span> Do you offer any discounts or promotions?</span>
                              <span className="transition group-open:rotate-180">
                                      <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                          stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                          <path d="M6 9l6 6 6-6"></path>
                                      </svg>
                                  </span>
                          </summary>
                          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                              from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                              up for the company's newsletter or follow it on social media.
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