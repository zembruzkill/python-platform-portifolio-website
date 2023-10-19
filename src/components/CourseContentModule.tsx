'use client'

import { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp, FaVideo, FaLaptopCode } from 'react-icons/fa6'

export default function CourseContentModule(props: any) {
    const [isListOpen, setIsListOpen] = useState(props.isListOpen)

    const toggleList = () => {
        setIsListOpen(!isListOpen)
    }
    return (
        <>
            <div className="max-w-2xl p-3">
                <div className="">
                    <header
                        className="flex cursor-pointer"
                        onClick={toggleList}
                    >
                        <h3 className="text-lg text-white font-semibold mb-2 inline flex-grow">
                            {props.module.name}
                            <span className="ml-1 text-base">
                                ({props.module.duration})
                            </span>
                        </h3>
                        <span className="w-5 h-5 text-zinc-300 inline-block transition-transform duration-300 ease-out rotate-180">
                            {isListOpen ? <FaAngleDown /> : <FaAngleUp />}
                        </span>
                    </header>
                    <ul
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isListOpen
                                ? 'max-h-none opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        {props.module.classes.map(
                            (
                                lesson: {
                                    type: string
                                    name: string
                                    duration: string
                                },
                                index: number
                            ) => (
                                <li
                                    className="flex items-center mb-3 text-base"
                                    key={index}
                                >
                                    <span className="flex-shrink-0 justify-start w-4 h-4 mr-3 text-zinc-300">
                                        {lesson.type === 'video' ? (
                                            <FaVideo />
                                        ) : (
                                            <FaLaptopCode />
                                        )}
                                    </span>
                                    <span className="flex-grow text-zinc-300">
                                        {lesson.name}
                                    </span>
                                    {(props.preview && (
                                        <a
                                            className="group inline-block px-3 py-1 text-xs no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
                                            role="button"
                                            href={
                                                '/courses/python-beginners/lectures/'
                                            }
                                        >
                                            Aula Grátis
                                        </a>
                                    )) || (
                                        <p className="text-zinc-300">
                                            {lesson.duration}
                                        </p>
                                    )}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
