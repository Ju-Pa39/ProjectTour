import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      {/* Logo */}
      <div className="text-center text-2xl py-4 border-b border-gray-700">
      <Link to="/">เที่ยวตามงบ</Link>
      </div>

      {/* Menu Items */}
      <ul className="mt-8">
      <li to={'CreateTripForm'} className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
      <Link to="/Owner">Dashboard</Link>
        </li>
        <li to={'CreateTripForm'} className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
        <Link to="PaymentCheck">ตรวจสอบชำระเงิน</Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
        <Link to="ListTrip">รายชื่อทริป</Link>
        </li>
        <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">
        <Link to="TourCompanyInfo">บริษัททัวร์</Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;