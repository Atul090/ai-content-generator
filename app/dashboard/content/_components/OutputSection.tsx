import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props {
  aiOutput : string;
}
const OutputSection = ({aiOutput}:props) => {
    const editorRef:any = useRef();

    // Set markdown when aiOutput changes and editor is ready
    useEffect(() => {
      const editorInstance = editorRef.current?.getInstance?.();
      if (editorInstance) {
        editorInstance.setMarkdown(aiOutput || '');
      }
    }, [aiOutput]);

    return (
      <div className='bg-white shadow-lg border'>
          <div className='flex justify-between items-center p-5'>
              <h2 className='font-medium text-lg'>Your Result</h2>
              <Button className='flex gap-2'><Copy className='w-4 h-4'/>Copy</Button>
          </div>
          <Editor
            ref={editorRef}
            initialValue={aiOutput || "Your result will appear here"}
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
          />
      </div>
    )
}

export default OutputSection