import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Editor from '../Editor'

export default function LecturesPythonEditor({ lecture }: { lecture: any }) {
    return (
        <>
            <div className="bg-black p-4 text-white min-h-screen">
                <div className="flex gap-2">
                    <div className="w-3/6">
                        <div className="prose max-w-none prose-invert">
                            <ReactMarkdown remarkPlugins={[[remarkGfm]]}>
                                {lecture.markdown}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="w-3/6">
                        <Editor code={''} />
                    </div>
                </div>
            </div>
        </>
    )
}
