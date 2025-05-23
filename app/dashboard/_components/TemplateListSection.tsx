import Templates from '@/app/(data)/Templates'
import React from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    name: string,
    label:string,
    field:string,
    required?:boolean,
}

const TemplateListSection = () => {
  return( 
    <div className='p-6 bg-gray-50 min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {Templates.map((item:TEMPLATE, index:number) => (
          <TemplateCard key={item.slug} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default TemplateListSection