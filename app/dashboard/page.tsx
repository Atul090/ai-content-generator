"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>('')
  return (
    <div>
        {/* search section */}
        {/* //chaeck this outline */}
        <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
        {/* template lisyt section */}
        <TemplateListSection searchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard