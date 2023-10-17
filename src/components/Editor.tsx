'use client'

import { useEffect, useState } from 'react'
import { PythonProvider } from 'react-py'

import CodeEditor from './CodeEditor'

export default function Editor(code: any) {

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
      <div>
        <PythonProvider packages={packages}>
        <section>
          <CodeEditor code={code.code} />
        </section>
        </PythonProvider>
      </div>
    </>
  )
}
