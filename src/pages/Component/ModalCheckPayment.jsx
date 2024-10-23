import React from 'react'
import tripStore from '../Store/TripStore';
const ModalCheckPayment = (props) => {
    const { bookingId, hdlApprove, hdlCancel, setIsModalOpen } = props;
    const BookingC = tripStore((state) => state.BookingC)
    const CheckBooking = BookingC.find((item) => item.id === bookingId)

  return (
    <div>
        {/* Modal */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-green-200 p-6 rounded-lg relative">
            {/* Close button */}
            <button className="absolute top-2 right-2" onClick={()=>setIsModalOpen(false)}>
              X
            </button>

            {/* Slip Information */}
              <div className="text-center">
                <img
                  src={CheckBooking.Image[0].url}
                  alt="Slip"
                  className="mb-4"
                />
                <div className="flex justify-around mb-4">
                  <button onClick={hdlCancel} className="bg-red-400 text-white px-4 py-2 rounded">ไม่อนุมัติ</button>
                  <button onClick={hdlApprove} className="bg-green-400 text-white px-4 py-2 rounded">อนุมัติ</button>
                </div>

              </div>
            

          </div>
        </div>
      
    </div>
  )
}

export default ModalCheckPayment