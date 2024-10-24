import React from 'react';
import { useState } from 'react';

const Recommend = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ข้อมูลของรูปภาพใน Carousel
  const images = [
    {
      src: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/458610634_1066367728191659_3618401437566599220_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Td14O0Ip7H0Q7kNvgH0RFve&_nc_zt=23&_nc_ht=scontent.fbkk7-2.fna&_nc_gid=Aih1ds2rbO0at_ZE4_NlrIQ&oh=00_AYC-LTNe3fXHK9nC3jlTWcwZtD5Wb-PWQUiTsntfAHkQkQ&oe=671EF649',
      
    },
    {
      src: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/458776459_1066312494863849_6541272187055259468_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wkVn63JaLmEQ7kNvgGZSkzE&_nc_zt=23&_nc_ht=scontent.fbkk7-2.fna&_nc_gid=AXzJOqE9oKeWlRqf9vQJ9Dg&oh=00_AYBZ1q3hXkRHojUvkn6Pkfc4o8832_38qPUaA2-Ry54dMA&oe=671F046D',
   
    }, 
    {
      src: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/456168183_1052898909538541_4228610203031770298_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6I4OozjJsq0Q7kNvgE9Lxku&_nc_zt=23&_nc_ht=scontent.fbkk7-2.fna&_nc_gid=AD2UvzdGq0qYl-0q7pbX9R-&oh=00_AYCK52Y-d_tkDyCESmpJ4YsLC7bGk76M2SA4_iQuOPo37A&oe=671F0252',
    
    },
    {
      src: 'https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/448223653_1014245410070558_8056054403206880785_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MiN8d51Zga8Q7kNvgH_rtLm&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=AMS6Ny0rpgkrMQhRijUCFaR&oh=00_AYBVthW-OSuBRbbPTuuD23MQcTTpXRrpX_LSeX8XPIspyw&oe=671F2082',
      
    },
    {
      src: 'https://www.uptomego.com/wp-content/uploads/2023/02/4-7.png',
      
    },
    {
      src: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/426044439_939157990912634_191051909065610548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BuWfZ8aoHq8Q7kNvgFyHeCm&_nc_zt=23&_nc_ht=scontent.fbkk7-2.fna&_nc_gid=A6LgdYRozBo-cnhikB7mqg7&oh=00_AYBwX5FSKQ0k1_4CMX0zP3fPVvFrdOjo7CYtkyQ6AztmWw&oe=671F0C27',
      
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
