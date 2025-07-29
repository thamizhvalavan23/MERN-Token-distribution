import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Addfile = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    if (!selected) return

    const allowedTypes = ['text/csv', 
      'application/vnd.ms-excel', 
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']

    if (!allowedTypes.includes(selected.type)) {
      toast.error("Only CSV, XLS, XLSX files are allowed")
      e.target.value = null
      setFile(null)
      return
    }

    setFile(selected)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      toast.error("Please upload a valid file")
      return
    }

    try {
      const formData = new FormData()
      formData.append('file', file)

      const token = localStorage.getItem('token')

      const res = await axios.post('https://mern-token-distribution.onrender.com/api/admin/add-file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      toast.success(res.data.message || "File uploaded & tasks distributed successfully!")
      setFile(null)
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.message || "Upload failed")
    }
  }

  return (
    <div className="flex items-center w-full justify-center m-auto ml-[200px] mt-44 bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Upload Task File</h2>

        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="mb-4 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0 file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Upload & Distribute
        </button>
      </form>
    </div>
  )
}

export default Addfile
