import { Table } from '@mui/joy'
import React from 'react'
import { CgPlayListSearch } from 'react-icons/cg'
import { FaCheckCircle } from 'react-icons/fa'
import { FcComboChart, FcPieChart } from 'react-icons/fc'
import { GoStop } from 'react-icons/go'
import { IoFolderOutline, IoTimerOutline } from 'react-icons/io5'

const TableA = ({rows}) => {
  return (
    <div>
       <Table
        className='table-auto'
        style={{background:"black"}}
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
    <Table className='table-auto text-white' style={{background:"black"}}>
      
      <thead style={{background:'black', color:'white'}}>
       
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
          <tr style={{ background: row.name === 'Dec 03, Sun' ? 'gray' : row.name ===  'Nov 30, Thu'?'red':'' }}key={row.name}>
           { row.name ===  'Dec 03, Sun'?<td>{row.name}<span style={{background:"orange", color:'white'}}>W-OFF</span></td>:
            row.name ===  'Nov 30, Thu'?<td>{row.name}<span style={{background:"purple", color:"white"}}>Leave</span></td>:<td>{row.name}</td>}
           { row.name ===  'Dec 03, Sun'?<td></td> :
           row.name ===  'Nov 30, Thu'? <td></td>: <td style={{ display:'flex',flexDirection:"column", alignItems:'center'}}><FcComboChart style={{width:"3rem",height:"2rem"}}/></td>}
            { row.name ===  'Dec 03, Sun'?<td>{row.fat}</td>:
              row.name ===  'Nov 30, Thu'?<td>{row.fat}</td> :
            <td >
                 <div className='flex flex-auto'>
                <FcPieChart style={{width:"2rem",height:"2rem"}}/>
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
  )
}

export default TableA
