import React from 'react';

const RegisterForm = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>กรอกข้อมูลลงทะเบียน</h2>
      <form>
        <input type="text" placeholder="ชื่อ-นามสกุล" style={inputStyle} />
        <input type="text" placeholder="ชื่อเล่น" style={inputStyle} />
        
        <div style={rowStyle}>
          <select style={selectStyle}>
            <option>เพศ</option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
            <option value="female">OTHER</option>
          </select>
          <input type="number" placeholder="อายุ" style={halfInputStyle} />
        </div>
        
        <input type="text" placeholder="เบอร์ติดต่อ" style={inputStyle} />
        <input type="text" placeholder="ID LINE" style={inputStyle} />
        
        <p>อัปโหลดบัตรประชาชน</p>
        <input type="file" style={inputStyle} />
        
        <p>ธ.กรุงไทย เลขบัญชี xx-xxxxx-xx</p>
        
        <p>อัปโหลดสลิป</p>
        <input type="file" style={inputStyle} />
        
        <button type="submit" style={buttonStyle}>บันทึก</button>
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
