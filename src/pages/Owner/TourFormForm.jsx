import React, { useState } from "react";

const TourForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    tour: "",
    location: "",
    startDate: "",
    endDate: "",
    price: "",
    details: "",
    images: [],
  });

  // Handler to update form state
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: [...files] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submit logic, e.g., send data to the server
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center text-2xl font-bold mb-6">LOGO</div>

        {/* Form */}
        <h2 className="text-center text-lg font-bold mb-4">กรอกข้อมูลทัวร์</h2>

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
              <option value="tour1">ทัวร์ 1</option>
              <option value="tour2">ทัวร์ 2</option>
              <option value="tour3">ทัวร์ 3</option>
            </select>
          </div>

          {/* Location Input */}
          <div>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="สถานที่"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* Date Range */}
          <div className="flex space-x-2">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
            <span className="self-center">ถึง</span>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* Price Input */}
          <div>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="ราคา"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* Details Textarea */}
          <div className="col-span-2">
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="ข้อมูลรายละเอียดทัวร์"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
              rows="4"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm text-gray-600">
              อัปโหลดรูป
            </label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              multiple
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
            <div className="grid grid-cols-4 gap-2 mt-4">
              {formData.images.length > 0 &&
                Array.from(formData.images).map((file, index) => (
                  <div key={index} className="w-full h-32 bg-green-500"></div>
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
        </form>
      </div>
    </div>
  );
};

export default TourForm;