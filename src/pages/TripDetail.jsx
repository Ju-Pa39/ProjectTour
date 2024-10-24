import tripStore from "./Store/TripStore";
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useUserStore from "./Store/userStore";

// import axios from "axios";
const TripDetail = () => {
  const setcurrentTrip = tripStore((state) => state.setcurrentTrip);
  const trip = tripStore((state) => state.trip);
  const images = trip?.Image && trip.Image.length > 0
    ? trip.Image.map((img) => img.url)
    : [];

  const user = useUserStore((state) => state.user);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  // ฟังก์ชันสำหรับเปลี่ยนรูปภาพ
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const hdlClick = (id) => {
    const token = localStorage.getItem('token');  
    if(user) {
      setcurrentTrip(user.id);
      console.log('TripDetail hdlClick Id =', id);
      navigate("/RegisterForm");
    } else {
      console.log("User is not logged in");
      navigate("/login");  
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">{trip?.tourCompany?.name}</h1>
      <h2 className="text-3xl font-bold mb-6 text-white">"{trip?.location?.name}"</h2>

      {/* Trip Content  */}
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Trip Details */}
        <div className="border border-gray-400 p-4 w-1/2 bg-gray-100 rounded-lg">
          <p dangerouslySetInnerHTML={{ __html: trip?.detail }}></p>
        </div>

        {/* Trip Image  */}
        <div className="w-1/2 px-4 relative">
          <img
            src={images[currentIndex]}
            alt="ทริป"
            className="rounded-lg shadow-lg w-full"
          />

          {/* ปุ่มเลื่อนรูป */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Register Button */}
      <div className="mt-6">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          onClick={() => hdlClick(trip?.id)}>
          สมัครเข้าร่วมทริป
        </button>
      </div>
    </div>
  );
};

export default TripDetail;