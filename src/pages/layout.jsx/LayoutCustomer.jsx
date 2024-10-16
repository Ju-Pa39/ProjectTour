import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const LayoutCustomer = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutCustomer