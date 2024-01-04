import { Avatar, Badge, IconButton } from '@mui/joy'
import React from 'react'
import { DiCodeigniter } from 'react-icons/di'
import { LuBell } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import { about } from '../../assets';

const NavBarA = () => {
  return (
    <div className='space-x-2 space-y-2 mx-5 px-10  flex flex-row md:space-between items-center md:space-x-6  ' >
      <input className='w-full h-10 shadow-md shadow-gray-400 bg-gray-900 rounded-md'  placeholder="search here…" />
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
         <DiCodeigniter style={{ width:"8rem", height:"2.5rem"}} />
      <Avatar size='sm' alt='user' src={about} />
    </div>
  )
}

export default NavBarA
