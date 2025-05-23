"use client"

import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getAiResponse } from '@/utils/AiModal'

interface PROPS{
    params: {
        "template-slug":string
    }
}


const CreateNewContent = (props:PROPS) => {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    const [loading,setLoading] = useState(false);
    const GenerateAIContent = async (formData:any)=>{
      setLoading(true)
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinaAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;
      const result = await getAiResponse(FinaAIPrompt);
      console.log(result.text)
      setLoading(false)
    }

    return (
      <div className='p-5'>
        <Link href={'/dashboard'}>
        <Button><ArrowLeft/> Back </Button>
        </Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* formsection */}
        <FormSection 
          selectedTemplate={selectedTemplate}
          userFormInput = {(v:any)=>GenerateAIContent(v)}
          loading={loading}
        />

        <div className='col-span-2'>
        {/* outoput section */}
          <OutputSection/>
        </div>
    </div>
    </div>
  )
}

export default CreateNewContent