import React, { useEffect, useState, useRef } from "react";
import tripStore from "../Store/TripStore";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UpLoadFile from "../Component/Uploadfile";
import { useNavigate } from "react-router-dom";
import useUserStore from "../Store/userStore";
import { toast } from "react-toastify";

const CreateTripForm = () => {
  const quillRef = useRef(null)
  // State for form fields
  const [formData, setFormData] = useState({
    tour: "",
    location: "",
    startDate: "",
    endDate: "",
    quantity: 0,
    price: "",
    details: "",
    images: [],
  });
  // console.log(formData)
  const token = useUserStore((state) => state.token);
  const postTrip = tripStore((state) => state.postTrip);
  const tour = tripStore((state) => state.tour);
  const getTour = tripStore((state) => state.getTour);
  useEffect(() => {
    getTour(token)
  }, [])

  const navigate = useNavigate();

  const location = tripStore((state) => state.location);
  const getLocation = tripStore((state) => state.getLocation);
  useEffect(() => {
    getLocation()
  }, [])
  // console.log(getLocation)

  // Handler to update form state
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData)

  const handleChangeQuill = (Content) => {
    setFormData({ ...formData, details: Content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postTrip(formData, token)
      console.log("test", formData)
      navigate('/owner/trip')
      toast.success('สร้างทริปสำเร็จ')
    } catch (error) {
      console.log(error)
    }
    // Add form submit logic, e.g., send data to the server
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center text-2xl font-bold mb-6">เที่ยวตามงบ</div>

        {/* Form */}
        <h2 className="text-center text-lg font-bold mb-4">กรอกข้อมูลทริป</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Tour Dropdown */}
          <div>
            <select
              name="tour"
              value={formData.tour}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            >
              <option value="" disabled>
                เลือกทัวร์
              </option>
              {tour?.tour?.map((destination, index) => (
                <option key={destination.id} value={`${destination.id}`}>{destination.name}</option>
              ))}
            </select>
          </div>

          {/* Location Input */}
          <div>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            >
              <option value="" disabled>
                เลือกสถานที่
              </option>
              {location?.map((destination, index) => (
                <option key={destination.id} value={`${destination.id}`}>{destination.name}</option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="flex-1 p-2 bg-gray-200 rounded" xs
            />
            <span className="self-center text-sm">ถึง</span>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              c className="flex-1 p-2 bg-gray-200 rounded"
            />
          </div>

          {/* Price Input */}
          <div>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="ราคา"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* quantity Input */}
          <div>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="จำนวนที่จองได้"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* Details Textarea */}
          <div className="col-span-2">
            <ReactQuill ref={quillRef} name="details" theme="snow" value={formData.details} onChange={handleChangeQuill} />
          </div>

          {/* Image Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm text-gray-600">
              อัปโหลดรูป
            </label>

            <UpLoadFile formData={formData} setFormData={setFormData} />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripForm;