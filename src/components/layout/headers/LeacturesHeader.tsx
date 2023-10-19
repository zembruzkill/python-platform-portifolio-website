import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../assets/logo.svg'

import {
    FaHouseChimney,
    FaGear,
    FaAngleRight,
    FaAngleLeft,
} from 'react-icons/fa6'

export default function LecturesHeader({ home }: { home: string }) {
    // onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="#A3A3A3"}

    return (
        <header className="bg-gradient-to-r from-[#0D1224] to-[#0D1224] sticky">
            <nav className=" mx-auto flex items-center justify-between bg-gray-300 border-b border-[#1C1836]">
                <div className="flex w-1/6 border-r border-[#1C1836] justify-between pt-7 pb-6 pr-4 pl-4">
                    <a href={home}>
                        <FaHouseChimney color="#A3A3A3" size={20} />
                    </a>
                    <FaGear color="#A3A3A3" size={20} />
                </div>
                <div className="flex w-5/6 justify-between p-4 gap-3">
                    <Image
                        className=""
                        src={logo}
                        alt="Logo of the website"
                        width={150}
                        height={150}
                    />
                    <div className="flex gap-3 ">
                        <button className="text-white font-bold border border-[#1C1836] hover:border-white hover:text-zinc-400 rounded p-2 flex items-center">
                            <span>
                                <FaAngleLeft />
                            </span>{' '}
                            <span className="2xl:block xl:block lg:block md:hidden sm:hidden xsm:hidden">
                                Aula Anterior
                            </span>
                        </button>
                        <button className="text-white font-bold bg-[#6432c7] hover:bg-[#7234EF] border border-[#A3A3A3] hover:border-white rounded p-2 flex items-center">
                            <span className="2xl:block xl:block lg:block md:hidden sm:hidden xsm:hidden">
                                Proxima Aula
                            </span>
                            <span>
                                <FaAngleRight />
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
