import React from "react";

const TourPage = (props) => {
  const { budget, data } = props
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {/* Main Content */}
      <div className="flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        {/* Left Column */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
            {/* Placeholder Image */}
            <span className="text-center">Placeholder</span>
          </div>
          <div className="mt-4 text-lg font-semibold">งบ {budget} บาท</div>
        </div>

        {/* Right Column (Tour List) */}
        <div className="flex-grow w-full">
          {/* Search and Filter */}
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="ค้นหาทัวร์"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="ml-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
              <option>ราคาถูกไปแพง</option>
              <option>ราคาแพงไปถูก</option>
            </select>
          </div>

          {/* Tour List */}
          <div className="space-y-4">

            {data.map((destination, index) => (
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    {/* Tour Image Placeholder */}
                    รูปทัวร์
                  </div>
                  <div>{destination.tourCompany.name} {destination.startdate}</div>
                </div>
                <div className="text-lg font-semibold">{destination.price} บาท/คน</div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;


// import React from 'react';

// const TourList = () => {
//   const tours = [
//     { name: 'คลุกฝุ่นทัวร์ กรกฎาคม 2567', price: '2800 บาท/คน' },
//     { name: '2ใบสนทัวร์ กรกฎาคม 2567', price: '2900 บาท/คน' },
//     { name: 'เที่ยวกันทัวร์ กรกฎาคม 2567', price: '3000 บาท/คน' },
//   ];

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-gray-100 p-4 flex flex-col items-center">
//         <div className="w-48 h-48 bg-gray-300 flex items-center justify-center mb-4">
//           โปรโต้ละซู
//         </div>
//         <p className="text-lg font-semibold">งบ 3000 บาท</p>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 bg-white p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">LOGO</h1>
//           <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//         </div>

//         {/* Search and Filter */}
//         <div className="flex space-x-4 mb-6">
//           <input
//             type="text"
//             placeholder="ค้นหาทัวร์"
//             className="w-full border border-gray-300 p-2 rounded-md"
//           />
//           <select className="border border-gray-300 p-2 rounded-md">
//             <option>ราคาถูกไปแพง</option>
//             <option>ราคาแพงไปถูก</option>
//           </select>
//         </div>

//         {/* Tour List */}
//         <div className="space-y-4">
//           {tours.map((tour, index) => (
//             <div key={index} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
//               <div className="flex items-center space-x-4">
//                 <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
//                   รูปทัวร์
//                 </div>
//                 <p>{tour.name}</p>
//               </div>
//               <p className="text-lg font-semibold">{tour.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourList;
