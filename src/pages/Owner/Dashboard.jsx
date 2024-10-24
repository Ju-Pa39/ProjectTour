import React from 'react';
import { Navigate } from 'react-router-dom';
const Dashboard = () => {
  // const navigate = useNavigate();

  {/* ไม่ทัน */}
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="text-right mb-6">
        <h1 className="text-2xl font-bold">กรกฎาคม 2567</h1>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="รายได้จองทัวร์" value="32,600 บาท" />
        <SummaryCard title="จำนวนลูกทัวร์" value="12 คน" />
        <SummaryCard title="รอตรวจสอบชำระเงิน" value="1 คน" />
      </div>

      {/* Tour List Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">คลุกฝุ่นทัวร์</h2>
          <button className="bg-gray-300 text-black px-4 py-2 rounded-md">สร้างทริปเที่ยว</button>
        </div>

        {/* Tour Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-2 border-b">ทัวร์</th>
              <th className="p-2 border-b">สถานที่</th>
              <th className="p-2 border-b">ค่าใช้จ่าย/คน</th>
              <th className="p-2 border-b">จำนวนลูกทัวร์</th>
              <th className="p-2 border-b">ชำระแล้ว</th>
              <th className="p-2 border-b"></th>
            </tr>
          </thead>
          <tbody>
            <TourRow
              tour="1. เปรโต๊ะลอซู"
              location="เปรโต๊ะลอซู"
              price="3000"
              totalGuests="10/10"
              paidGuests="9/10"
            />
            <TourRow
              tour="2. เปรโต๊ะลอซู"
              location="เปรโต๊ะลอซู"
              price="2800"
              totalGuests="2/10"
              paidGuests="2/10"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

// SummaryCard Component
const SummaryCard = ({ title, value }) => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

// TourRow Component
const TourRow = ({ tour, location, price, totalGuests, paidGuests }) => (
  <tr>
    <td className="p-2 border-b">{tour}</td>
    <td className="p-2 border-b">{location}</td>
    <td className="p-2 border-b">{price}</td>
    <td className="p-2 border-b">{totalGuests}</td>
    <td className="p-2 border-b">{paidGuests}</td>

  </tr>
);

export default Dashboard;

