'use client'

import { useEffect } from 'react'
import { PythonProvider } from 'react-py'

import Codeblock from '../components/CodeBlock'
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
