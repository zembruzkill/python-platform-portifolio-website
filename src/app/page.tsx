'use client'

// Add logo to the top of the page
import Image from 'next/image'
import logo from '../assets/logo.svg'

import { useEffect } from 'react'
import { PythonProvider } from 'react-py'


import CodeEditor from '../components/CodeEditor'

export default function Home() {

  const packages = {
    official: [],
    micropip: ['pyodide-http'],
  }

  useEffect(() => {
    navigator.serviceWorker
      .register('/react-py-sw.js')
      .then((registration) =>
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope
        )
      )
      .catch((err) => console.log('Service Worker registration failed: ', err))
  }, [])

  return (
    <>
    <div className='bg-[#1c2d62] min-h-90'>
      <Image 
        className='ml-4'
        src={logo}
        alt="Picture of the author"
        width={250}
        height={250}
      />
    </div>
    
      <div className='h-screen bg-white'>
        <PythonProvider packages={packages}>
            {/* <Codeblock /> */}
            <CodeEditor code={
              'name = input("Insert your name: ")'}/>
          </PythonProvider>
      </div>
    </>
  )
}
