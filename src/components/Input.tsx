'use client'

import React, { useEffect, useRef, useState } from 'react'

import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

interface InputProps {
  prompt: string
  onSubmit: (value: string) => void
}

export default function Input(props: InputProps) {
  const { prompt, onSubmit } = props
  const [input, setInput] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  return (
    <div className="">
      <label
        htmlFor="input"
        className="block text-sm font-medium text-white"
      >
      </label>
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className='flex items-center'>
            <code className='text-title-xxsm text-white'>{prompt}</code>
            <input
              ref={inputRef}
              type="text"
              name="input"
              id="input"
              className=" text-title-xxsm text-white bg-[#282A36] block w-full pl-2 border-none px-0 py-1.5 placeholder-white shadow-sm focus:ring-0"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSubmit(input)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
