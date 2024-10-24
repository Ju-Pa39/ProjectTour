import React, { useEffect, useState } from 'react';
import tripStore from '../Store/TripStore';
import useUserStore from '../Store/userStore';
import { toast } from 'react-toastify';

const TourCompanyInfo = () => {
    const tour = tripStore((state) => state.tour);
    const getTour = tripStore((state) => state.getTour);
    const createTour = tripStore((state) => state.createTour);
    const updateTour = tripStore((state) => state.updateTourById); 
    const deleteTourById = tripStore((state) => state.deleteTourById); 
    const token = useUserStore((state) => state.token);
    const user = useUserStore((state) => state.user);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        id: '', // Added id for the tour
        name: '',
        tourNumber: '',
        line: '',
        phoneNumber: '',
    });

    useEffect(() => {
        getTour(token);
    }, []);

    const handleOpenModal = (tourData) => {
        if (tourData) {
            setForm(tourData); 
        } else {
            setForm({ id: '', name: '', tourNumber: '', line: '', phoneNumber: '' }); 
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);
    };

    const handleSubmit = async () => {
        try {
            if (user && user.id) {
                const formData = {
                    ...form,
                    userId: user.id,
                };
                if (form.id) {
                    await updateTour(token,form.id, formData);
                    toast.success('อัพเดทข้อมูลสำเร็จ');
                } else {
                    await createTour(token,formData); 
                    toast.success('สร้างข้อมูลสำเร็จ');
                }
                handleCloseModal();
                getTour(token); 
            } else {
                console.error('User ID is missing');
                toast.error('ไม่สามารถสร้างข้อมูลได้');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
                const confirmDelete = window.confirm("คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้?");
                if (confirmDelete) {
                    try {
                        await deleteTourById(id);
                        getTour();
                    } catch (error) {
                        console.error('Error deleting tour:', error);
                    }
                }
            };

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <div className="mt-8">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-bold mb-4">ข้อมูลบริษัททัวร์</h2>
                    <div className="mt-4">
                        <button
                            onClick={() => handleOpenModal(null)} 
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                        >
                            สร้างบริษัททัวร์
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">ลำดับ</th>
                            <th className="p-3 text-left">บริษัททัวร์</th>
                            <th className="p-3 text-left">เลขที่ใบอนุญาติ</th>
                            <th className="p-3 text-left">Line</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tour?.tour?.map((destination, index) => (
                            <tr key={destination.id}>
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{destination.name}</td>
                                <td className="p-3">{destination.tourNumber}</td>
                                <td className="p-3">{destination.line}</td>
                                <td className="p-3 gap-5 flex">
                                    <button
                                        onClick={() => handleOpenModal(destination)} 
                                        className="bg-orange-400 text-white px-4 py-2 rounded"
                                    >
                                        ดู/แก้ไข
                                    </button>
                                    <button
                                        onClick={() => handleDelete(destination.id)} 
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        ลบ
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">ข้อมูลบริษัททัวร์</h2>
                            <button onClick={handleCloseModal} className="text-gray-500 text-xl">&times;</button>
                        </div>

                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="ชื่อทัวร์"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="tourNumber"
                                placeholder="เลขประจำตัวทัวร์"
                                value={form.tourNumber}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="line"
                                placeholder="LINE"
                                value={form.line}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="เบอร์ติดต่อ"
                                value={form.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                            <button
                                onClick={handleSubmit}
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