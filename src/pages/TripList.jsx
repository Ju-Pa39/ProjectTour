import React, { useState } from "react";
import tripStore from "./Store/TripStore";

function TripList(props) {
  const { data, budget } = props


  const filteredDupLocation = data.filter((item, index) => {
    return data.findIndex(t => t.location.name === item.location.name) === index;
  });

  const getAllLocations = tripStore((state) => state.getAllLocations);


  const hdlOnClick = (id) => {
    try {
      getAllLocations(id)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="min-h-screen flex flex-col " >
      {/* Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-4 text-white">งบ {budget} บาท</h1>
        <p className="text-lg mb-8 text-white">เลือกโปรแกรมสถานที่ที่สามารถไปได้</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredDupLocation.map((destination, index) => (
            <button onClick={() => hdlOnClick(destination.location.id)}
              key={index}
              className="w-48 h-64 bg-gray-200 flex items-center justify-center text-lg font-semibold rounded-md shadow-md">
              {destination.location.name}
            </button>
          ))}
        </div>

      </main>
    </div>
  );
}

export default TripList;

