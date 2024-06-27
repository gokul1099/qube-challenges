import React from 'react'
import { Appliance } from '../types'
import { useRouter } from 'next/navigation'
function TableItem({serialNo,theatreName,location,bandwidth,avgBandwidth,deviceStatus,downloadStatus,osVersion}:Appliance) {
    const router = useRouter()
  return (
    <tr onClick={()=>router.push(`/device?${serialNo}`)} className='cursor-pointer hover:bg-slate-200'>
        {/* <Link href={`/device?${serialNo}`}> */}
        <td className='text-left'>{serialNo}</td>
        <td>
            <div className='text-left'>
                {theatreName}
            </div>
            <div className='text-left'>
                {location.city},{location.state},{location.country}
            </div>
        </td>
        <td>
            <div  className='text-left'>
                {bandwidth}
            </div>
            <div  className='text-left'>
                {avgBandwidth}
            </div>
        </td>
        <td  className='text-left'>
            {deviceStatus}
        </td>
        <td  className='text-left'>
            {downloadStatus}
        </td >
        <td  className='text-left'>
                <div>{osVersion}</div>           
        </td>
        <td>
             <button className="w-10 bg-slate-400">View</button> 
        </td>
        {/* </Link> */}
    </tr>
  )
}

export default TableItem