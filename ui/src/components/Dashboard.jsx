import { Autocomplete, Avatar, Badge, Box, Button, Container, Divider, IconButton, Input } from '@mui/joy'
import React from 'react';
import { LuBell } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { about } from '../assets';
import { DiAtom } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import { IoIosArrowDown } from "react-icons/io";
import { RiRestTimeFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import Table from '@mui/joy/Table';
import { CgPlayListSearch } from "react-icons/cg";
import { IoFolderOutline } from "react-icons/io5";
import { FcComboChart } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import { GoStop } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { motion } from 'framer-motion';

import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

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
    <div className='violet-gradient  p-2 h-full w-full'>
    <div className='flex flex-col space-y-2 mx-5 px-10 md:flex-row md:space-between md:items-center md:space-x-6  ' >
      <input className='w-full h-10 bg-gray-700 rounded-md'  placeholder="search here…" />
      <IconButton size='sm'  variant='solid' color='neutral'>
        <Badge color='danger'>
        <LuBell />
        </Badge>
      </IconButton>
      <IconButton size='sm' variant='solid' color='neutral'>
        <Badge color='danger'>
        <MdOutlineMail />
        </Badge>
      </IconButton>
      <IconButton size='sm' variant='soft' >
         <DiCodeigniter />
      </IconButton>
      
    
      <Avatar size='sm' alt='user' src={about} />
    </div>
    <h4 className='my-4 p-5 text-sm'>My Space /<span className=' text-orange-700'>Attendance</span> </h4>
    <motion.div variants={fadeIn("down","tween",0.2,1)}>
    <Tilt
       options={{
        max:45,
        scale:1,
        speed:450
      }}>
    <div className='w-[325px] mx-3 md:w-auto md:h-[220px] mr-2 border-both borderA rounded-md border-blue-100 borlder-2 bg-black'>
     <div className="flex flex-col md:grid md:grid-cols-[40%_20%_35%] gap-4">
     <div className='py-2'>
       <h4 className='font-semibold mx-2'>Attendance Status</h4>
       <div className='flex space-x-3 mx-2'>
        <p className='my-2 '>Last week</p> 
        <Button size='xs' variant='smoke'>
        <IoIosArrowDown />
        </Button>
       </div>
        <div className='mt-5 p-4 flex mx-4 space-x-2 md:space-x-8 space-between items-center borderA rounded-lg'>
        <div><IoMdTime /></div>
        <div>
            <p className='text-sm'>Avg hrs / Day</p>
            <p className='text-xs'>(6hrs 48m)</p>
        </div>
        <div><RiRestTimeFill /></div>
       
        <div>
            <p className='text-sm'>On Time Arrival</p>
            <p className='text-xs'>90%</p>
        </div>
      </div>
       
     </div>
      <div className='py-2 ' >
        <h4 className='font-semibold mx-2'>Timings</h4>
        <div className='mx-2 my-2 flex space-between items-center space-x-3'>
            <div className='text-sm borderA rounded-full'>M</div>
            <div className='text-sm borderA rounded-full'>T</div>
            <div className='text-sm borderA rounded-full text-orange-500'>W</div>
            <div className='text-sm borderA rounded-full'>T</div>
            <div className='text-sm borderA rounded-full'>F</div>
            <div className='text-sm borderA rounded-full text-green-700'>S</div>
            <div className='text-sm borderA rounded-full text-red-700'>S</div>

        </div>
         <div className='mt-4 p-2  items-center borderA rounded-lg'>
            <div className='flex md:space-x-4'>
            <h4 className='font-semibold'>Today</h4>
            <p className='text-xs'>(09:30AM - 06:30PM)</p>
            </div>
            
            <div className=' mt-2 flex space-x-1'>
            <h3 >Duration:9h 0m</h3>
            <h4 className='text-xs'>Break: 0m</h4>
            </div>

         </div>
      </div>
      <div className='py-2'>
        <h4 className='font-semibold ms-2 text-center'>Action</h4>
        <div className='mt-6 p-4 flex flex-col Md:space-between md:items-center md:space-x-5'>
            <div className='  p-2 borderA rounded-md space-y-3'>
              <h1>04:04:39 PM</h1>
              <p>wed 06, Dec 2023</p>
            </div>
            <div className='flex flex-col space-y-3'>
                <button className=' bg-orange-500 rounded-md text-black'>Leave Request</button>
                 <button className=' bg-orange-500 rounded-md text-black'>work From Home</button>
            </div>
        </div>
      </div>
     
     </div>

    </div>
    </Tilt>
    </motion.div>

    <h4 className='mx-2 p-4'>Logs & Requests</h4>
    <div className='mx-4 flex flex-1 space-x-4'>    
    <h3 className='bg-orange-500 p-2 rounded-md'>Attendance Log</h3>
    <Divider orientation='vertical'/>
    <h3 className='bg-black p-2 rounded-md'>Attendance Requests</h3>
    </div>
     <motion.div 
      variants={fadeIn("up","tween",0.2,1)}>
    <div className='mx-2 table-auto p-6  rounded-md '>
        <Table
        className='table-auto'
        variant="soft" borderAxis="bothBetween">
              <thead>
             <tr borderAxis='bothBetween'>
          <th style={{width:'25%', background:'black'}}>December, 2023</th>
          <th style={{ background:'orange'}} >30 Days</th>
          <th style={{ background:'black'}}>Nov</th>
          <th style={{ background:'black'}}>Oct</th>
          <th style={{ background:'black'}}>Sep</th>
          <th style={{ background:'black'}}>Aug</th>
          <th style={{ background:'black'}}>Jul</th>
          <th style={{ background:'black'}}>Jun</th>
          <th style={{ background:'orange'}}><CgPlayListSearch /></th>
          <th style={{ background:'white'}}><IoFolderOutline /></th>
        </tr>
        </thead>
        </Table>
    <Table className='table-auto text-white'>
      
      <thead style={{background:'black'}}>
       
        <tr>
          <th style={{ width: '20%' }}>Date</th>
          <th style={{ width: '20%' }}>Attendance Visual</th>
          <th style={{ width: '20%' }}>Effective Hours</th>
          <th>Gross Hours</th>
          <th>Extra Hours</th>
          <th>Arrival</th>
          <th>Log</th>
        </tr>
      </thead>
      <tbody style={{color:'white'}}>
        {rows.map((row) => (
          <tr style={{ background: row.name === 'Dec 03, Sun' ? 'gray' : row.name ===  'Nov 30, Thu'?'orange':'' }}key={row.name}>
           { row.name ===  'Dec 03, Sun'?<td>{row.name}<span style={{background:"orange", color:'white'}}>W-OFF</span></td>:
            row.name ===  'Nov 30, Thu'?<td>{row.name}<span style={{background:"purple", color:"white"}}>Leave</span></td>:<td>{row.name}</td>}
           { row.name ===  'Dec 03, Sun'?<td></td> :
           row.name ===  'Nov 30, Thu'? <td></td>: <td style={{ display:'flex',flexDirection:"column", alignItems:'center'}}><FcComboChart /></td>}
            { row.name ===  'Dec 03, Sun'?<td>{row.fat}</td>:
              row.name ===  'Nov 30, Thu'?<td>{row.fat}</td> :
            <td >
                 <div className='flex flex-auto'>
                <FcPieChart />
                {row.fat}
                </div>
            </td>}
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
            <td>{row.arrival}</td>
            {  row.name ===  'Dec 04, Mon'?  <td style={{color:"yellow"}}><GoStop /></td> :
               row.name ===  'Dec 02, Sat'?  <td style={{color:"green"}}><FaCheckCircle /></td> :
               row.name ===  'Dec 01, Fri'?  <td style={{color:"red"}}><IoTimerOutline /></td> :
                <td>{row.log}</td>
            }
            
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Dashboard,'dashboard')
