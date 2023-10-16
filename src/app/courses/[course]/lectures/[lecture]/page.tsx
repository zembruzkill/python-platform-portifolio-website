import { redirect } from "next/navigation";

import courses from "../../../../../../data/courses";
import LecturesContent from "@/components/lectures/LecturesContent";
import { getServerSession } from "next-auth";
import { config, loginIsRequiredClientSide } from "../../../../../../lib/auth";

export default async function SingleLecture({ params }: { params: { lecture: string, course: string } }) {

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
      <LecturesContent course={foundCourse} currentLecture={params.lecture}/>
    </>
  )
}