import { Button } from '@mui/joy'
import React from 'react'
import { IoIosArrowDown, IoMdTime } from 'react-icons/io'
import { RiRestTimeFill } from 'react-icons/ri'


const ContainerA = () => {
  return (
    <div className='w-[325px] mx-3 md:w-auto md:h-[240px] mr-2 border-both borderA rounded-md border-blue-100 borlder-2 bg-black'>
     <div className="flex flex-col md:grid md:grid-cols-[40%_20%_38%] gap-2">
     <div className='py-2'>
       <h4 className='font-semibold mx-2'>Attendance Status</h4>
       <div className='flex space-x-3 mx-2'>
        <p className='my-2 '>Last week</p> 
        <Button size='xs' variant='smoke'>
        <IoIosArrowDown />
        </Button>
       </div>
        <div className='mt-5 p-4 flex mx-4 space-x-2 md:space-x-8 space-between items-center borderA rounded-lg'>
        <div ><IoMdTime style={{width:'2.6rem',height:'8vh'}} /></div>
        <div>
            <p className='text-sm'>Avg hrs / Day</p>
            <p className='text-xs'>(6hrs 48m)</p>
        </div>
        <div><RiRestTimeFill style={{width:'2.6rem',height:'8vh', color:"green"}}/></div>
       
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
         <div className='mt-4 p-2 md:p-4 items-center borderA rounded-lg'>
            <div className='flex md:space-x-4'>
            <h4 className='font-semibold'>Today</h4>
            <p className=' text-sm'>(09:30AM - 06:30PM)</p>
            </div>
            
            <div className=' mt-2 flex space-x-1'>
            <h3 >Duration:9h 0m</h3>
            <h4 className='text-xs'>Break: 0m</h4>
            </div>

         </div>
      </div>
      <div className='py-2'>
        <h4 className='font-semibold ms-2 md:text-center'>Action</h4>
        <div className='mt-6 p-4 md:py-6 flex flex-col md:flex-row md:justify-between md:items-center md:space-x-1'>
            <div className='  p-2 borderA md:p-3 rounded-md space-y-2 '>
              <h1 className=' text-3xl'>04:04:39 PM</h1>
              <p>wed 06, Dec 2023</p>
            </div>
            <div className='flex flex-col space-y-3'>
                <button className=' bg-orange-500 rounded-full text-black'>Leave Request</button>
                 <button className=' bg-orange-500 rounded-full text-black'>work From Home</button>
            </div>
        </div>
      </div>
     
     </div>

    </div>
   
  )
}

export default ContainerA
