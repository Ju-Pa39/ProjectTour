import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tripStore from '../Store/TripStore';
import moment from "moment/min/moment-with-locales";
import { deleteTripS } from '../../aip/deletetrip';
import useUserStore from '../Store/userStore';
const ListTrip = () => {
    const token = useUserStore((state) => state.token)
    const getTripOwner = tripStore((state) => state.getTripOwner)
    const getTrip = tripStore((state) => state.getTrip)
    const deleteTrip = tripStore((state) => state.deleteTripById)
    console.log("ดูข้อมูล", getTripOwner)

    useEffect(() => {
        getTrip()
    }, [])

    const navigate = useNavigate();

    const hdlOnClick = () => {
        navigate('/Owner/CreateTripForm')
    }

    const hdlOnClickEdit = (tripId) => {
        navigate(`/Owner/TripForm/${tripId}`)
        ///${tripId}
    }

    const hdlOnClickDelete = async (tripId) => {
        try {
            const rs = await deleteTripS(tripId, token)
            console.log(rs)
            getTrip()
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <div className="mt-8">
                <div className='flex justify-between items-center mb-4'>
                    <h2 className="text-xl font-bold mb-4">ข้อมูลทริป</h2>
                    <div className="mt-4">
                        <button
                            onClick={hdlOnClick}
                            className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                        >
                            สร้างทริป
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">ลำดับ</th>
                            <th className="p-3 text-left">สถานที่ทริป</th>
                            <th className="p-3 text-left">วันที่</th>
                            <th className="p-3 text-left">จำนวนคน</th>
                            <th className="p-3 text-left">ราคา</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {getTripOwner?.map((item, index) =>
                            <tr >
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{item.location.name}</td>
                                <td className="p-3">{moment(item.startdate).locale("th").format("LL")}</td>
                                <td className="p-3">10 คน</td>
                                <td className="p-3">{item.price}</td>
                                <td className="p-3 gap-5 flex">
                                    <button onClick={() => hdlOnClickEdit(item.id)} className="bg-orange-400 text-white px-4 py-2 rounded">ดู/แก้ไข</button>
                                    <button onClick={() => hdlOnClickDelete(item.id)} className="bg-red-500 text-white px-4 py-2 rounded">ลบ</button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTrip;