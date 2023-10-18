export default function CourseVideo() {
    return (
        <>
            <div className="bg-[#0D1224] pb-12">
                <div className="mx-auto max-w-6xl">
                    <section className="flex flex-col mb-10 my-5">
                        <header className="my-12 mb-6 text-center">
                            <h2 className="text-3xl text-white">
                                Clear. Concise. Comprehensive.
                            </h2>
                        </header>
                        <div className="flex flex-col items-center">
                            <p className="pl-2 pr-2 mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8 text-blue-200">
                                Tired of piecing together disconnected tutorials
                                or dealing with rambling, confusing instructors?
                                This course is for you! It's perfectly
                                structured into a series of bite-sized,
                                easy-to-follow videos that cover both theory and
                                practice.
                            </p>
                        </div>
                        <div className="my-5 md:my-10">
                            <video
                                src=""
                                poster="https://res.cloudinary.com/doorwkexf/image/upload/v1697512674/poster-video_ppjc9o.webp"
                            ></video>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
