import React from 'react';
import { useState } from 'react';

const Recommend = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ข้อมูลของรูปภาพใน Carousel
  const images = [
    {
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/458775652_1066391981522567_7716773856454244057_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3JuH3YpXIP0Q7kNvgEVxmVd&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=AHm8XfkTb-EakmmYtgWxMC1&oh=00_AYANMPMQ7Sf6dp8ib8swmVHSGO9f-nWcAT-SJjfdk5IAMA&oe=6719AACA',
      
    },
    {
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/458610634_1066367728191659_3618401437566599220_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z8m3vajJlHwQ7kNvgGx_pMT&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=AUkDkAfp_daZCHZXyvtsbm7&oh=00_AYBtWowA6wzj9C-lQ1iSBNc4su_EKeBlwcc6zaINY3OVMg&oe=6719B049',
    //   title: 'เลอกวาเดาะ',
    //   description: 'ผ่อนคลายสุดสัปดาห์',
    }, 
    {
      src: 'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/458776459_1066312494863849_6541272187055259468_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3sADdPJlWAAQ7kNvgE1i26-&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=AJdCfrgR0ppz8ZeSDqcbHWM&oh=00_AYA3zLTOhainC4vHAWlSzWYhUr_bubUVSaw91pD-GV3dGQ&oe=671915AD',
    //   title: '5 ภูเขาน่าเที่ยว',
    //   description: 'สูดอากาศบริสุทธิ์',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-150 flex justify-center items-center">
      {/* ปุ่ม Previous */}
      <button
        onClick={handlePrev}
        className="absolute left-80 top-1/2 transform -translate-y-1/2 bg-orange-300 p-2 rounded-full"
      >
        &lt;
      </button>

      {/* รูปภาพแบนเนอร์ (ย่อขนาดเหลือครึ่งหนึ่ง และเพิ่ม margin) */}
      <div className="w-1/2 h-1/2 relative flex items-center justify-center" style={{ margin: '20px' }}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="rounded-lg shadow-lg w-full"
        />
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-2xl font-bold">{images[currentIndex].title}</h1>
          <p className="text-lg mt-2">{images[currentIndex].description}</p>
        </div>
      </div>

      {/* ปุ่ม Next */}
      <button
        onClick={handleNext}
        className="absolute right-80 top-1/2 transform -translate-y-1/2 bg-orange-300 p-2 rounded-full"
      >
        &gt;
      </button>

      {/* จุดเลื่อน */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
