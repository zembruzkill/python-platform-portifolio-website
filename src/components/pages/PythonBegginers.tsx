import { redirect } from 'next/navigation'
import Header from '../../components/layout/headers/Header'
import Footer from '@/components/layout/footers/Footer'

import Link from 'next/link'
import CourseHero from '../CourseHero'
import CourseVideo from '../CourseVideo'
import CourseFeatures from '../CourseFeatures'
import CourseContent from '../CourseContent'
import Iam from '../Iam'
import WhoIsThisFor from '../WhoIsThisFor'
import PriorKnowledge from '../PriorKnowledge'
import Testimonials from '../Testimonials'
import CourseOffer from '../CourseOffer'

export default function PythonBegginers() {
    return (
        <>
            <div className="bg-[#0D1224]">
                <CourseHero />
                <CourseVideo
                    src='https://example.com/video.mp4'
                    poster='https://res.cloudinary.com/doorwkexf/image/upload/v1697694128/yhrce7v3rzhklir8zeie_zdzeji.webp'
                />
                <CourseFeatures />
                <CourseContent />
                <WhoIsThisFor />
                <PriorKnowledge />
                <Iam />
                <Testimonials />
                <CourseOffer />
            </div>
        </>
    )
}
