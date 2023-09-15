'use client'

import { useEffect, useState } from 'react'

import { Packages } from 'react-py/dist/types/Packages'

import { usePython } from 'react-py'

import Controls from './Controls'
import Loader from './Loader'
import Input from './Input'
import { ArrowPathIcon, PlayIcon, StopIcon, CodeBracketIcon} from '@heroicons/react/24/solid'

import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-textmate'

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

  const tabs = [
    {
      name: 'Editor de Código',
      icon: <CodeBracketIcon className="mr-3 h-5 w-5 stroke-inherit" />,
      component: <CodeEditor code={code} />
    }
  ]

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
    <div className="relative z-0 flex flex-col space-y-2">
      <Controls
        items={[
          {
            label: 'Run',
            icon: PlayIcon,
            onClick: run,
            disabled: isLoading || isRunning,
            hidden: isRunning
          },
          { label: 'Stop', icon: StopIcon, onClick: stop, hidden: !isRunning },
          {
            label: 'Reset',
            icon: ArrowPathIcon,
            onClick: reset,
            disabled: isRunning
          }
        ]}
        isAwaitingInput={isAwaitingInput}
      />

      {isLoading && <Loader />}

      <AceEditor
        value={input}
        mode="python"
        name="CodeBlock"
        fontSize="0.9rem"
        className="min-h-[7rem] overflow-clip rounded-md shadow-md"
        theme="textmate"
        onChange={(newValue) => setInput(newValue)}
        width="100%"
        maxLines={Infinity}
        onLoad={editorOnLoad}
        editorProps={{ $blockScrolling: true }}
        setOptions={editorOptions}
      />

      {isAwaitingInput && prompt !== undefined && (
        <Input prompt={prompt} onSubmit={sendInput} />
      )}

      
        <pre className={`w-full min-h-[5rem] p-4 text-left rounded-md ${showOutput && 'bg-white '}`}>
        {showOutput && (
          <>
            <code className='text-blue-500'>{stdout}</code>
            <code className="text-red-500">{stderr}</code>
          </>
        )}
        </pre>
    </div>
  </>
  )
}
