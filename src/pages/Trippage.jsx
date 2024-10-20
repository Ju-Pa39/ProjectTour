import React from "react";
import tripStore from "./Store/TripStore";

const TourPage = (props) => {
const { budget } = props

const trips = tripStore((state) => state.trips);
const trip = tripStore((state) => state.trip);


const getAllTrip = tripStore((state) => state.getAllTrip);
const hdlOnClick =  (id) => {
  try {
    getAllTrip(id)
    console.log(id)
  } catch (err) {
    console.log(err)
  }
}

console.log("trips",trip)
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
          <div  className="space-y-4">

            {trips?.trip?.map((destination, index) => (
              <div
              key={destination.id} 
              type="button"
              onClick={() => hdlOnClick(destination.id)}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    {/* Tour Image Placeholder */}
                    รูปทัวร์
                  </div>
                  <div>{destination.tourCompany.name} {new Date(destination.startdate).toLocaleDateString()}</div>
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
