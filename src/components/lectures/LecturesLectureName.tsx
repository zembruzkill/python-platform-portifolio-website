import { FaVideo } from "react-icons/fa6";

export default function LecturesLectureName({index, lectureName, currentLecture }: {index: any, lectureName: any, currentLecture: any}) {

  return (
    <>
    <div>
      {currentLecture && (
        <a href='21332' className='p-4 border border-[#1C1836] hover:bg-[#000000] flex gap-4 items-center cursor-pointer transition duration-300 ease-in-out'>
          <span className="w-4 h-4 min-w-10 min-h-10 rounded-lg ring-2 ring-yellow-500 bg-blue-500 bg-status-icon" style={{ minWidth: '16px', minHeight: '16px', width: '16px', height: '16px' }}>
            &nbsp;
          </span>
          <FaVideo color="#434656" size={20} />
          <label>{index + 1} - {lectureName}</label><br />
        </a>
      )}
    </div>
    <div>
      {!currentLecture && (
        <a href='21305' className='p-4 border border-[#1C1836] hover:bg-[#000000] flex gap-4 items-center cursor-pointer transition duration-300 ease-in-out'>
          <span className="w-4 h-4 inline-block rounded-lg ring-2 ring-[#A3A3A3]" style={{ minWidth: '16px', minHeight: '16px', width: '16px', height: '16px' }}>
            &nbsp;
          </span>
          <FaVideo color="#434656" size={20} />
          <label >{index + 1} - {lectureName}</label><br />
        </a>
      )}
    </div>
    </>
  );
}
