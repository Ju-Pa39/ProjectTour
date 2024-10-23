import React, { useEffect, useState, useRef } from "react";
import tripStore from "../Store/TripStore";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UpLoadFile from "../Component/Uploadfile";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTripForm = () => {
  const getTripById = tripStore((state) => state.getTripById);
  const { id } = useParams()
  const quillRef = useRef(null);
const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState(null);

  const getTripInfo = async () => {
    const trip = await getTripById(id);
    setFormData({
      tour: trip.tourCompany.id,
      location: trip.location.id,
      startDate: trip.startdate,
      endDate: trip.enddate,
      quantity: trip.quantity,
      price: trip.price,
      details: trip.detail,
      images: trip.Image,
    });
    // setExistingImages(trip.Images); // Set existing images
  };

  const [existingImages, setExistingImages] = useState([]); // State for storing existing images

  // Fetch trip data to pre-fill the form
  useEffect(() => {
    getTripInfo();
  }, []);

  const updateTrip = tripStore((state) => state.updateTripById);

  // Get tour and location data
  const tour = tripStore((state) => state.tour);
  const getTour = tripStore((state) => state.getTour);
  useEffect(() => {
    getTour();
  }, []);

  const location = tripStore((state) => state.location);
  const getLocation = tripStore((state) => state.getLocation);
  useEffect(() => {
    getLocation();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Quill editor change
  const handleChangeQuill = (content) => {
    setFormData({ ...formData, details: content });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        tourCompany_Id: +formData.tour,  
        location_Id: +formData.location,  
        startdate: formData.startDate,   
        enddate: formData.endDate,       
        quantity: +formData.quantity,
        price: +formData.price,
        detail: formData.details,       
        image: formData.images
      };
      console.log(updateData);
      await updateTrip(id, updateData); 
      console.log("Trip updated successfully:", formData);
      navigate('/Owner/ListTrip')
    } catch (error) {
      console.log("Error updating trip:", error);
    }
  };

  // Handle image delete
  const handleDeleteImage = async (imageId) => {
    try {
      // Perform image delete request here
      await tripStore.deleteImage(imageId); 
      setExistingImages(prev => prev.filter((image) => image.id !== imageId));
    } catch (error) {
      console.log("Error deleting image:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center text-2xl font-bold mb-6">เที่ยวตามงบ</div>

        {/* Form */}
        <h2 className="text-center text-lg font-bold mb-4">แก้ไขข้อมูลทริป</h2>

        {formData && <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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
              {tour?.tour?.map((destination) => (
                <option key={destination.id} value={destination.id}>
                  {destination.name}
                </option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
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
              {location?.map((destination) => (
                <option key={destination.id} value={destination.id}>
                  {destination.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Inputs */}
          <div className="flex space-x-2">
            <input
              type="date"
              name="startDate"
              value={formData.startDate ? new Date(formData.startDate).toISOString().split("T")[0] : ""}
              onChange={handleChange}
              className="flex-1 p-2 bg-gray-200 rounded"
            />
            <span className="self-center text-sm">ถึง</span>
            <input
              type="date"
              name="endDate"
              value={formData.endDate ? new Date(formData.endDate).toISOString().split("T")[0] : ""}
              onChange={handleChange}
              className="flex-1 p-2 bg-gray-200 rounded"
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

          {/* Quantity Input */}
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
            <ReactQuill
              ref={quillRef}
              name="details"
              theme="snow"
              value={formData.details}
              onChange={handleChangeQuill}
            />
          </div>

          {/* Image Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm text-gray-600">อัปโหลดรูป</label>
            <UpLoadFile formData={formData} setFormData={setFormData} />

            {/* Display Existing Images */}
            <div className="flex flex-wrap mt-4">
              {existingImages.map((image) => (
                <div key={image.id} className="relative m-2">
                  <img
                    src={image.url}
                    alt="Uploaded"
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(image.id)}
                    className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full"
                  >
                    ลบ
                  </button>
                </div>
              ))}
            </div>
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
        </form>}
      </div>
    </div>
  );
};

export default UpdateTripForm;