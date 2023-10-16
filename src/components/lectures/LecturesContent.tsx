import LecturesHeader from '../layout/headers/LeacturesHeader';

import LecturesCourseName from './LecturesCourseName';
import LecturesModuleName from './LecturesModuleName';
import LecturesLectureName from './LecturesLectureName';
import LecturesVideoPlayer from './LecturesVideoPlayer';
import { redirect } from "next/navigation";
import LecturesBlockedLecture from "./LecturesBlockedLecture";

export default function LecturesContent({course, currentLecture}: {course: any, currentLecture: any}) {

  let isHidden = false; // Defina uma variável para controlar a visibilidade da div

  // Função para alternar a visibilidade da div
  const toggleVisibility = () => {
    isHidden = !isHidden;
    const div = document.getElementById('your-div'); // Selecione a div pelo ID
    if (div) {
      div.style.display = isHidden ? 'none' : 'block';
    }
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
      <LecturesHeader home={course.href}/>
      <div className='bg-gradient-to-r from-[#0D1224] to-[#0D1224]'>
        <div className="mx-auto justify-between bg-gray-300 border-[#1C1836] 2xl:flex xl:flex lg:flex md:block">
        <div className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-full sm:w-full xsm:w-full min-w-75 border-r-1 border-[#1C1836] 2xl:h-screen xl:h-screen lg:h-screen overflow-y-auto">
          <LecturesCourseName courseName={course.name} />
          {course.lectures.modules.map((module: any, index: number) => (
            <div key={index}>
              <LecturesModuleName index={index} moduleName={module.name} />
              {module.classes.map((classe: any, classIndex: number) => (
                <ul key={classIndex}>
                  <li>
                    <LecturesLectureName index={classIndex} lectureName={classe.name} currentLecture={classe.class_id === currentLecture} href={classe.class_id}/>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
          <div className="xsm:w-full sm:w-full w-4/5 relative border-white">
            <div>
              {lecture.is_public && (
                <div>
                  <LecturesVideoPlayer url={lecture.href} allow={"autoplay; fullscreen; picture-in-picture"}/>
                  <div className='p-4'>
                    <p className='text-white'> Extra Content </p>
                  </div>
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
