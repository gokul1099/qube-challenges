'use client'

import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Device as DeviceType, Location } from '../../../types';
import { DEVICE_PAGE_TITLES } from '../../../contants'
import Shape from "../../../assets/shape.svg"
import Logs from "../../../assets/Logs.svg"
import Chart from "../../../assets/ViewPieChart.svg"
import Image from 'next/image';
function Device() {
  const params= useSearchParams()
  const [deviceData,setDeviceData] = React.useState<DeviceType>()

  useEffect(()=>{
    const getData = async()=>{
      try{
        const deviceId = params.get("device")
        const res = await fetch(`http://0.0.0.0:3001/api/v1/appliance/${deviceId}/info`)
        const data = await res.json()
        setDeviceData(data)
      }catch(e){
        console.log(e)
      }
      
      
    } 
    getData()
  },[params])
  return (
    <div className='flex flex-col'>
      <div className='p-5'><h3>Devices    &gt;   {deviceData?.serialNo}</h3></div>
      <div className='bg-white p-5 flex flex-row flex-wrap justify-between border-b-2'>
        <div>
          <h1>{deviceData?.serialNo}</h1>
          <h1 className='text-sm pt-2'>{deviceData?.theatreName}</h1>
          <h1  className='text-sm pt-2 text-slate-400'>{deviceData?.location?.city},{deviceData?.location?.state},{deviceData?.location?.country}</h1>
          <div className='flex flex-row pt-2'>
            <div className='flex flex-row items-center bg-slate-200 w-20 justify-center rounded-xl'>
              <div className={`${deviceData?.deviceStatus ==="online" ? "bg-green-800" : "bg-red-600"} w-2 h-2 rounded mr-1`}></div>
              <h1  className='text-sm'>{deviceData?.deviceStatus}</h1>
            </div>
            <div className='flex flex-row items-center bg-slate-200 w-20 justify-center rounded-xl ml-3'>
              <Image src={Chart} alt='stage'/>
              <h1  className='text-sm'>{deviceData?.storage}</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mr-10 bg-slate-200 h-9 p-2 rounded-xl flex flex-row items-center'>
            <Image src={Shape} alt='speed-text'/>
            <h2 className='ml-1'>Speed Test</h2>
          </div>
          <div className='mr-10 bg-slate-200 h-9 p-2 rounded-xl flex flex-row items-center'>
            <Image src={Logs} alt='speed-text'/>
            <h2 className='ml-1'>Logs</h2>
          </div>
        </div>
      </div>
      <div className='flex flex-row bg-white p-4'>
        {
          DEVICE_PAGE_TITLES.map((header)=>{
            return(
              <div key={`${header}`} className='mr-3'>
                <h2>{header}</h2>
              </div>
            )
          })
        }
      </div>
      <div className='flex flex-row bg-white m-10 justify-between flex-wrap p-5'>
        <div className='device-detail'>
          <h2>Device Serial</h2>
          <h2>{deviceData?.serialNo}</h2>
        </div>

        <div className='device-detail'>
          <h2>Location</h2>
          <h2>{deviceData?.theatreName}</h2>
        </div>

        <div className='device-detail'>
          <h2>City</h2>
          <h2>{deviceData?.location?.city}, {deviceData?.location?.state},{deviceData?.location?.country}</h2>
        </div>

        <div className='device-detail'>
          <h2>ISP Payment Responsibility</h2>
          <h2>{deviceData?.ispPaymentResponsibility}</h2>
        </div>

        <div  className='device-detail'>
          <h2>Bandwidth</h2>
          <h2>{deviceData?.bandwidth}</h2>
        </div>

        <div  className='device-detail'>
          <h2>Average bandwidth</h2>
          <h2>{deviceData?.avgBandwidth}</h2>
        </div>
        
        <div  className='device-detail'>
          <h2>Plan Start Date</h2>
          <h2>{deviceData?.planStartDate}</h2>
        </div>

        <div  className='device-detail'>
          <h2>Billing Cycle</h2>
          <h2>{deviceData?.billingCycle}</h2>
        </div>

        <div  className="device-detail">
          <h2>Download Status</h2>
          <h2>{deviceData?.downloadStatus}</h2>
        </div>

        <div className="device-detail">
          <h2>OS Version</h2>
          <h2>{deviceData?.osVersion}</h2>
        </div>

        <div className="device-detail">
          <h2>Storage Availability</h2>
          <h2>{deviceData?.storage}</h2>
        </div>

        <div className="device-detail">
        </div>
      </div>
    </div>
  )
}

export default Device