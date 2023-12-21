'use client'

import React, { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'

import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <SessionProvider>
            <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
    )
}

export default Providers
