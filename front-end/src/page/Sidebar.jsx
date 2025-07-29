import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' bg-blue-100 h-[90vh] mt-1 ml-2'>
        <div className='w-[300px] grid'>
          <NavLink to='/'><button className='w-[200px] h-[40px] cursor-pointer m-5 rounded-md bg-blue-500 text-white'  type='submit'>All-Agents</button> </NavLink>
         <NavLink to='/add-agent'><button className='w-[200px] h-[40px] cursor-pointer m-5 rounded-md bg-blue-500 text-white' type='submit'>Add-Agents</button></NavLink>
         <NavLink to='/add-file'><button className='w-[200px] h-[40px] cursor-pointer m-5 rounded-md bg-blue-500 text-white' type='submit'>Add-CSV_File</button></NavLink>
        </div>
        <hr />
    </div>
  )
}

export default Sidebar