import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Appcontext } from '../Appcontext/Appcontext';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState("sample@gmail.com")
  const [password, setPassword] = useState("123456")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔐 Prevent default form submission

    try {
      const res = await axios.post("http://localhost:3000/api/admin/login", {
        email,
        password,
      });

      if (res.data.token) {
        console.log("✅ Login successful!");
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate('/')
      } else {
        toast.error("❌ Invalid credentials.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "❌ Login failed.");
    }
  };

  return (
    <div>
      <div className="justify-center items-center text-center m-auto grid h-[600px]">
        <form
          onSubmit={handleSubmit}
          className="justify-center items-center rounded-md p-3 w-[500px]"
          method="POST" // ✅ Optional, for clarity
        >
          <p className="mt-3 text-blue-500 text-2xl font-bold">Admin_Login</p>
          <div className="grid mt-2">
            <input
              className="mt-5 border rounded-md pl-2 font-sans border-gray-300 h-[40px]"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              autoComplete="off"
            />
            <input
              className="mt-5 border rounded-md pl-2 font-sans border-gray-300 h-[40px]"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="off"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="border border-white bg-blue-500 text-xl text-white w-[200px] rounded-md p-2 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
