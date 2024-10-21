import React from 'react';
import useUserStore from './Store/userStore';
import tripStore from './Store/TripStore';
import UpLoadFile from './Component/Uploadfile';
import { useState } from 'react';

const RegisterForm = () => {
  const booking = tripStore((state) => state.booking);
  const user = useUserStore((state) => state.user);
  const currentTrip = tripStore((state) => state.currentTrip);
  // console.log(currentTrip)
  // console.log(user)

  const [formData, setFormData] = useState({
    userId: user.id,
    tripId: currentTrip,
    name:"",
    nickName:"",
    gender:"",
    age:"",
    phoneNumber:"",
    LINE: "",
    images: []
  });
 
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const res = await booking(formData)
      console.log(formData)
    } catch (error) {
      console.log(error)
    }
    // Add form submit logic, e.g., send data to the server
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>กรอกข้อมูลลงทะเบียน</h2>
      <p>Tripid {currentTrip}</p>
      <form onSubmit={handleSubmit} >
        <input
        name='name'
        onChange={handleChange} 
        type="text" 
        placeholder="ชื่อ-นามสกุล" 
        style={inputStyle} />

        <input
        name='nickName'
        onChange={handleChange} 
        type="text" 
        placeholder="ชื่อเล่น" 
        style={inputStyle} />
        
        <div style={rowStyle}>
          <select 
          namename='gender'
          onChange={handleChange} 
          style={selectStyle}>
            <option>เพศ</option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
            <option value="female">OTHER</option>
          </select>

          <input 
          name='age'
          onChange={handleChange} 
          type="number" 
          placeholder="อายุ" 
          style={halfInputStyle} />
        </div>
        
        <input 
        name='phoneNumber'
        onChange={handleChange} 
        type="text" 
        placeholder="เบอร์ติดต่อ" 
        style={inputStyle} />

        <input 
        name='LINE'
        onChange={handleChange} 
        type="text" 
        placeholder="ID LINE" 
        style={inputStyle} />
         
        <p>ธ.กรุงไทย เลขบัญชี xx-xxxxx-xx</p>
        <p>อัปโหลดสลิป</p>
        <UpLoadFile formData={formData} setFormData={setFormData} style={inputStyle} />

        
        <button  type="submit" style={buttonStyle}>บันทึก</button>
      </form>
    </div>
  );
};

// Style Objects
const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const halfInputStyle = {
  width: '48%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const selectStyle = {
  width: '48%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  margin: '20px 0',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '16px'
};

export default RegisterForm;
