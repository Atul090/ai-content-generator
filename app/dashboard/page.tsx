"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  const [useSearchInput,setUseSearchInput] = useState<string>('')
  return (
    <div>
        {/* search section */}
        <SearchSection onSearchInput={(value:string)=>console.log(value)}/>
        {/* template lisyt section */}
        <TemplateListSection/>
    </div>
  )
}

export default Dashboard