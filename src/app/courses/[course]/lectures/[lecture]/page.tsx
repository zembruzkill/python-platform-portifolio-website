import { redirect } from "next/navigation";
import LecturesHeader from "@/components/layout/headers/LeacturesHeader";

import courses from "../../../../../../data/courses";
import LecturesContent from "@/components/LeacturesContent";

export default function SingleLecture({ params }: { params: { lecture: string, course: string } }) {

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
      <LecturesHeader/>
      <LecturesContent course={foundCourse} currentLecture={params.lecture}/>
    </>
  )
}