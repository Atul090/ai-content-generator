import { Search } from 'lucide-react'
import React from 'react'


function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold '>Browse all templates</h2>
        <p>What would you like to ceate today?</p>
        <div className='flex w-full justify-between items-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
                <Search className='text-primary items-center'/>
                {/* <input type="text" placeholder='Search' /> */}
                <input type="text" placeholder='Search' className='bg-transparent outline-none w-full text-black placeholder:text-gray-500'
                onChange={(event)=>onSearchInput(event.target.value)} />
            </div>
        </div>
    </div>
  )
}

export default SearchSection