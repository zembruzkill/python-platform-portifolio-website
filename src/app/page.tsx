import Hero from '@/components/NutriForm'

import Header from '../components/layout/headers/Header'
import Footer from '@/components/layout/footers/Footer'
import Iam from '@/components/Iam'

export const metadata = {
    title: 'Nutrição para Todos',
    description: 'Alimentação inteligente para uma vida saudável.',
}

export default function HomePage() {
    return (
        <>
            {/* <Header /> */}
            <div>
                <Hero />
            </div>
        </>
    )
}
