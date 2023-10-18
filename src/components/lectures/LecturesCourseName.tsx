export default function LecturesCourseName({
    courseName,
}: {
    courseName: any
}) {
    return (
        <>
            <div className=" flex text-white text-center justify-center font-bold text-title-ssm p-2 pt-6 pb-6">
                {courseName}
            </div>
        </>
    )
}
