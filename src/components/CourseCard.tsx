import { FaClock, FaArrowRightLong, FaEllipsis } from 'react-icons/fa6'

export default function CourseCard(props: any) {
    return (
        <>
            <div className=" flex gap-2 bg-white h-32 border border-[#E0E0E0] rounded">
                <div className="w-full space-y-2 p-6">
                    <p className="font-bold text-title-sm">{props.course}</p>

                    <div className="w-full bg-[#EDEDED] rounded-full">
                        <div
                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                            style={{ width: '45%' }}
                        >
                            {' '}
                            45%
                        </div>
                    </div>
                    <FaClock size={16} />
                </div>
                <div className="w-full flex justify-start items-center">
                    <p className="text-title-ssm">
                        Progresso no Curso:{' '}
                        <span className="font-bold">12</span>/ 95
                    </p>
                    s
                </div>
                <div
                    className="w-full flex gap-4 justify-start items-center bg-[#F8F8F8] p-4"
                    // style={{ rotate: '-50deg' }}
                >
                    <p className="">Detalhes do Curso</p>
                    <FaArrowRightLong size={16} color={'rgb(79 70 229)'} />
                    <button className="p-2 border-4 border-[#4F45E4] hover:border-[#867fe9] rounded font-bold">
                        Continuar
                    </button>
                    <button className="hover:bg-white rounded w-12 h-12 flex items-center justify-center">
                        <FaEllipsis size={20} />
                    </button>
                </div>
            </div>
        </>
    )
}
