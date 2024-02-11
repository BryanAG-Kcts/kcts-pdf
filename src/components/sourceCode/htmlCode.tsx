'use client'
import { Editor } from '@monaco-editor/react'
import { FloatLang } from './floatLang'
import { EditorLangProps } from './types'
import { defaultHtml, htmlQuery } from './const'
import { useRef } from 'react'
import { useConfig } from '@/hooks/configState'

export const HtmlCode = ({ handleQueryParams, editorMount, resetEditor }: EditorLangProps): JSX.Element => {
  const editorRef = useRef<any>(null)
  const { editorTheme, editorLineNumbers } = useConfig()

  function mount (editor: any): void {
    editorRef.current = editor
    editorMount(editor, htmlQuery, defaultHtml)
  }

  return (
    <div className='sectionSplit overflow-auto'>
      <Editor
        height='100%'
        width='100%'
        language='html'
        defaultLanguage='html'
        //
        theme={editorTheme}
        onChange={value => handleQueryParams(htmlQuery, value)}
        onMount={editor => mount(editor)}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          lineNumbers: editorLineNumbers
        }}

      />

      <FloatLang alt='HTML 5' src='html5.svg' code={defaultHtml} editorRef={editorRef} fn={resetEditor} query={htmlQuery} />
    </div>
  )
}
