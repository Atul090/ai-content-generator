import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex  bg-slate-100 h-screen'>
        {/* Sidebar - hidden on mobile, fixed on desktop */}
        <div className='hidden md:block md:w-64 md:fixed md:inset-y-0'>
            <SideNav/>
        </div>
        
        {/* Main content - full width on mobile, offset on desktop */}
        <div className='flex-1 md:ml-64'>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    </div>
  )
}

export default layout