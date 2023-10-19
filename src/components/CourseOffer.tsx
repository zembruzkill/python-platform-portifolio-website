export default function CourseOffer() {
    return (
        <>
            <div className="bg-[#0D1224] pb-12">
                <div className="mx-auto max-w-6xl p-3">
                    <section
                        className="flex flex-col mb-10 my-5"
                        data-testid="course-purchase-options"
                    >
                        <header className="my-12 mb-6 text-center">
                            <h2 className="text-3xl text-white">
                                Acelere sua jornada como Programador
                            </h2>
                        </header>
                        <div className="flex flex-col items-center">
                            <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8 text-zinc-300">
                                Não desperdice seu valioso tempo juntando
                                tutoriais desconexos de diferentes fontes.
                                Matricule-se agora e adquira as habilidades e o
                                conhecimento de que você precisa para se
                                destacar, tudo em um só lugar.
                            </p>
                            <div className="grid gap-20 md:grid-cols-2 md:gap-5 w-full mt-20 mb-10">
                                <div
                                    className="relative w-full md:max-w-[450px]"
                                    role="enrollment-card"
                                >
                                    <div className="absolute -top-10 -left-3 md:-top-8 md:-left-3 lg:-left-10 lg:-top-12 w-24 z-10">
                                        <img
                                            alt="Money-back guarantee"
                                            data-testid="guarantee"
                                            loading="lazy"
                                            width="130"
                                            height="129"
                                            decoding="async"
                                            data-nimg="1"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697687564/money-back.160ae298_nowuc5.svg"
                                        ></img>
                                    </div>
                                    <div className="border border-[#262B42]  transition-colors duration-200 ease-in-out overflow-hidden rounded-lg relative bg-[#12172A]">
                                        <div className="w-full flex justify-center">
                                            <div
                                                id="blur"
                                                className="absolute w-full bg-gradient-to-r from-transparent via-violet-900 to-transparent h-1"
                                            ></div>
                                            <div className="w-60 h-60 bg-violet-900 rounded-full absolute filter blur-3xl opacity-30"></div>
                                            <div className="w-3/4">
                                                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
                                            </div>
                                            <div className="absolute top-0 -translate-y-1/3 w-3/4">
                                                <div className="bg-violet-100 rounded-full filter blur-3xl"></div>
                                            </div>
                                        </div>
                                        <div className="px-6 md:px-8 lg:px-12 py-12 flex flex-col items-center">
                                            <div
                                                className="flex flex-col items-center"
                                                data-testid="price-tag"
                                            >
                                                <div>
                                                    <span className="font-bold text-4xl text-pink-500">
                                                        R$79,90/m
                                                    </span>
                                                </div>
                                                <div className="uppercase text-sm font-medium tracking-wider text-white">
                                                    Todos os Cursos
                                                </div>
                                            </div>
                                            <div className="mt-10 w-full">
                                                <ul className="mb-8 space-y-4 text-left">
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Do básico ao
                                                            Avançado
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Amigável para
                                                            Iniciantes
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            +40 horas de vídeo
                                                            HD
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Exercícios Práticos
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Pratique no Celular
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Certificado de
                                                            Conclusão
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Acesso enquanto
                                                            Inscrito
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Estude no seu Ritmo
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600  transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="#"
                                            >
                                                Assine agora e Economize
                                            </a>
                                            <p className="my-2 text-sm font-semibold text-white">
                                                Cancele quando Quiser!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative w-full md:max-w-[450px]"
                                    role="enrollment-card"
                                >
                                    <div className="absolute -top-10 -left-3 md:-top-8 md:-left-3 lg:-left-10 lg:-top-12 w-24 z-10">
                                        <img
                                            alt="Money-back guarantee"
                                            data-testid="guarantee"
                                            loading="lazy"
                                            width="130"
                                            height="129"
                                            decoding="async"
                                            data-nimg="1"
                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697687564/money-back.160ae298_nowuc5.svg"
                                        ></img>
                                    </div>
                                    <div className="border border-[#262B42]  transition-colors duration-200 ease-in-out overflow-hidden rounded-lg relative bg-[#12172A]">
                                        <div className="w-full flex justify-center">
                                            <div
                                                id="blur"
                                                className="absolute w-full bg-gradient-to-r from-transparent via-violet-900 to-transparent h-1"
                                            ></div>
                                            <div className="w-60 h-60 bg-violet-900 rounded-full absolute filter blur-3xl opacity-30"></div>
                                            <div className="w-3/4">
                                                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
                                            </div>
                                            <div className="absolute top-0 -translate-y-1/3 w-3/4">
                                                <div className="bg-violet-100 rounded-full filter blur-3xl"></div>
                                            </div>
                                        </div>
                                        <div className="px-6 md:px-8 lg:px-12 py-12 flex flex-col items-center">
                                            <div
                                                className="flex flex-col items-center"
                                                data-testid="price-tag"
                                            >
                                                <div>
                                                    <span className="font-bold text-4xl text-pink-500 ">
                                                        R$397,90
                                                    </span>
                                                </div>
                                                <div className="uppercase text-sm font-medium tracking-wider text-white">
                                                    Apenas este curso
                                                </div>
                                            </div>
                                            <div className="mt-10 w-full">
                                                <ul className="mb-8 space-y-4 text-left">
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Do básico ao
                                                            avançado
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Amigável para
                                                            iniciantes
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            12 horas de video HD
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Exercícios Práticos
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Pratique no Celular
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Certificado de
                                                            Conclusão
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Acesso Vitalício
                                                        </span>
                                                    </li>
                                                    <li className="flex flex-row items-start space-x-3">
                                                        <div>
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 16 16"
                                                                className="w-5 h-5 inline flex-shrink-0"
                                                                color="#fff"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-title-sm font-lg md:font-semibold text-blue-100">
                                                            Estude no seu Ritmo
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <a
                                                className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600  transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href=""
                                            >
                                                Assinar Agora
                                            </a>
                                            <p className="my-2 text-sm font-semibold text-white">
                                                Experimente agora sem riscos!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p className="text-white">
                                Looking for a team license?{' '}
                                <a href="#">Contact us</a>
                            </p> */}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
