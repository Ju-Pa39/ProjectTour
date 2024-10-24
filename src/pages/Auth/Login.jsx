import React, { useState } from "react";
import axios from 'axios'
import {  } from "module";
import { useNavigate } from "react-router-dom";
import tripStore from "../Store/TripStore";
import useUserStore from "../Store/userStore";
import { toast } from "react-toastify";


const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Login
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  })

  const postLogin = useUserStore(state => state.postLogin)

  const navigate = useNavigate()

  //Register
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    role: "",
    phone: ""
  })

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Login
  const hdlOnChangLogin = (e) => {
    console.log(e.target.name, e.target.value)
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }

  const hdlSubmitLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await postLogin(formLogin)
      console.log(formLogin)
      console.log(res.data.payload.role)
      toast.success('เข้าสู่ระบบสำเร็จ')
      if (res.data.payload.role === 'OWNER') {
        navigate('/owner')
      } else if (res.data.payload.role === 'CUSTOMER') {
        navigate('/customer/RegisterTrip')
      } 
    } catch (err) {
      console.log(err)
      const errMsg = err.response.data.message
      alert(errMsg)
    }
  }

  //Register
  const hdlOnChang = (e) => {
    console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const hdlSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    if (form.password !== form.confirmPassword) {
      return alert('confirmPassword ไม่ถูกต้อง')
    }
    try {
      const res = await axios.post('http://localhost:8000/auth/register', form)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  console.log("this is login page")
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Login Box */}
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="text-center text-2xl font-bold mb-8">LOGO</div>
        <form onSubmit={hdlSubmitLogin}>
          {/* Username Input */}
          <div className="mb-4">
            <input
              name="email"
              onChange={hdlOnChangLogin}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              name="password"
              onChange={hdlOnChangLogin}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button  className="w-full bg-gray-500 text-white py-2 rounded-md">
              Login
            </button>
          </div>

          {/* Create Account Link */}
          <div className="text-center text-sm text-gray-600">
            <button onClick={toggleModal} className="hover:underline">
              สร้างบัญชีผู้ใช้
            </button>
          </div>
        </form>
      </div>

      {/* Modal Register */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">สร้างบัญชีผู้ใช้</h2>

            {/* Email/Phone Input */}
            <form onSubmit={hdlSubmit}>
              <div className="mb-4">
                <input
                  name="email"
                  onChange={hdlOnChang}
                  type="text"
                  placeholder="Email หรือ เบอร์โทร"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <input
                  name="password"
                  onChange={hdlOnChang}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                />
              </div>

              {/* Confirm Password Input */}
              <div className="mb-4">
                <input
                  name="confirmPassword"
                  onChange={hdlOnChang}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <select
                  name="role"
                  onChange={hdlOnChang}
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                >
                  <option value="">Role</option>
                  <option value="CUSTOMER">CUSTOMER</option>
                  <option value="OWNER">OWNER</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  name="firstName"
                  onChange={hdlOnChang}
                  type="text"
                  placeholder="firstName"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <input
                  name="lastName"
                  onChange={hdlOnChang}
                  type="text"
                  placeholder="lastName"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <input
                  name="phone"
                  onChange={hdlOnChang}
                  type="text"
                  placeholder="phone"
                  className="w-full px-4 py-2 border rounded-md bg-gray-200 text-gray-800"
                />
              </div>


              {/* Create Account Button */}
              <div className="flex justify-between">
                <button
                  onClick={toggleModal}
                  className="bg-gray-400 text-white py-2 px-6 rounded-lg"
                >
                  ยกเลิก
                </button>
                <button  className="bg-blue-500 text-white py-2 px-6 rounded-lg">
                  สร้างบัญชี
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
