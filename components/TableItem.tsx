import React from 'react'
import { Appliance } from '../types'
import { useRouter } from 'next/navigation'
function TableItem({serialNo,theatreName,location,bandwidth,avgBandwidth,deviceStatus,downloadStatus,osVersion}:Appliance) {
    const router = useRouter()
  return (
    <tr onClick={()=>router.push(`/device?device=${serialNo}`)} className='cursor-pointer hover:bg-slate-200 border-spacing-5'>
        {/* <Link href={`/device?${serialNo}`}> */}
        <td className='text-left'>
            <h3 className='text-xs'>{serialNo}</h3></td>
        <td>
            <div className='text-left'>
                <h3 className='text-xs'>{theatreName}</h3>
            </div>
            <div className='text-left'>
                <h3 className='text-blue-400 text-xs'>{location.city},{location.state},{location.country}</h3>
            </div>
        </td>
        <td>
            <div  className='text-left'>
                <h3 className='text-xs'>{bandwidth}</h3>
            </div>
            <div  className='text-left'>
                <h3 className='text-xs'>{avgBandwidth}</h3>
            </div>
        </td>
        <td  className='text-left p-'>
            <h3 className='text-xs'>{deviceStatus}</h3>
        </td>
        <td  className='text-left'>
            <h3 className='text-xs'>{downloadStatus}</h3>
        </td >
        <td  className='text-left'>
                <div><h3 className='text-xs'>{osVersion}</h3></div>           
        </td>
        <td>
             <button className="w-10 bg-slate-400">View</button> 
        </td>
        {/* </Link> */}
    </tr>
  )
}

export default TableItem