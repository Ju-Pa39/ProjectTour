import React, { useEffect, useState } from "react";
import tripStore from "../Store/TripStore";
import moment from "moment/min/moment-with-locales";
import ModalCheckPayment from "../Component/ModalCheckPayment";

function PaymentCheck() {

  const [bookingId, setBookingId] = useState(null);
  // console.log(bookingId)

  const updatebookingStatus = tripStore((state) => state.updatebookingStatus)
  const BookingC = tripStore((state) => state.BookingC)
  const getBooking = tripStore((state) => state.getBooking)
  // console.log(BookingC)

  useEffect(() => {
    getBooking()
  }, [])

  const hdlApprove = () => {
    updatebookingStatus(bookingId, "SUCCESS")
    closeModal()
  }

  const hdlCancel = () => {
    updatebookingStatus(bookingId, "CANCEL")
    closeModal()
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(isModalOpen)

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
              <th className="p-3 text-left">สถานที่</th>
              <th className="p-3 text-left">วันที่</th>
              <th className="p-3 text-left">สถานะ</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>

            {BookingC?.map((item, index) =>
              <tr key={index}>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item?.trip?.location?.name}</td>
                <td className="p-3">{moment(item?.trip?.startdate).locale("th").format("LL")}</td>
                <td className="p-3">{item?.payMentStatus}</td>
                <td className="p-3">
                  <button
                    className="bg-orange-400 text-white px-4 py-2 rounded"
                    onClick={() => {
                      setBookingId(item.id)
                      openModal()
                    }}
                  >
                    ตรวจสอบการชำระ
                  </button>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Modal */}
      { isModalOpen && <ModalCheckPayment isOpen={isModalOpen}  hdlApprove={hdlApprove} hdlCancel={hdlCancel} setIsModalOpen={setIsModalOpen} bookingId={bookingId}/>
    }
    </div>
  );
}

export default PaymentCheck;