'use client'

import { useState } from 'react'

export default function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(1)

    const visibleDeposits = 3

    const testimonials = [
        {
            avatar: '',
            quote: 'Este curso de Python foi incrível! Aprendi muito e agora me sinto confiante para programar em Python. O conteúdo é rico em exemplos práticos, o que tornou o aprendizado mais fácil e divertido.',
            student: 'Ana Silva',
        },
        {
            avatar: '',
            quote: 'O instrutor é muito experiente e as aulas são bem estruturadas. Recomendo este curso a todos que desejam aprender Python. Além disso, a comunidade de alunos é muito ativa e útil.',
            student: 'Lucas Oliveira',
        },
        {
            avatar: '',
            quote: 'Nunca pensei que poderia aprender programação, mas este curso tornou tudo mais simples e divertido. Obrigado! A plataforma do curso é fácil de usar e o suporte é excelente.',
            student: 'Carlos Santos',
        },
        {
            avatar: '',
            quote: 'Achei o curso de Python muito prático e útil para minha carreira. Agora estou aplicando o que aprendi no trabalho, e os resultados têm sido surpreendentes.',
            student: 'Larissa Souza',
        },
        {
            avatar: '',
            quote: 'Os laboratórios práticos deste curso são excelentes. Eles me deram a oportunidade de praticar minhas habilidades em Python, o que fez toda a diferença no meu aprendizado.',
            student: 'Rafael Barbosa',
        },
        {
            avatar: '',
            quote: 'O suporte da equipe do curso foi rápido e eficaz. Eles responderam a todas as minhas dúvidas prontamente, o que me fez sentir apoiado ao longo do curso.',
            student: 'Isabel Pereira',
        },
    ]

    const numTestimonials = testimonials.length

    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % numTestimonials)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prevIndex) =>
            prevIndex === 0 ? numTestimonials - 1 : prevIndex - 1
        )
    }

    return (
        <>
            <div className="mx-auto max-w-6xl pb-12 p-4">
                <section className="flex flex-col">
                    <header className="my-12 mb-6 text-center">
                        <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">
                            Testemunhos
                        </p>
                        <h2 className="text-white text-3xl">
                            O que meus alunos dizem
                        </h2>
                    </header>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-zinc-200">
                        <div className="flex items-center justify-center">
                            <span className="font-bold mx-1 text-lg"></span>
                            <span className="mx-2 flex items-center">
                                <img
                                    alt="Stars"
                                    data-testid="trust-stars"
                                    fetchPriority="high"
                                    width="90"
                                    height="30"
                                    decoding="async"
                                    data-nimg="1"
                                    className="inline"
                                    src="https://res.cloudinary.com/doorwkexf/image/upload/v1697605147/4.5.fbc139f3_jzsoek.svg"
                                ></img>
                            </span>
                        </div>
                        <div>
                            <span className="font-bold mr-1">4.7</span>
                            de 5 baseado em{' '}
                            <a target="_blank" href="">
                                <span className="font-bold">256</span>{' '}
                                avaliações
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-10">
                        <div className="overflow-hidden md:max-w-[90%] lg:max-w-4xl mx-auto text-white">
                            <div className="flex lg:ml-2 mb-10 translate-x-222 lg:translate-x-55 xl:translate-x-55 2xl:translate-x-55">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className={`lg:pl-2 min-w-0 w-full md:w-full lg:w-1/2 flex-shrink-0 flex-grow-0 ${
                                            currentTestimonial === index
                                                ? 'opacity-100'
                                                : 'opacity-30'
                                        }`}
                                        style={{
                                            transform: `translate3d(${
                                                currentTestimonial * -100
                                            }%, 0px, 0px)`,
                                        }}
                                    >
                                        <div className="sm:inline-block sm:w-full">
                                            <figure className="rounded-2xl h-full bg-[#12172A] p-5 lg:p-11 ">
                                                <blockquote>
                                                    <p className="text-base font-extralight pb-4 pt">
                                                        {testimonial.quote}
                                                    </p>
                                                </blockquote>
                                                <div className="flex justify-center -translate-y-[1px] pb-4">
                                                    <div className="w-3/4">
                                                        <div className="flex flex-row">
                                                            <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                                                            <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <figcaption className="flex items-center gap-x-4">
                                                    <img
                                                        alt="Federico Figueredo"
                                                        loading="lazy"
                                                        width="40"
                                                        height="40"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className={`h-10 w-10 rounded-full bg-[#12172A] ${
                                                            !testimonial.avatar
                                                                ? 'hidden'
                                                                : 'block'
                                                        }`}
                                                        src={testimonial.avatar}
                                                    ></img>
                                                    <div>
                                                        <div className="font-semibold text-gray-800 text-sm">
                                                            {
                                                                testimonial.student
                                                            }
                                                        </div>
                                                        <img
                                                            alt="Stars"
                                                            data-testid="trust-stars"
                                                            fetchPriority="high"
                                                            width="90"
                                                            height="30"
                                                            decoding="async"
                                                            data-nimg="1"
                                                            className="inline"
                                                            src="https://res.cloudinary.com/doorwkexf/image/upload/v1697658399/5_stars_mwkgn4.svg"
                                                        ></img>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            className="invisible md:visible z-10 bg-violet-500 text-white rounded-full absolute flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 left-1"
                            onClick={() => prevTestimonial()}
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg>
                        </button>
                        <button
                            className="invisible md:visible z-10 bg-violet-500 text-white rounded-full absolute flex items-center justify-center top-1/2 -translate-y-1/2 cursor-pointer w-8 h-8 right-1"
                            onClick={() => nextTestimonial()}
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                            </svg>
                        </button>
                        <div className="z-10 absolute bottom-0 left-0 right-0 mt-5 flex items-center justify-center">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    onClick={() => setCurrentTestimonial(index)}
                                    key={index}
                                    className={`w-3 h-3 flex items-center mx-1 bg-violet-300 rounded-full opacity-100 ${
                                        currentTestimonial === index
                                            ? 'opacity-100'
                                            : 'opacity-30'
                                    }`}
                                    type="button"
                                ></button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
