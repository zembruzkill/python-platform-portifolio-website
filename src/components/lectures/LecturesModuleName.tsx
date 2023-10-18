export default function LecturesModuleName({
    moduleName,
    index,
}: {
    moduleName: any
    index: any
}) {
    return (
        <>
            <div className="bg-[#2D3045] flex text-white justify-start font-bold text-title-sssm p-2 pt-4 pb-4">
                {index + 1} - {moduleName}
            </div>
        </>
    )
}
