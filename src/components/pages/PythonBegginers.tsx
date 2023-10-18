import { redirect } from 'next/navigation'
import  Header  from "../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import Link from 'next/link';
import CourseHero from '../CourseHero';
import CourseVideo from '../CourseVideo';
import CourseFeatures from '../CourseFeatures';
import CourseContent from '../CourseContent';

export default function PythonBegginers() {

  return (
    <>
      {/* <Link href={`/courses/python-beginners/lectures`}>
        <button className='p-4 bg-blue-600 rounded-lg'>Lectures</button>
      </Link> */}
      <div className='bg-[#0D1224]'>
        <CourseHero />
        <CourseVideo />
        <CourseFeatures />
        <CourseContent />
      </div>
    </>
  )
}