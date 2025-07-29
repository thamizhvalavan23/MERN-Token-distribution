import React, { useContext } from 'react'
import { Appcontext } from '../Appcontext/Appcontext'

const Adminpanel = () => {

    const {setToken} = useContext(Appcontext)

  return (
    <div>
     <div className='flex justify-between items-center my-2 bg-blue-50 mx-6'>

<h1 className=' text-lg sm:text-2xl flex'>Admin_<p className='text-lg sm:text-3xl text-blue-500'>Panel</p></h1>

  <button onClick={()=> setToken()} className="sm:block hidden sm:w-[150px] h-[40px] text-white font-bold cursor-pointer rounded-md bg-blue-500 " type='submit'>Logout</button>

</div>
<hr  className='border border-gray-500 mx-6'/>


    </div>
  )
}

export default Adminpanel
