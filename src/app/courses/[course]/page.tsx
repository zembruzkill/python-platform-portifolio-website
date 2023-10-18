import { redirect } from 'next/navigation'
import  Header  from "../../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import courses from '../../../../data/courses';
import Link from 'next/link';
import PythonBegginers from '@/components/pages/PythonBegginers';

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
      {params.course === 'python-beginners' && <PythonBegginers />}
      <Footer/>
    </>
  )
}