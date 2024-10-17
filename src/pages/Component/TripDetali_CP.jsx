import React from 'react'

function TripDetali() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {/* Main Content */}
      <div className="flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{trip?.price}</h1>

        <div className="flex">
          {/* Trip Description */}
          <div className="flex-grow bg-white p-4">
            <p>ทริป ปักษ์เหนือใต้ลอซู ออกผจญภัยกลางป่าหนึ่ง 3วัน2คืน (ไม่รวมวันเดินทาง)</p>
            <p className="mt-4 font-bold">#เตือนรับฝุ่นขาวๆหายใจ 5 วัน</p>
            <ul className="list-disc pl-6">
              <li>ฟูจิประเทศไทย (การเดินเท้า)</li>
              <li>เดินโขด 2 วัน 1 คืน</li>
              <li>พร้อมซองนอนใหม่ๆ</li>
              <li>ไม้เท้าเดินป่า 1 อัน</li>
            </ul>
            <p className="mt-4 font-bold">#ท้าทายสุดๆ</p>
            <p>- วันแห่งชัยชนะใช้ทักษะ 5 วัน (พร้อมรับวันไว้ได้เมื่อออกมา)</p>
            <p className="mt-4">
              GoGo...เส้นทางวิวสวย...ของผาผ้าใบพร้อม น้ำตกปิตุ๊โกท(น้ำตกรูปหัวใจ)
              ป่าที่เต็มไปด้วยเถาวัลย์และธรรมชาติของขุนเขา ซื้อของฝากได้ที่ป้ายน้ำตกดอยหลวงตาก จ.สุโขทัย จ.ตาก
            </p>
            
          </div>

          {/* Image Section */}
          <div className="flex-grow-0">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/460280234_1071937364301362_4246267936584596257_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mYR_1eoDvDoQ7kNvgFwCnad&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AUr4K94OntwDEv9_ceCrmbC&oh=00_AYBBDvGUX-K91wo4ATOXgbHIJ2Rrt_gX2a-DaEPbOZ09lQ&oe=670E94C5" // Replace with actual image URL
              alt="ทริปคลุกฝุ่นทัวร์"
            />
          </div>
        </div>

        {/* Carousel Dots and Call-to-Action */}
        <div className="mt-6 flex justify-center items-center">
          
          {/* Call to Action Button */}
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg">
            สมัครเข้าร่วมทริป
          </button>
        </div>
      </div>
    </div>
  )
}

export default TripDetali