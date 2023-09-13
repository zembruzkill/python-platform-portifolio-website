'use client'

import { useEffect, useState } from 'react'

import { Packages } from 'react-py/dist/types/Packages'

import { usePython } from 'react-py'

import Controls from './Controls'
import Loader from './Loader'
import Input from './Input'
import { ArrowPathIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid'

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
    <div className="relative flex flex-col space-y-2">
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
        className="min-h-[7rem] overflow-clip rounded-md shadow-md m-4 p-2"
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

      {showOutput && (
        <pre className=" w-full mt-4 text-left p-2 m-4 rounded-md bg-white">
          <code className='text-blue-500'>{stdout}</code>
          <code className="text-red-500">{stderr}</code>
        </pre>
      )}
    </div>
  )
}
