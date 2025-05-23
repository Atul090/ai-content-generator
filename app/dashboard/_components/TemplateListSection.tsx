import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
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

const TemplateListSection = ({searchInput}:any) => {
  console.log("Initial Templates:", Templates)
  const [templateList, setTemplateList] = useState(Templates)

  useEffect(()=>{
    console.log("searchInput:", searchInput)
    console.log("Current templateList:", templateList)
    
    if(searchInput){
      const filterData = Templates.filter(item => 
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log("Filtered Data:", filterData)
      setTemplateList(filterData)
    } else {
      console.log("Setting back to original Templates")
      setTemplateList(Templates)
    }
  },[searchInput])

  return( 
    <div className='p-4 md:p-6 bg-gray-50'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {templateList.map((item:TEMPLATE, index:number) => (
          <TemplateCard key={item.slug} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default TemplateListSection