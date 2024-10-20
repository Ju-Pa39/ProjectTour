import  tripStore  from "./Store/TripStore";
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const TourDetail = () => {
  const trip = tripStore((state) => state.trip);
  const images = trip?.Image && trip.Image.length > 0
  ? trip.Image.map((img) => img.url)
  : [];
  // [
  //   'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/460280234_1071937364301362_4246267936584596257_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mYR_1eoDvDoQ7kNvgFwCnad&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AUr4K94OntwDEv9_ceCrmbC&oh=00_AYBBDvGUX-K91wo4ATOXgbHIJ2Rrt_gX2a-DaEPbOZ09lQ&oe=670E94C5',
  //   'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/391719363_122096324246086617_6162034278027518019_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=AssqNg9Mt2gQ7kNvgESuXL0&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=AOa30VXRcZLbEA52QU93-nP&oh=00_AYCcg37DXGBmUrT6wl5klDibjIwt8iowUHkHSYF4Lr7ieQ&oe=67187964',
  //   'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/392930969_122096324222086617_2485170338021911442_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Eaqtg0t8EGkQ7kNvgH9nMW1&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=AYvBiMUW1tz4OkKXRjqC3H8&oh=00_AYBKuhGbZFn7bWT7ebfa2PtLB-KjjXtrivWUS08H4xrkMQ&oe=67188924',
  // ]; // เพิ่ม URL ของรูปภาพที่ต้องการแสดงใน carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // ฟังก์ชันสำหรับเปลี่ยนรูปภาพ
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">ทริปคลุกฝุ่นทัวร์</h1>

      {/* Trip Content Section */}
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Trip Details */}
        <div className="border border-gray-400 p-4 w-1/2 bg-gray-100 rounded-lg">
        <p dangerouslySetInnerHTML={{ __html: trip?.detail }}></p>
        </div>

        {/* Trip Image Carousel */}
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
        <Link className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
          สมัครเข้าร่วมทริป
        </Link>
      </div>
    </div>
  );
};

export default TourDetail;





