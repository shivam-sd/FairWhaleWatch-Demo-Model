import React from 'react'
import {Link} from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className='flex items-center justify-center w-full flex-col'>
        <h1 className='mb-10 mt-5 bg-red-500 text-white' >Admin Dashboard</h1>
      <div className='flex items-center gap-10 flex-wrap'>
        <Link to={"/herosection"} className='bg-blue-600 text-white text-xl p-2 rounded-
        xl'>HeroSection</Link>
        <Link to={"/herowatches"} className='bg-blue-600 text-white text-xl p-2 rounded-
        xl'>ADD Hero Section Men's Watche</Link>
        <Link to={'/herowomenwatches'} className='bg-blue-600 text-white text-xl p-2 rounded-
        xl'>ADD Hero Section WoMen's Watche</Link>
      </div>
    </div>
  )
}

export default AdminDashboard
