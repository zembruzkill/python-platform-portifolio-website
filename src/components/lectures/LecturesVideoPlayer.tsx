export default function LecturesVideoPlayer({
    url,
    allow,
    autoplay,
}: {
    url: any
    allow: any
    autoplay: boolean
}) {
    return (
        <>
            <div className="relative bg-[#000000] pb-[44.50%] max-w-full">
                <iframe
                    className="absolute t-0 l-0 w-full h-full"
                    src={autoplay ? `${url}?autoplay=1` : url}
                    allow={allow}
                ></iframe>
            </div>
        </>
    )
}
