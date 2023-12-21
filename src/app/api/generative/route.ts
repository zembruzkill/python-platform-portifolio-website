import { NextRequest, NextResponse } from 'next/server'
const { GoogleGenerativeAI } = require('@google/generative-ai')

export async function POST(request: NextRequest, res: NextResponse) {
    try {
        // Verifique se o corpo da solicitação contém dados válidos
        const data = await request.json()
        if (!data) {
            throw new Error('Dados inválidos na solicitação.')
        }

        data['prompt'] =
            'Me gere uma dieta para uma pessoa com as seguintes informações. Indique na dieta as horas das refeições, o que comer em cada refeição e a quantidade de cada alimento. Também gere duas opções de cada refeição.'

        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)

        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

        const prompt = JSON.stringify(data)

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        // Retorne a resposta com status 201 e o texto da resposta
        return NextResponse.json({ status: 201, body: text })
    } catch (error) {
        // Se ocorrer um erro, retorne uma resposta de erro
        console.error('Erro durante o processamento da solicitação:', error)
        return NextResponse.json({
            status: 500,
            body: 'Erro interno do servidor.',
        })
    }
}
