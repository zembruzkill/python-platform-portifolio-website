import { loginIsRequiredClientSide } from '../../../lib/auth'
import Header from '../../components/layout/headers/Header'

export default async function PaymentBilling() {
    await loginIsRequiredClientSide()

    return (
        <div>
            <div className="bg-[#0D1224] pb-16">
                <div className="bg-grid-background">
                    <Header items={true} />
                    <h1 className="">Pagamentos e Faturas</h1>
                </div>
            </div>
        </div>
    )
}
