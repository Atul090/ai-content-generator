"use client"

import { FileClock, Home, Settings, WalletCards, Accessibility } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import path from 'path'
import React, { useEffect } from 'react'

const SideNav = () => {
    
    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path: '/dashboard'
        },
         {
            name:'History',
            icon:FileClock,
            path: '/dashboard/history'
        },
         {
            name:'Billing',
            icon:WalletCards,
            path: '/dashboard/billing'
        },
         {
            name:'Settings',
            icon:Settings,
            path: '/dashboard/setting'
        },
        {
            name:'Personalise',
            icon:Accessibility,
            path: '/dashboard/personalie'
        }

    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    })

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu:any,index:number)=>(
                <div 
                    key={menu.path} 
                    className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path == menu.path && 'bg-primary text-white'}`}
                >
                    <menu.icon className='h-6 2-6'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>  
    </div>
  )
}

export default SideNav