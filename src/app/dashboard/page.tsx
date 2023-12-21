import { getServerSession } from 'next-auth'
import { config, loginIsRequiredClientSide } from '../../../lib/auth'

export default async function Dashboard() {
    const session = await getServerSession(config)

    await loginIsRequiredClientSide()

    return <></>
}
