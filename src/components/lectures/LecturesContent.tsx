'use client'

import { useState } from 'react';

import LecturesCourseName from './LecturesCourseName';
import LecturesModuleName from './LecturesModuleName';
import LecturesLectureName from './LecturesLectureName';
import LecturesVideoPlayer from './LecturesVideoPlayer';
import { redirect } from "next/navigation";
import LecturesBlockedLecture from "./LecturesBlockedLecture";

import { FaHouseChimney, FaGear, FaAngleRight, FaAngleLeft, FaListCheck } from "react-icons/fa6";

import Image from 'next/image';
import logo from '@/assets/logo.svg';
import LecturesExtraContent from './LecturesExtraContent';
import LecturesPythonEditor from './LecturesPythonEditor';

export default function LecturesContent({course, currentLecture}: {course: any, currentLecture: any}) {

  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  let lecture = null;
  let modules = null;

  for (const module of course.lectures.modules) {
    for (const classe of module.classes) {
      if (classe.class_id === currentLecture) {
        lecture = classe;
        modules = module;
        break;
      }
    }
    if (lecture) {
      break;
    }
  }

  if (!lecture.class_id) {
    redirect('/404');
    return null;
  }

  return (
    <>
      <header className='bg-gradient-to-r from-[#0D1224] to-[#0D1224] sticky text-white'>
        <nav className=" mx-auto flex items-center justify-between bg-gray-300 border-b border-[#1C1836]">
          <div className="flex min-w-30 w-1/5 border-r min-w-10 border-[#1C1836] justify-between pt-7 pb-6 pr-4 pl-4 gap-2">
            <a href={course.href}>
              <FaHouseChimney color="#A3A3A3" size={20} />
            </a>
            <div className='flex gap-2'>
              <FaGear color="#A3A3A3" size={20} />
              <button
                onClick={toggleVisibility}
              >
                <FaListCheck color="#A3A3A3" size={20} />
              </button>
            </div>
          </div>
          <div className="flex w-4/5 justify-between p-4 gap-3">
            <Image
              className=''
              src={logo}
              alt="Logo of the website"
              width={150}
              height={150}
            />
            <div className='flex gap-3 '>
              <button className='font-bold border border-[#1C1836] hover:border-white hover:text-zinc-400 rounded p-2 flex items-center'><span><FaAngleLeft /></span> <span className='hidden 2xl:block xl:block lg:block'>Aula Anterior</span></button>
              <button className='font-bold bg-[#6432c7] hover:bg-[#7234EF] border border-[#A3A3A3] hover:border-white rounded p-2 flex items-center'><span className='hidden 2xl:block xl:block lg:block'>Proxima Aula</span><span><FaAngleRight /></span></button>
            </div>
          </div>
        </nav>
      </header>
      <div className='bg-gradient-to-r from-[#0D1224] to-[#0D1224]'>
        <div className="mx-auto justify-between bg-gray-300 border-[#1C1836] 2xl:flex xl:flex lg:flex md:block">
          <div className={`w-full 2xl:w-1/5 xl:w-1/5 lg:w-1/5 min-w-75 border-r-1 border-[#1C1836] 2xl:h-screen xl:h-screen lg:h-screen overflow-y-auto ${isHidden ? 'hidden' : 'block'}`}>
            <LecturesCourseName courseName={course.name} />
            {course.lectures.modules.map((module: any, index: number) => (
              <div key={index}>
                <LecturesModuleName index={index} moduleName={module.name} />
                {module.classes.map((classe: any, classIndex: number) => (
                  <ul key={classIndex}>
                    <li>
                      <LecturesLectureName index={classIndex} lectureName={classe.name} lectureType={classe.type} currentLecture={classe.class_id === currentLecture} href={classe.class_id}/>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className={`${isHidden ? 'w-full' : 'lg:w-4/5 xl:w-4/5 2xl:w-4/5 '} relative`}>
            <div>
              {lecture.is_public && (
                <div>
                  <div>
                    {lecture.type === 'video' && (
                    <LecturesVideoPlayer url={lecture.href} autoplay={lecture.autoplay} allow={"autoplay; fullscreen; picture-in-picture"}/>
                    
                    )}
                  </div>
                  <div>
                  {lecture.type === 'editor' && (
                    <LecturesPythonEditor lecture={lecture} />
                    )}
                  </div>
                  <LecturesExtraContent module={modules} lecture={lecture} />
                </div>
              )}
            </div>
            <div>
            {!lecture.is_public && (
                <LecturesBlockedLecture />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
