import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Owner/Sidebar'
import HeaderOwner from '../Owner/HeaderOwner'


const LayoutOwner = () => {
  return (
    <div>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>
          <HeaderOwner />
          <min>
          <Outlet />
          </min>
        </div>
      </div>
    </div>
  )
}

export default LayoutOwner