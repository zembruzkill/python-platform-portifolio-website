import { getServerSession } from 'next-auth'
import Header from '../../components/layout/headers/Header'
import { config, loginIsRequiredClientSide } from '../../../lib/auth'

import { FaClock } from 'react-icons/fa6'

export default async function Dashboard() {
    const session = await getServerSession(config)

    await loginIsRequiredClientSide()

    return (
        <div>
            <div className="bg-[#0D1224]">
                <div className="bg-grid-background">
                    <Header items={true} />
                </div>
            </div>
            <div className="justify-center h-60 bg-[#F8F8F8]">
                <div className="mx-auto max-w-7xl">
                    <p className="text-title-md font-[600] pt-6 pb-6">
                        Você tem aprendido recentemente
                    </p>
                    <div className=" flex gap-2 bg-white h-32 border border-[#EDEDED] rounded p-6">
                        <div className="w-full space-y-2">
                            <p className="font-bold text-title-sm">
                                Python Básico
                            </p>

                            <div className="w-full bg-[#EDEDED] rounded-full dark:bg-gray-700">
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
                        <div
                            className="w-full flex justify-start items-center bg-black"
                            style={{ transform: 'skew(20deg)' }}
                        >
                            <p className="text-title-ssm">
                                Progresso no Curso:{' '}
                                <span className="font-bold">12</span>/ 95
                            </p>
                            s
                        </div>
                        <div className="bg-black w-40">teste</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
