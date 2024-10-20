import React from 'react'
import { useNavigate } from 'react-router-dom'


function HeaderOwner() {
  const navigate = useNavigate()
    return (
        <nav>
            <div className="px-4 sm:px-6 lg:px-8  bg-gray-800">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <p className="text-2xl font-bold text-white">  </p>
                    </div>
                
                    <div className="flex items-center">
                        <i className="ri-user-line text-2xl text-[#ffffff]"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
} 

export default HeaderOwner