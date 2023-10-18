import { redirect } from 'next/navigation'

import courses from '../../../../../data/courses'

export default async function Lectures({
    params,
}: {
    params: { lecture: string; course: string }
}) {
    let foundCourse = null

    for (const course of courses) {
        if (course.href === '/courses/' + params.course) {
            foundCourse = course

            if (course.lectures) {
                for (const module of course.lectures.modules) {
                    for (const classe of module.classes) {
                        if (classe.class_id) {
                            redirect(
                                '/courses/' +
                                    params.course +
                                    '/lectures/' +
                                    classe.class_id
                            )
                            return null
                        }
                    }
                }
            }
        }
    }

    if (!foundCourse) {
        redirect('/404')
        return null
    }

    return <></>
}
