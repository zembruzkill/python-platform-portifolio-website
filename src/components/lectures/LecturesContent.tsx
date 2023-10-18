import LecturesCourseName from './LecturesCourseName'
import LecturesModuleName from './LecturesModuleName'
import LecturesLectureName from './LecturesLectureName'
import LecturesVideoPlayer from './LecturesVideoPlayer'
import { redirect, useSearchParams } from 'next/navigation'
import LecturesBlockedLecture from './LecturesBlockedLecture'

import { FaGear, FaAngleRight, FaAngleLeft, FaList } from 'react-icons/fa6'

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import LecturesExtraContent from './LecturesExtraContent'
import LecturesPythonEditor from './LecturesPythonEditor'
import Link from 'next/link'
import Footer from '../layout/footers/Footer'

export default function LecturesContent({
    course,
    currentLecture,
    searchParams,
}: {
    course: any
    currentLecture: any
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}) {
    const menuParam = searchParams.menu

    let lecture = null
    let modules = null

    for (const module of course.lectures.modules) {
        for (const classe of module.classes) {
            if (classe.class_id === currentLecture) {
                lecture = classe
                modules = module
                break
            }
        }
        if (lecture) {
            break
        }
    }

    if (!lecture) {
        redirect('/404')
        return null
    }

    return (
        <>
            <header className="bg-[#0D1224] sticky text-white">
                <nav className=" mx-auto flex items-center justify-between bg-gray-300 border-b border-[#1C1836]">
                    <div className="flex min-w-30 w-1/5 border-r min-w-10 border-[#1C1836] justify-between pt-7 pb-6 pr-4 pl-4 gap-2">
                        <a href={course.href}>
                            <FaAngleLeft color="#FFFFFF" size={20} />
                        </a>
                        <div className="flex gap-2">
                            {/* <FaGear color="#FFFFFF" size={20} /> */}
                            <Link
                                href={
                                    menuParam === 'hidden'
                                        ? `?menu=show`
                                        : `?menu=hidden`
                                }
                            >
                                <FaList color="#FFFFFF" size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-4/5 justify-between p-4 gap-3">
                        <Image
                            className=""
                            src={logo}
                            alt="Logo of the website"
                            width={150}
                            height={150}
                        />
                        <div className="flex gap-3 ">
                            <button className="font-bold border border-[#1C1836] hover:border-white hover:text-zinc-400 rounded p-2 flex items-center">
                                <span>
                                    <FaAngleLeft />
                                </span>{' '}
                                <span className="hidden 2xl:block xl:block lg:block">
                                    Aula Anterior
                                </span>
                            </button>
                            <button className="font-bold bg-[#6432c7] hover:bg-[#7234EF] border border-[#A3A3A3] hover:border-white rounded p-2 flex items-center">
                                <span className="hidden 2xl:block xl:block lg:block">
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
            <div className="bg-[#0D1224]">
                <div className="mx-auto justify-between bg-gray-300 border-[#1C1836] 2xl:flex xl:flex lg:flex md:block">
                    <div
                        className={`bg-[#0D1224] w-full 2xl:w-1/5 xl:w-1/5 lg:w-1/5 min-w-75 border-r-1 border-[#1C1836] 2xl:h-full xl:h-full lg:h-full overflow-y-auto ${
                            menuParam === 'hidden' ? 'hidden' : 'block'
                        }`}
                    >
                        <LecturesCourseName courseName={course.name} />
                        {course.lectures.modules.map(
                            (module: any, index: number) => (
                                <div key={index}>
                                    <LecturesModuleName
                                        index={index}
                                        moduleName={module.name}
                                    />
                                    {module.classes.map(
                                        (classe: any, classIndex: number) => (
                                            <ul key={classIndex}>
                                                <li>
                                                    <LecturesLectureName
                                                        index={classIndex}
                                                        lectureName={
                                                            classe.name
                                                        }
                                                        lectureType={
                                                            classe.type
                                                        }
                                                        currentLecture={
                                                            classe.class_id ===
                                                            currentLecture
                                                        }
                                                        href={classe.class_id}
                                                    />
                                                </li>
                                            </ul>
                                        )
                                    )}
                                </div>
                            )
                        )}
                    </div>
                    <div
                        className={`${
                            menuParam === 'hidden'
                                ? 'w-full'
                                : 'lg:w-4/5 xl:w-4/5 2xl:w-4/5 '
                        } relative`}
                    >
                        <div>
                            {lecture.is_public && (
                                <div>
                                    <div>
                                        {lecture.type === 'video' && (
                                            <LecturesVideoPlayer
                                                url={lecture.href}
                                                autoplay={lecture.autoplay}
                                                allow={
                                                    'autoplay; fullscreen; picture-in-picture'
                                                }
                                            />
                                        )}
                                    </div>
                                    <div>
                                        {lecture.type === 'editor' && (
                                            <LecturesPythonEditor
                                                lecture={lecture}
                                            />
                                        )}
                                    </div>
                                    <LecturesExtraContent
                                        module={modules}
                                        lecture={lecture}
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            {!lecture.is_public && <LecturesBlockedLecture />}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
