'use client'

import { useEffect, useState } from 'react'
import { PythonProvider } from 'react-py'

import CodeEditor from './CodeEditor'
import Console from './Console'

import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { snippets } from '../data/snippets'

import {
  CodeBracketIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

import {
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon
} from '@heroicons/react/24/solid'

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
          <Tab.Group onChange={setActiveTab}>
            <div className="grid grid-cols-1 items-center md:grid-cols-[1fr,auto]">
              <div className="order-2 mt-4 flex min-w-0 md:order-1 md:mt-0">
                {activeTab === 0 && (
                  <button
                    type="button"
                    onClick={() => updateCode(grabCode())}
                    className="inline-flex items-center rounded-md border border-transparent bg-sky-100 px-3 py-2 text-sm font-medium leading-4 text-sky-700 shadow-sm hover:cursor-pointer hover:bg-sky-200"
                  >
                    Mudar Exemplo
                    <ArrowPathIcon className="ml-2 -mr-0.5 h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="order-1 flex items-center md:order-2 md:ml-6">
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 dark:bg-blue-100/20">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        clsx(
                          'm-0 w-full rounded-lg border-none py-1.5 px-2 text-sm font-medium leading-5 outline-none',
                          'hover:cursor-pointer focus:outline-none',
                          selected
                            ? 'bg-white stroke-sky-500 text-slate-900 shadow'
                            : 'bg-transparent stroke-slate-700 text-slate-700 hover:bg-white/[0.12] dark:stroke-slate-200 dark:text-slate-200'
                        )
                      }
                    >
                      <div className="flex items-center whitespace-nowrap font-semibold">
                        {tab.icon} {tab.name}
                      </div>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels>
              {tabs.map((tab, i) => (
                <Tab.Panel key={i}>{tab.component}</Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </section>
        </PythonProvider>
      </div>
    </>
  )
}
