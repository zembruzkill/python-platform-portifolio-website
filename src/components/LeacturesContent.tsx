'use client'

import { useState } from 'react'

import { FaHouseChimney, FaGear, FaAngleRight, FaAngleLeft, FaVideo } from "react-icons/fa6";

export default function LecturesContent({course, currentLecture}: {course: any, currentLecture: any}) {

  return (
    <div className='bg-gradient-to-r from-[#0D1224] to-[#0D1224]'>
      <div className="mx-auto flex justify-between bg-gray-300 border-[#303030]">
        <div className="w-1/6 border-r-1 border-[#303030]">
          <div className=' flex text-white text-center justify-center font-bold text-title-ssm p-2 pt-6 pb-6'>
            {course.name}
          </div>
          <div className='bg-[#2D3045] flex text-white text-center justify-start font-bold text-title-sssm p-2 pt-4 pb-4'>
            1- Comece por Aqui (32m)
          </div>
          <div className=''>
            <form className=' text-white'>
              <a href='21332' className='p-4 hover:bg-[#000000] flex gap-4 items-center cursor-pointer transition duration-300 ease-in-out'>
                <span className="w-4 h-4 inline-block rounded-lg ring-2 ring-blue-500 bg-blue-500 bg-status-icon">
                &nbsp;
                </span>
                <FaVideo color="#434656" size={20} />
                <label> 1- What is Python (3:21)</label><br />
              </a>
              <a href='21305' className='p-4 hover:bg-[#000000] flex gap-4 items-center cursor-pointer transition duration-300 ease-in-out'>
                <span className="w-4 h-4 inline-block rounded-lg ring-2 ring-[#A3A3A3]">
                &nbsp;
                </span>
                <FaVideo color="#434656" size={20} />
                <label > 2- Installing Python (1:52)</label><br />
              </a>
            </form>
          </div>
        </div>
        <div className="w-5/6 bg-[#000000] relative"> {/* Adicione a classe "relative" aqui */}
          <div className="relative pb-[54.00%] max-w-full">
            <iframe
              className="absolute t-0 l-0 w-full h-full"
              src="https://player.vimeo.com/video/76979871"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
