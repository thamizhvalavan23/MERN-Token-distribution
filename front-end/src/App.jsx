import React, { useContext } from 'react'
import Home from './Home/Admin'
import { ToastContainer, toast } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Adminpanel from './page/Adminpanel'
import Addfile from './page/Addfile'
import Addagent from './page/Addagent'
import Allagents from './page/Allagents'
import { Appcontext } from './Appcontext/Appcontext'
import Sidebar from './page/Sidebar'

const App = () => {

  const { token } = useContext(Appcontext)

  return token ? (
    <div>
    <ToastContainer />
    <Adminpanel />
    <div className='flex flex-start'>
    <Sidebar />
    <div>
      <Routes>
      <Route path='/add-file' element={<Addfile />} />
        <Route path='/add-agent' element={<Addagent />} />
        <Route path='/' element={<Allagents />} />
      </Routes>
    </div>
    </div>
  </div>
  ) : (
    <div>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
