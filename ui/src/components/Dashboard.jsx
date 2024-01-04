import {  Avatar, Badge, Divider, IconButton,  } from '@mui/joy'
import React from 'react';
import { LuBell } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

import { DiCodeigniter } from "react-icons/di";
import { SectionWrapper } from '../hoc';
import TableA from './table/Table';
import ContainerA from './container/Container';
import NavBarA from './navbar/NavBar';

function createData(name, calories, fat, carbs, protein, arrival, log) {
  return { name, calories, fat, carbs, protein, arrival,log };
}

const rows = [
  createData('Dec 04, Mon', 159, "9h 59m", "9h 59m", "0h 59m","On Time"),
  createData('Dec 03, Sun', 237, "Full Day Weekly Off", " "," "),
  createData('Dec 02, Sat', 262, "8h 59m", "9h 59m", "0h 30m"),
  createData('Dec 01, Fri', 305, "8h 59m", "9h 59m", "1h 30m", "0h 30m late"),
  createData('Nov 30, Thu', "","Sick Leave","",""),
];

const Dashboard = () => {


  return (
    <div className='background_img  p-2 h-full w-full'>
    
    <NavBarA />
    <h4 className='my-4 p-5 text-sm'>My Space /<span className=' text-orange-700'>Attendance</span> </h4>
    
      <ContainerA />

    <h4 className='mx-2 p-4'>Logs & Requests</h4>
    <div className='mx-4 flex flex-1 space-x-4'>    
    <h3 className='bg-orange-500 p-2 rounded-md'>Attendance Log</h3>
    <Divider orientation='vertical'/>
    <h3 className='bg-black p-2 rounded-md'>Attendance Requests</h3>
    </div>
    
    <div className='mx-2 table-auto p-6 text-white rounded-md '>
     <TableA rows={rows}/>
    </div>

    </div>
  )
}

export default SectionWrapper(Dashboard,'dashboard')
