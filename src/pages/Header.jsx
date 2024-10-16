import React from 'react'
import { useNavigate } from 'react-router-dom'


function Header() {
  const navigate = useNavigate()
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <p className="text-2xl font-bold text-white">เที่ยวตามงบ</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={()=>navigate('/Home')} className="text-2xl font-bold text-white">สถานที่ท่องเที่ยว</button>
                        <button onClick={()=>navigate('/Home')} className="text-2xl font-bold text-white">ทัวร์</button>
                        <button onClick={()=>navigate('/Home')} className="text-2xl font-bold text-white">รายละเอียดทัวร์ที่สนใจ</button>
                        
                    </div>
                    <div className="flex items-center">
                        <i className="ri-user-line text-2xl text-[#ffffff]"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
} 

export default Header