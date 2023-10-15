'use client'

import { useState } from 'react'

import { FaHouseChimney, FaGear, FaAngleRight, FaAngleLeft, FaVideo } from "react-icons/fa6";

import LecturesHeader from '../layout/headers/LeacturesHeader';

import LecturesCourseName from './LecturesCourseName';
import LecturesModuleName from './LecturesModuleName';
import LecturesLectureName from './LecturesLectureName';
import LecturesVideoPlayer from './LecturesVideoPlayer';

export default function LecturesContent({course, currentLecture}: {course: any, currentLecture: any}) {

  console.log(course)

  return (
    <>
      <LecturesHeader home={course.href}/>
      <div className='bg-gradient-to-r from-[#0D1224] to-[#0D1224]'>
        <div className="mx-auto flex justify-between bg-gray-300 border-[#303030]">
          <div className="w-1/5 min-w-75 border-r-1 border-[#303030] h-screen">
            <LecturesCourseName courseName={course.name} />
            {course.lectures.modules.map((module: any, index: number) => (
              <div key={index}>
                <LecturesModuleName index={index} moduleName={module.name} />
                {module.classes.map((classe: any, classIndex: number) => (
                  <ul >
                    <li className=' text-white' key={classIndex}>
                      <LecturesLectureName index={classIndex} lectureName={classe.name} currentLecture={true}/>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="w-4/5 relative">
            <LecturesVideoPlayer url={'https://player.vimeo.com/video/76979871?autoplay=1'} allow={"autoplay; fullscreen; picture-in-picture"}/>
            <div className='text-white'>
              Extra Content
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
