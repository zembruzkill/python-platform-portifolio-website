import { NextRequest, NextResponse } from 'next/server'
import { db } from '../../../../lib/db'

export async function POST(request: NextRequest) {
    const data = await request.json()

    if (data) {
        console.log('Received data from Hotmart: ')
    }

    return NextResponse.json({ status: 201 })
}
