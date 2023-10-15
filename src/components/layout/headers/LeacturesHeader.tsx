'use client'

import { useState } from 'react'

import { FaHouseChimney, FaGear, FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function LecturesHeader(props: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-gradient-to-r from-[#0D1224] to-[#0D1224] sticky'>
      <nav className=" mx-auto flex items-center justify-between bg-gray-300 border-b border-[#303030]">
        <div className="flex w-1/6 border-r border-[#303030] justify-between pt-7 pb-6 pr-4 pl-4">
          <FaHouseChimney color="#A3A3A3" size={20} />
          <FaGear color="#A3A3A3" size={20} />
        </div>
        <div className="flex w-5/6 justify-end gap-3 mr-4">
          <button className='text-white font-bold border border-[A3A3A3] rounded p-2 flex items-center'><span><FaAngleLeft /></span> Aula Anterior</button>
          <button className='text-white font-bold bg-[#7234EF] border border-[A3A3A3] rounded p-2 flex items-center'>Finalizar e Seguir <span><FaAngleRight /></span></button>
        </div>
      </nav>
    </header>
  )
}
