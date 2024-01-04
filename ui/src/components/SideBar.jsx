import React, { useState } from 'react'
import {  Divider, IconButton} from '@mui/joy';

import { CiHome } from "react-icons/ci";
import { LuBarChart2 } from "react-icons/lu";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import Dashboard from './Dashboard';
import { IoIosArrowUp } from 'react-icons/io';


const SideBar = () => {
  
  return (
    <div className=' text-white flex space-between '>
     
    <div  className='hidden lg:block borderA p-10 m-2 h-[785px] w-[280px] bg-black rounded-md text-white '>
    
   <h1 className='text-[50px] text-cormorant font-extrabold'>KDISD</h1>
   <p className='text-sm'>Interiors & Architecture</p>
   <br />
    <Divider  />
    <div className='flex flex-1 space-between items-center space-x-2'>
    <div className='w-[305px] flex-1 h-0.5  font-extrathin bg-white'/>
    <IconButton size='sm' variant='plain' color='primary'>
      <FaArrowLeft />
    </IconButton>
    </div>
    <div className=' mt-8 flex flex-col space-y-4'>
    <button className=' p-2 flex space-x-10  items-center bg-white rounded-full text-black'>
    <CiHome />
    Home</button>
    <button className='p-2 flex space-x-4 items-center bg-orange-600 rounded-full'>
      <LuBarChart2 />
      My Space
     <IoIosArrowUp />
      </button>
      </div>

    <div className='text-gray-400 cursor-pointer mt-5 space-y-3 px-10 text-sm flex flex-col'>
       <p className='hover:text-orange-500'>Leave</p>
       <p className=' text-orange-600 hover:text-orange-500'>Attendance</p>
       <p className='hover:text-orange-500'>Performance</p>
       <p className='hover:text-orange-500'>Leave</p>

    </div>
   </div>
   <div className='violet-gradent  w-full'>
    <Dashboard />
   </div>
   </div>
  )
}

export default SideBar
