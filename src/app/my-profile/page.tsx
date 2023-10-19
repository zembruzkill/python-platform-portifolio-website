import { loginIsRequiredClientSide } from '../../../lib/auth'
import Header from '../../components/layout/headers/Header'

export default async function MyProfile() {
    await loginIsRequiredClientSide()

    return (
        <div>
            <Header items={true} />
            <h1 className="">Meu Perfil</h1>
        </div>
    )
}
