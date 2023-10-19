'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function CodeSnippet(code: any) {
    const transparentBackground = {
        background: 'transparent',
    }

    return (
        <>
            <SyntaxHighlighter
                language="python"
                style={dark}
                customStyle={{ ...transparentBackground }}
            >
                {code.code}
            </SyntaxHighlighter>
        </>
    )
}
