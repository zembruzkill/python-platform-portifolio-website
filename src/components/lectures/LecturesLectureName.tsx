import Link from "next/link";
import { FaVideo, FaLaptopCode } from "react-icons/fa6";

export default function LecturesLectureName({index, lectureName, lectureType, currentLecture, href }: {index: any, lectureName: any, lectureType: any, currentLecture: any, href: any}) {

  return (
    <>
    <div>
      {currentLecture && (
        <a href={href} className='text-white p-4 border border-[#1C1836] bg-[#000000] hover:bg-[#000000] flex gap-4 items-center cursor-pointer transition duration-300 ease-in-out'>
          <span className="w-4 h-4 min-w-10 min-h-10 rounded-lg ring-2 ring-[#434656] bg-blue-500 bg-status-icon" style={{ minWidth: '16px', minHeight: '16px', width: '16px', height: '16px' }}>
            &nbsp;
          </span>
          <div>
            {lectureType === 'video' ? (
              <FaVideo color="#434656" size={20} />
            ) : lectureType === 'editor' ? (
              <FaLaptopCode color="#434656" size={20} />
            ) : null}
          </div>
          <label>{index + 1} - {lectureName}</label><br />
        </a>
      )}
    </div>
    <div>
      {!currentLecture && (
        <Link href={href} className='text-zinc-300 p-4 border border-[#1C1836] hover:bg-[#000000] flex gap-4 items-center cursor-pointer transition duration-300 ease-in-out'>
          <span className="w-4 h-4 inline-block rounded-lg ring-2 ring-[#A3A3A3]" style={{ minWidth: '16px', minHeight: '16px', width: '16px', height: '16px' }}>
            &nbsp;
          </span>
          <div>
            {lectureType === 'video' ? (
              <FaVideo color="#434656" size={20} />
            ) : lectureType === 'editor' ? (
              <FaLaptopCode color="#434656" size={20} />
            ) : null}
          </div>
          <label >{index + 1} - {lectureName}</label><br />
        </Link>
      )}
    </div>
    </>
  );
}
