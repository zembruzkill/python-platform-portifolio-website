export default function CourseVideo(props: any) {
    return (
        <>
            <div className="bg-[#0D1224] pb-12 p-3">
                <div className="mx-auto max-w-6xl">
                    <section className="flex flex-col mb-10 my-5">
                        <header className="my-12 mb-6 text-center">
                            <h2 className="text-3xl text-white">
                                Claro. Conciso. Compreensivo.
                            </h2>
                        </header>
                        <div className="flex flex-col items-center">
                            <p className="pl-2 pr-2 mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8 text-blue-200">
                                Cansado de juntar tutoriais desconexos ou lidar
                                com instrutores confusos e prolixos? Este curso
                                é para você! Ele é perfeitamente estruturado em
                                uma série de vídeos fáceis de acompanhar, em
                                porções pequenas, que abordam tanto a teoria
                                quanto a prática.
                            </p>
                        </div>
                        <div className="my-5 md:my-10">
                            <video
                                src={props.src}
                                poster={props.poster}
                            ></video>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
