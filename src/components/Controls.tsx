'use client'
import React from 'react'
import clsx from 'clsx'

interface ControlProps {
    items: {
        label: string
        icon: any
        onClick: () => void
        disabled?: boolean
        hidden?: boolean
    }[]
    isAwaitingInput?: boolean
}

export default function Controls(props: ControlProps) {
    const { items, isAwaitingInput } = props
    const visibleItems = items.filter((item) => !item.hidden)

    return (
        <div className="pointer-events-none flex justify-start">
            <div className="pointer-events-auto rounded-md p-1 flex gap-2">
                <span className="flex gap-2">
                    {visibleItems.map((item, i) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={clsx(
                                'inline-flex items-center px-4 py-2 text-sm font-medium',
                                !item.disabled
                                    ? 'hover:cursor-pointer'
                                    : 'hover:cursor-not-allowed',
                                i === 0 && 'rounded-md bg-blue-500 text-white',
                                i === visibleItems.length - 1 &&
                                    'rounded-md bg-white text-black'
                            )}
                        >
                            <item.icon
                                className=" h-5 w-5"
                                aria-hidden="true"
                            />
                            {item.label}
                        </button>
                    ))}
                </span>
                {isAwaitingInput && (
                    <div className="inline-flex items-center rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow">
                        <span>Esperando entrada...</span>
                    </div>
                )}
            </div>
        </div>
    )
}
