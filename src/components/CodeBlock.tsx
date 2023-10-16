'use client'

import { useState } from 'react'
import { usePython } from 'react-py'

function Codeblock() {
    const [input, setInput] = useState('')
  
    // Use the usePython hook to run code and access both stdout and stderr
    const { runPython, stdout, stderr, isLoading, isRunning } = usePython()
  
    return (
      <>
        {isLoading ? <p>Carregando...</p> : <p>Pronto!</p>}
        <form>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite seu código aqui"
          />
          <input
            type="submit"
            value={!isRunning ? 'Executar' : 'Executando...'}
            disabled={isLoading || isRunning}
            onClick={(e) => {
              e.preventDefault()
              runPython(input)
            }}
          />
        </form>
        <p>Output</p>
        <pre>
          <code>{stdout}</code>
        </pre>
        <p>Error</p>
        <pre>
          <code>{stderr}</code>
        </pre>
      </>
    )
  }

  export default Codeblock
  