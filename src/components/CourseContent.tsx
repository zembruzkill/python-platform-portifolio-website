export default function CourseContent() {
    return (
        <>
            <div className="bg-[#0D1224]">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="md:mx-4">
                            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-green-100 dark:bg-blue-800">
                                <div className="text-green-700 dark:text-green-300">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        strokeLinejoin="round"
                                        height="25"
                                        width="25"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                                        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                                        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                                        <path d="M11 6l9 0"></path>
                                        <path d="M11 12l9 0"></path>
                                        <path d="M11 18l9 0"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="text-green-700 dark:text-green-300 mb-3 inline-block font-medium md:font-semibold">
                                A perfeita estrutura do curso
                            </span>
                            <h2 className="text-3xl text-white">
                                Conteúdos do Curso
                            </h2>
                            <p className="text-zinc-300">
                                12 Horas . 13 Módulos. 200 Aulas
                            </p>
                            <div className="py-6 max-w-2xl">
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Getting Started
                                            <span className="ml-1 text-base">
                                                (33m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                What is Python
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Installing Python
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Python Interpreter
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Code Editors
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Your First Python Program
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Python Extension
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Linting Python Code
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Formatting Python Code
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Running Python Code
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Python Implementations
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                How Python Code is Executed
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Quiz
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Follow Me Around
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Learning Paths
                                            </span>
                                            <a
                                                className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                                role="button"
                                                href="/courses/python-beginners/lectures/"
                                            >
                                                Preview
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Primitive Types
                                            <span className="ml-1 text-base">
                                                (35m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Variables
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 04s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Variable Names
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 02s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Strings
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 30s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Escape Sequences
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 40s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Formatted Strings
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 08s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                String Methods
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 54s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Numbers
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 46s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Numbers
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 09s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Type Conversion
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 04s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Quiz
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 43s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Control Flow
                                            <span className="ml-1 text-base">
                                                (39m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Comparison Operators
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 04s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Conditional Statements
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 09s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Ternary Operator
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 09s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Logical Operators
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 02s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Short-circuit Evaluation
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 06s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Chaining Comparison Operators
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 22s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Quiz
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 43s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                For Loops
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 38s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                For..Else
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 46s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Nested Loops
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 44s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Iterables
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 08s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                While Loops
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 59s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Infinite Loops
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 37s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Exercise
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 05s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Functions
                                            <span className="ml-1 text-base">
                                                (41m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Defining Functions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 24s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Arguments
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 20s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Types of Functions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 02s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Keyword Arguments
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 00s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Default Arguments
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 35s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                xargs
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 15s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                xxargs
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 20s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Scope
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 09s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Debugging
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 50s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                VSCode Coding Tricks - Windows
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 21s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                VSCode Coding Tricks - Mac
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 49s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Exercise
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 29s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Solution
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 41s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                A Quick Note
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Data Structures
                                            <span className="ml-1 text-base">
                                                (1h)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Lists
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 54s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Accessing Items
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 13s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                List Unpacking
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 51s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Looping over Lists
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 54s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Adding or Removing Items
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 56s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Finding Items
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 28s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Sorting Lists
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 35s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Lambda Functions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 49s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Map Function
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 25s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Filter Function
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                List Comprehensions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 10s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Zip Function
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 49s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Stacks
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 24s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Queues
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 50s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Tuples
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 02s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Swapping Variables
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 37s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Arrays
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 11s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Sets
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 03s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Dictionaries
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 24s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Dictionary Comprehensions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 19s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Generator Expressions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 51s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Unpacking Operator
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Exercise
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 21s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Exceptions
                                            <span className="ml-1 text-base">
                                                (23m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Exceptions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 16s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Handling Exceptions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 10s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Handling Different Exceptions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Cleaning Up
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 57s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                The With Statement
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 07s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Raising Exceptions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 21s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Cost of Raising Exceptions
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 41s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Classes
                                            <span className="ml-1 text-base">
                                                (1h)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Classes
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 35s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Creating Classes
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 45s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Constructors
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 37s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Class vs Instance Attributes
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 58s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Class vs Instance Methods
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Magic Methods
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 13s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Comparing Objects
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 11s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Performing Arithmetic Operations
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 31s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Making Custom Containers
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 55s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Private Members
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 40s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Properties
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                7m 30s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Inheritance
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 23s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                The Object Class
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 23s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Method Overriding
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 14s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Multi-level Inheritance
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 42s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Multiple Inheritance
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 22s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                A Good Example of Inheritance
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 31s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Abstract Base Classes
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 50s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Polymorphism
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 56s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Duck Typing
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 50s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Extending Built-in Types
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 26s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Data Classes
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 36s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Modules
                                            <span className="ml-1 text-base">
                                                (18m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Creating Modules
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 16s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Compiled Python Files
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 19s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Module Search Path
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 35s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Packages
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 27s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Sub-packages
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 01s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Intra-package References
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 36s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                The dir Function
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 39s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Executing Modules as Scripts
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 55s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Python Standard Library
                                            <span className="ml-1 text-base">
                                                (1h)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Python Standard Library
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                0m 51s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working With Paths
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 48s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Directories
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 14s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Files
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 59s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Zip Files
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 15s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with CSV Files
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 50s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with JSON Files
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 57s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with a SQLite Database
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 10s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Timestamps
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 24s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with DateTimes
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Time Deltas
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 41s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Generating Random Values
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 09s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Opening the Browser
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 12s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Sending Emails
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 48s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Templates
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 53s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Command-line Arguments
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 54s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Running External Programs
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                8m 06s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Python Package Index
                                            <span className="ml-1 text-base">
                                                (46m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Pypi
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 49s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Pip
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 23s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Virtual Environments
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 04s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Pipenv
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 40s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Virtual Environments in VSCode
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 49s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Pipfile
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 48s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Managing Dependencies
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 28s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Publishing Packages
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                8m 22s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Docstrings
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 48s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Pydoc
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 06s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Popular Python Packages
                                            <span className="ml-1 text-base">
                                                (1h)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Introduction
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 41s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                What are APIs
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 36s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Yelp API
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 51s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Searching for Businesses
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 54s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Hiding API Keys
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Sending Text Messages
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 02s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Web Scraping
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 06s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Browser Automation
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                11m 28s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with PDFs
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 18s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Working with Excel Spreadsheets
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 52s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Command Query Separation
                                                Principle
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 39s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                NumPy
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 05s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Building Web Applications with
                                            Django
                                            <span className="ml-1 text-base">
                                                (2h)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Introduction
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 43s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Your First Django Project
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 11s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Your First App
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 41s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Views
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                7m 59s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Models
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 57s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Migrations
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                8m 00s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Changing the Models
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 38s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Admin
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 29s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Customizing the Admin
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 55s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Database Abstraction API
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 52s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Templates
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                10m 23s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Adding Bootstrap
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 19s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Customizing the Layout
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 23s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Sharing a Template Across
                                                Multiple Apps
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 48s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Url Parameters
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 37s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Getting a Single Object
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 48s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Raising 404 Errors
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 51s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Referencing Urls
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 47s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Creating APIs
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 26s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Adding the Homepage
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 27s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Getting Ready to Deploy
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                9m 44s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Deployment
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                7m 59s
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5">
                                    <header className="flex cursor-pointer">
                                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                                            Machine Learning with Python
                                            <span className="ml-1 text-base">
                                                (48m)
                                            </span>
                                        </h3>
                                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </span>
                                    </header>
                                    <ul className="overflow-hidden transition-all duration-500 ease-in-out max-h-none opacity-100">
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                What is Machine Learning
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                1m 58s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Machine Learning in Action
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                2m 47s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Libraries and Tools
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 54s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Importing a Data Set
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 21s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Jupyter Shortcuts
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                5m 26s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                A Real Machine Learning Problem
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 17s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Preparing the Data
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 05s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Learning and Predicting
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                4m 04s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Calculating the Accuracy
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 20s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Persisting Models
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                3m 14s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Visualizing a Decision Tree
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5">
                                                6m 26s
                                            </span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                What to Learn Next
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5"></span>
                                        </li>
                                        <li className="flex items-center mb-3 text-base">
                                            <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span className="flex-grow text-zinc-300">
                                                Thank You
                                            </span>
                                            <span className="text-zinc-300 mx-2 whitespace-nowrap md:mx-5"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
