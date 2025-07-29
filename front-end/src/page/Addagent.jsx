import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Addagent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !phone || !password) {
      toast.error("All fields are required!")
      return
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://mern-token-distribution.onrender.com/api/admin/add-agent",
        { name, email, phone, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      toast.success(res.data.message || "Agent added successfully!")
      setName("")
      setEmail("")
      setPhone("")
      setPassword("")
    } catch (error) {
      console.error(error)
      toast.error(error.response?.data?.message || "Failed to add agent")
    }
  }

  return (
    <div className="flex items-center w-full justify-center m-auto ml-[200px] mt-44 bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add Agent</h2>

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          placeholder="Phone (e.g. +919876543210)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          className="w-full p-2 mb-6 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Add Agent
        </button>
      </form>
    </div>
  )
}

export default Addagent
