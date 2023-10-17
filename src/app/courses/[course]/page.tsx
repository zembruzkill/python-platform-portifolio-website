import { redirect } from 'next/navigation'
import  Header  from "../../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import courses from '../../../../data/courses';
import Link from 'next/link';

export default function SingleCourse({ params }: { params: { course: string } }) {

  let foundCourse = null

  courses.forEach(course => {
    if (course.href === "/courses/" + params.course) {
      foundCourse = course
    }
  })

  if (!foundCourse) {
    redirect('/404');
    return null;
  }

  return (
    <>
      <div className='bg-[#0D1224]'>
        <div className="bg-grid-background">
          <Header items={true}/>
          <div className='text-white'>
            <Link href={`/courses/${params.course}/lectures`}>
              <button className='p-4 bg-blue-600 rounded-lg'>Lectures</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}