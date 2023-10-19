export default function Features() {
    return (
        <>
            <div className="relative overflow-hidden border-t-blue-600">
                <div className="absolute w-full bg-blue-300"></div>
                <div className="relative">
                    <div className="flex flex-row justify-center">
                        <div
                            id="blur"
                            className="absolute w-full bg-gradient-to-r from-transparent via-violet-900 to-transparent h-1"
                        ></div>
                        <div className="w-100 h-100 bg-violet-900 rounded-full absolute filter blur-3xl opacity-30">
                            teste
                        </div>
                        <section className="flex flex-col text-white border-t-1 border-[#262B42]">
                            <header className="my-12 mb-6 text-center">
                                <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">
                                    Features
                                </p>
                                <h2 className="text-3xl">
                                    Porque escolher meu conteúdo?
                                </h2>
                            </header>
                            <div className="container mx-auto max-w-5xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="md:mx-4">
                                        <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-violet-50">
                                            <div className="text-violet-500">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 1024 1024"
                                                    height="25"
                                                    width="25"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-violet-500 mb-3 inline-block font-medium md:font-semibold">
                                            Fast-track your learning
                                        </span>
                                        <h2 className="text-3xl mb-3">
                                            Sem frufru, apenas coisas boas!
                                        </h2>
                                        <p className="text-zinc-300">
                                            Não quero desperdiçar seu tempo com
                                            coisas chatas e desnecessárias.
                                            Portanto, certifiquei-me de que meus
                                            cursos sejam claros, concisos,
                                            diretos e livres de jargão técnico.
                                            Sem divagações ou repetições, apenas
                                            o essencial que você precisa para
                                            ter sucesso, explicado em linguagem
                                            simples..
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <img
                                            alt="No fluff"
                                            loading="lazy"
                                            width="1180"
                                            height="873"
                                            decoding="async"
                                            data-nimg="1"
                                            className="w-5/6 md:w-full lg:pt-4 xl:w-5/6"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697698941/feature-01_uyce0n.webp"
                                        ></img>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                    <div className="md:mx-4">
                                        <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-pink-100 ">
                                            <div className="text-pink-500 ">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    height="21"
                                                    width="21"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-pink-500 mb-3 inline-block font-medium md:font-semibold">
                                            Aulas passo-a-passo
                                        </span>
                                        <h2 className="text-3xl">
                                            Aulas fáceis de acompanhar
                                        </h2>
                                        <p className="text-zinc-300">
                                            Eu sei que aprender a programar pode
                                            ser desafiador. Portanto, organizei
                                            cuidadosamente meus cursos em partes
                                            simples e fáceis de seguir para
                                            ajudá-lo a progredir suavemente,
                                            passo a passo. Vou guiá-lo em cada
                                            etapa do caminho para que você não
                                            se sinta sobrecarregado.
                                        </p>
                                    </div>
                                    <div className="flex justify-center md:order-first">
                                        <img
                                            alt="No fluff"
                                            loading="lazy"
                                            width="906"
                                            height="701"
                                            decoding="async"
                                            data-nimg="1"
                                            className="w-5/6 md:w-full md:pt-20 xl:w-4/5"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697698941/feature-02_dzmqjx.webp"
                                        ></img>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                    <div className="md:mx-4">
                                        <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-green-100 ">
                                            <div className="text-green-700">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 512 512"
                                                    height="25"
                                                    width="25"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-green-700 mb-3 inline-block font-medium md:font-semibold">
                                            Perfeito mix entre teoria e prática
                                        </span>
                                        <h2 className="text-3xl">
                                            Aulas mão no código
                                        </h2>
                                        <p className="text-zinc-300">
                                            Acredito que a melhor maneira de
                                            aprender é realmente fazendo. Por
                                            isso, meus cursos ensinam a teoria
                                            essencial e oferecem exercícios
                                            práticos. Você será capaz de
                                            praticar tudo o que aprender e
                                            aplicá-lo a situações da vida real.
                                        </p>
                                    </div>
                                    <div className="flex justify-center ">
                                        <img
                                            alt="No fluff"
                                            loading="lazy"
                                            width="752"
                                            height="912"
                                            decoding="async"
                                            data-nimg="1"
                                            className="w-3/5 md:w-4/6 md:pt-20 lg:pt-8 xl:w-3/5"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697698941/feature-03_wwecb4.webp"
                                        ></img>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                    <div className="md:mx-4">
                                        <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-violet-50">
                                            <div className="text-violet-500">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 16 16"
                                                    height="25"
                                                    width="25"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-violet-500 mb-3 inline-block font-medium md:font-semibold">
                                            Se prepare para o trabalho
                                        </span>
                                        <h2 className="text-3xl">
                                            Projetos do Mundo Real
                                        </h2>
                                        <p className="text-zinc-300">
                                            Meus cursos são projetados para
                                            prepará-lo para empregos do mundo
                                            real e entrevistas. Com cursos
                                            aprofundados e abrangentes repletos
                                            de exemplos e exercícios do mundo
                                            real, você estará pronto para
                                            enfrentar qualquer desafio que
                                            surgir no seu caminho.
                                        </p>
                                    </div>
                                    <div className="flex justify-center md:order-first">
                                        <img
                                            alt="No fluff"
                                            loading="lazy"
                                            width="750"
                                            height="950"
                                            decoding="async"
                                            data-nimg="1"
                                            className="w-4/6 md:pt-20 lg:pt-10 xl:w-3/5"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697698941/feature-04_sevxwu.webp"
                                        ></img>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                                    <div className="md:mx-4">
                                        <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-pink-100">
                                            <div className="text-pink-75">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 640 512"
                                                    height="25"
                                                    width="25"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-pink-75 mb-3 inline-block font-medium md:font-semibold">
                                            Do iniciante ao Avançado
                                        </span>
                                        <h2 className="text-3xl">
                                            Cursos para todo mundo
                                        </h2>
                                        <p className="text-zinc-300">
                                            Se você está procurando aprender um
                                            novo idioma ou apenas aprimorar suas
                                            habilidades, eu tenho tudo o que
                                            você precisa. Ofereço uma ampla
                                            variedade de cursos para que você
                                            possa escolher o que é mais
                                            relevante para você. Além disso,
                                            garanto que meus cursos sejam
                                            divertidos e envolventes para que
                                            você não fique entediado.
                                        </p>
                                    </div>
                                    <div className="flex justify-center ">
                                        <img
                                            alt="No fluff"
                                            loading="lazy"
                                            width="997"
                                            height="657"
                                            decoding="async"
                                            data-nimg="1"
                                            className="md:w-full md:pt-28 lg:pt-16 xl:w-4/5"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697698941/feature-05_fmjvfh.webp"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
