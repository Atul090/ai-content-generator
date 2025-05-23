import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const TemplateCard = (item:TEMPLATE) => {
  return (
    <div className='p-6 shadow-sm rounded-xl bg-white border hover:shadow-md transition-all duration-300 cursor-pointer group'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='p-2 bg-gray-50 rounded-lg'>
            <Image src={item.icon} alt={item.name} width={40} height={40} className='object-contain'/>
          </div>
          <ArrowRight className='text-gray-400 group-hover:text-primary transition-colors'/>
        </div>
        
        <div className='space-y-2'>
          <h2 className='font-semibold text-lg text-gray-800'>{item.name}</h2>
          <p className='text-gray-500 text-sm line-clamp-2'>{item.desc}</p>
        </div>
        
        <div className='pt-2'>
          <span className='text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full'>
            {item.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TemplateCard