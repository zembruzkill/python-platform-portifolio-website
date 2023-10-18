import Header from "./layout/headers/Header"

export default function CourseHero() {

  return (
    <>
    <div className='bg-[#0D1224] pb-12'>
      <div className="bg-grid-background">
      <Header items={true}/>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between gap-2 relative">
        <div className="max-w-xl text-center md:text-left pt-5 lg:pt-24">
            <h1 className="mt-0 text-white text-title-xl font-bold">Programador Python Pro</h1>
            <p className="text-zinc-300 text-xl md:text-2xl leading-7 md:leading-9 my-5">Tudo o que você precisa para programar em Python em um único curso (inclui 3 projetos do mundo real)</p>
            <div className="my-8">
                <div className="flex items-center justify-center md:justify-start">
                    <span className="text-zinc-200 font-bold" data-testid="trust-score">4.7</span>
                    <span className="mx-2 flex items-center">
                        <img alt="Stars" data-testid="trust-stars" fetchPriority="high" width="90" height="30" decoding="async" data-nimg="1" className="inline" src="https://res.cloudinary.com/doorwkexf/image/upload/v1697605147/4.5.fbc139f3_jzsoek.svg"></img>
                    </span>
                    <span className="text-zinc-200 text-sm" data-testid="trust-reviews">256 avaliações</span>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <a className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto" role="button" href="#">Acesse todos os cursos por R$79,90/m</a>
            </div>
            <div className="mt-4 flex items-center justify-center md:justify-start">
                <hr className=" text-zinc-300 inline-block w-6 mr-2"></hr><span className="text-zinc-300">ou</span><hr className="text-zinc-300 inline-block w-6 ml-2"></hr>
            </div>
            <div>
                <a className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto" role="button" href="#">Compre esse curso por R$397,90</a>
            </div>
        </div>
        <div className="mt-7">
            <div className="shadow-2xl shadow-gray-50 border border-zinc-600 rounded-md relative">
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="flex flex-row">
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                            <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                        </div>
                    </div>
                </div>
            
            <div className="p-6 md:p-10 lg:p-12 whitespace-nowrap bg-[#11152C] rounded">
                <h2 className="text-white font-semibold text-lg uppercase tracking-wide mb-0">Detalhes do Curso</h2>
                <div className="h-[5px] bg-gradient-to-r from-pink-500 to-violet-600 w-16 mt-4 mb-10"></div>
                <ul className="space-y-4 font-normal text-blue-200">
                    <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"></path>
                            </g>
                        </svg>
                        Do básico ao Avançado
                    </li>
                    <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                        </svg>
                        12 horas de video HD
                    </li>
                    <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M464 480H48C-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49-48 48-48zM128 120c-22.091 0-40-17.909-40-40s17.909-40-40-40-40-17.909-40-40-17.909-40-40-40zm0 96c-22.091 0-40-17.909-40-40s17.909-40-40-40-40-17.909-40-40-17.909-40-40-40zm0 96c-22.091 0-40-17.909-40-40s17.909-40-40-40-40-17.909-40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0-6.627 5.373-12 12-12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0-6.627 5.373-12 12-12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0-6.627 5.373-12 12-12h200c6.627 0 12-5.373 12-12z"></path>
                        </svg>
                        200 Aulas
                    </li>
                    {/* <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
                        </svg>
                        Downloadable content
                    </li> */}
                    <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm1-10V7h-2v7h6v-2h-4z"></path>
                        </svg>
                        Exercícios mão no código
                    </li>
                    <li>
                    <svg stroke="currentColor" fill="currentColor" className="mr-4 inline text-violet-500" height="20" width="20" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                        Pratique no celular
                    </li>
                    <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"></path>
                        </svg>
                        Certificado de Conclusão
                    </li>
                    <li>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="mr-4 inline text-violet-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 78.3 96 0 169.8 0 256c0 74.7 48.1 141.9 120 173.6V496c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24V429.6C235.9 397.9 284.1 352 339.7 352 372.1 352 401.5 377.1 416 406.4 430.5 377.1 459.9 352 492.3 352 547.9 352 596 397.9 596 429.6V496c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24V429.6C715.9 397.9 764.1 352 819.7 352c32.4 0 61.8 25.1 76.3 54.4C910.9 345.3 958 256 958 256 958 169.8 879.7 96 789.1 96zM400 160v272h-64V160h64z"></path>
                        </svg>
                        Acesso vitalício
                    </li>
                </ul>
            </div>
            </div>
        </div>
      </div>  
      </div>
      </div>
    </div>
    </>
  )
}
