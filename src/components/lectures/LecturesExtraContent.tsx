
import LecturesCourseName from './LecturesCourseName';
import LecturesModuleName from './LecturesModuleName';
import LecturesLectureName from './LecturesLectureName';
import LecturesVideoPlayer from './LecturesVideoPlayer';
import { redirect } from "next/navigation";
import LecturesBlockedLecture from "./LecturesBlockedLecture";

import { FaHouseChimney, FaGear, FaAngleRight, FaAngleLeft, FaListCheck } from "react-icons/fa6";

import Image from 'next/image';
import logo from '@/assets/logo.svg';

export default function LecturesExtraContent({module, lecture}: {module: any, lecture: any}) {

  return (
    <>
      <div className='p-4 text-white'>
        <h4 className='font-extralight uppercase'>{module.name}</h4>
        <h1 className='font-extralight text-title-xl'>{lecture.name}</h1>
        <div className='flex gap-2 items-center mb-8'>
          <p className='text-extralight'>Avaliações</p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <p className='text-title-xsm font-extralight'>(1)</p>
        </div>
        <div className='space-y-4'>
          <div>
            <h2 className='text-title-sm font-extralight pb-2'>Descrição do Conteúdo</h2>
            <p>{lecture.description}</p>
          </div>
          <div>
            <h2 className='text-title-sm font-extralight'>Material Extra</h2>
            <p>Material extra.</p>
          </div>
        </div>
      </div>
    </>
  );
}
