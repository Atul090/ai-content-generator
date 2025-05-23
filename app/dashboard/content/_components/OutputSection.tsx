import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Butterfly_Kids } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputSection = () => {
    const editorRef:any = useRef();
  return (
    <div className='bg-white shadow-lg border'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='font-medium text-lg'>Your Result</h2>
            <Button className='flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
        </div>
        <Editor
          ref={editorRef}
          initialValue="Your result will appear here"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() => {
            const instance = editorRef.current?.getInstance();
            if (instance) {
              console.log(instance.getMarkdown());
            }
          }}
        />
    </div>
  )
}

export default OutputSection