'use client'

import { useEffect, useState } from 'react'
import { PythonProvider } from 'react-py'

import CodeEditor from './CodeEditor'

import { snippets } from '../data/snippets'

import {
  CodeBracketIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'


export default function Editor() {

  const shuffle = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

  const [activeTab, setActiveTab] = useState(0)
  const [code, updateCode] = useState(shuffle(snippets))

  function grabCode(): string {
    const next = shuffle(snippets)
    return next !== code ? next : grabCode()
  }

  const tabs = [
    {
      name: 'Editor de Código',
      icon: <CodeBracketIcon className="mr-3 h-5 w-5 stroke-inherit" />,
      component: <CodeEditor code={code} />
    }
  ]

  const packages = {
    official: [],
    micropip: [],
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
          <CodeEditor code={code} />
        </section>
        </PythonProvider>
      </div>
    </>
  )
}
