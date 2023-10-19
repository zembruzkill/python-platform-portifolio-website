import bcrypt from 'bcrypt'

import { NextRequest, NextResponse } from 'next/server'
import { db } from '../../../../lib/db'

export async function POST(request: NextRequest) {
    const data = await request.json()

    const { name, email, password } = data

    if (!name || !email || !password) {
        return NextResponse.json(
            {
                error: 'Missing name, email or password',
            },
            { status: 400 }
        )
    }

    const isUserExist = await db.user.findUnique({
        where: {
            email: email,
        },
    })

    if (isUserExist) {
        return NextResponse.json(
            {
                error: 'User already exists',
            },
            { status: 400 }
        )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await db.user.create({
        data: {
            name,
            email,
            hashedPassword,
        },
    })

    return NextResponse.json(user, { status: 201 })
}
