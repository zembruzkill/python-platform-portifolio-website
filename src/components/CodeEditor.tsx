'use client'

import { useEffect, useState } from 'react'

import { Packages } from 'react-py/dist/types/Packages'

import { usePython } from 'react-py'

import Controls from './Controls'
import Loader from './Loader'
import Input from './Input'
import { ArrowPathIcon, PlayIcon, StopIcon, CodeBracketIcon, CommandLineIcon} from '@heroicons/react/24/solid'

// import {
//   CodeBracketIcon,
// ,
// } from '@heroicons/react/24/outline'

import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-dracula'

import 'ace-builds/src-noconflict/theme-idle_fingers'
import 'ace-builds/src-noconflict/ext-language_tools'



const editorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  highlightActiveLine: false,
  showPrintMargin: false
}

const editorOnLoad = (editor: any) => {
  editor.renderer.setScrollMargin(10, 10, 0, 0)
  editor.moveCursorTo(0, 0)
}

interface CodeEditorProps {
  code: string
  packages?: Packages
}

export default function CodeEditor(props: CodeEditorProps) {
  const { code, packages } = props
  const [input, setInput] = useState(code.trimEnd())
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    setInput(code.trimEnd())
    setShowOutput(false)
  }, [code])

  let colorMode: 'dark' | 'light';

  colorMode = 'light';

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution,
    isAwaitingInput,
    sendInput,
    prompt
  } = usePython({ packages })

  function run() {
    runPython(input)
    setShowOutput(true)
  }

  function stop() {
    interruptExecution()
    setShowOutput(false)
  }

  function reset() {
    setShowOutput(false)
    setInput(code.trimEnd())
  }

  return (
  <>
    <div>
      <button className='text-title-xxsm bg-[#282A36] p-2 rounded-tr-lg border-t-2 border-blue-300'><span className='flex items-center gap-2'><span><CodeBracketIcon className=" h-5 w-5" /></span>Editor - main.py</span></button>
    </div>
    <div className="p-2 rounded-r-lg space-y-2 text-black bg-[#282A36]">

      <div>
        <AceEditor
          value={input}
          mode="python"
          name="CodeBlock"
          fontSize="0.9rem"
          className="min-h-[20rem] overflow-clip"
          theme="dracula"
          onChange={(newValue) => setInput(newValue)}
          width="100%"
          maxLines={Infinity}
          onLoad={editorOnLoad}
          editorProps={{ $blockScrolling: true }}
          setOptions={editorOptions}
        />

        <hr className="my-4 border-zinc-700" />

        <Controls
        items={[
          {
            label: 'Executar',
            icon: PlayIcon,
            onClick: run,
            disabled: isLoading || isRunning,
            hidden: isRunning
          },
          { label: 'Parar', icon: StopIcon, onClick: stop, hidden: !isRunning },
          {
            label: '',
            icon: ArrowPathIcon,
            onClick: reset,
            disabled: isRunning
          }
        ]}
        isAwaitingInput={isAwaitingInput}
      />
      </div>
    </div>
    
    {isLoading && <Loader />}

    <div className='pt-4'>
      <div>
        <button className='text-title-xxsm bg-[#282A36] p-2 rounded-tr-lg border-t-2 border-yellow-300'><span className='flex items-center gap-2'><span><CommandLineIcon className=" h-5 w-5" /></span>Console - Saída</span></button>
      </div>
      <div className="p-2 rounded-r-lg space-y-2 text-black bg-[#282A36]">
          <pre className={`w-full min-h-[15rem] text-left rounded-md bg-[#282a36] p-8`}>
          {showOutput && (
            <>
              <code className='text-title-xxsm text-blue-500'>$ python3 main.py</code>
              {isAwaitingInput && prompt !== undefined && (
                <Input prompt={prompt} onSubmit={sendInput} />
              )}
              <br />
              <code className='text-title-xxsm text-white'>{stdout}</code>
              <code className="text-title-xxsm text-red-500">{stderr}</code>
            </>
          )}
        </pre>
      </div>
    </div>
  </>
  )
}
