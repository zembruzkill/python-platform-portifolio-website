import { redirect } from 'next/navigation'
import  Header  from "../../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import courses from '../../../../data/courses';

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
    <Header items={true}/>
    <div>{params.course}</div>
    <Footer/>
    </>
  )
}