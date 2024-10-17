import React, { useState } from "react";

function PaymentCheck() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // เปิด Modal
  const openModal = () => setIsModalOpen(true);
  
  // ปิด Modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-bold">รอตรวจสอบชำระเงิน</div>
        <div className="text-lg">เดือน กรกฎาคม 2567</div>
      </div>

      {/* Customer List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">ลำดับ</th>
              <th className="p-3 text-left">ชื่อ-สกุล</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">1</td>
              <td className="p-3">นาย พิชัน อำพันทอง</td>
              <td className="p-3">
                <button
                  className="bg-orange-400 text-white px-4 py-2 rounded"
                  onClick={openModal}
                >
                  ตรวจสอบการชำระ
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-200 p-6 rounded-lg relative">
            {/* Close button */}
            <button className="absolute top-2 right-2" onClick={closeModal}>
              X
            </button>

            {/* Slip Information */}
            <div className="text-center">
              <img
                src="https://s359.kapook.com/pagebuilder/ba154685-db18-4ac7-b318-a4a2b15b9d4c.jpg"
                alt="Slip"
                className="mb-4"
              />
              <div className="flex justify-around mb-4">
                <button className="bg-red-400 text-white px-4 py-2 rounded">ไม่อนุมัติ</button>
                <button className="bg-green-400 text-white px-4 py-2 rounded">อนุมัติ</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentCheck;


