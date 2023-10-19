import { getServerSession } from 'next-auth'
import Header from '../../components/layout/headers/Header'
import { config, loginIsRequiredClientSide } from '../../../lib/auth'

export default async function Dashboard() {
    const session = await getServerSession(config)

    await loginIsRequiredClientSide()

    return (
        <div>
            <div className="bg-[#0D1224] pb-16">
                <div className="bg-grid-background">
                    <Header items={true} />
                    <h1 className="text-white">Dashboard</h1>
                </div>
            </div>
        </div>
    )
}
