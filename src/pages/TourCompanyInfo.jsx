import React, { useState } from 'react';


const TourCompanyInfo = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <header className="flex items-center justify-between">
                <div className="text-lg font-bold">LOGO</div>
            </header>

            <div className="mt-8">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-bold mb-4">ข้อมูลบริษัททัวร์</h2>
                    <div className="mt-4">
                        <button
                            onClick={handleOpenModal}
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                        >
                            สร้างบริษัททัวร์
                        </button>
                    </div>
                </div>
            </div>
            <table className="w-full bg-gray-200 p-4 rounded-lg">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">ลำดับ</th>
                        <th className="p-2">ชื่อบริษัททัวร์</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2 justify-center items-center">1</td>
                        <td className="p-2">คลุกฝุ่นทัวร์</td>
                        <td className="p-2">
                            <button className="bg-orange-500 text-white py-1 px-3 rounded">ดู/แก้ไข</button>
                            <button className="bg-red-500 text-white py-1 px-3 rounded">ลบ</button>

                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Button to Open Modal */}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">ข้อมูลบริษัททัวร์</h2>
                            <button onClick={handleCloseModal} className="text-gray-500 text-xl">&times;</button>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="ชื่อทัวร์"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="เลขประจำตัวทัวร์"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="LINE"
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                placeholder="เบอร์ติดต่อ"
                                className="w-full p-2 border rounded"
                            />
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-500 text-white w-full py-2 rounded-lg"
                            >
                                บันทึก
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TourCompanyInfo;
