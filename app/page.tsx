
"use client"
import TableItem from "../components/TableItem";
import { STATUS,STATUS_COLOR,DEVICE_LIST_HEADER } from "../contants";
import { Appliance } from "../types";
import React, { useEffect } from "react";
export default function Home() {
  
  const [deviceData,setDeviceData] = React.useState<Appliance[]>([])
  const [pageCount,setPageCount] = React.useState(5)
  const [currentPage,setCurrentPage] = React.useState(1)
  useEffect(()=>{
    const getData = async()=>{
      try{
        const res = await fetch(`${process.env.BASE_URL}/api/v1/appliances`)
        const data =await res.json()
        setDeviceData(data?.appliances)
      }
      catch(e){
        console.log(e)
      }
    }

    getData()
  },[])
  return (
    <main className="flex flex-col">
      {/** Header Component */}
      <div className="flex w-full p-5 bg-white border-5 align-center">
          <h1 className="text-lg">Devices</h1>
      </div>
      {/** Device List Dashboard Header */}
      <div className="flex flex-row bg-white m-5 p-3 flex-wrap ">
          {
            STATUS?.map((status)=>{
              return(
                <div className="mr-10" key={`${status}`}>
                  <div className="flex flex-row items-center">
                    <div className={`w-2 h-2 m-1 rounded ${STATUS_COLOR[status]}`}></div>
                    <h2 className="text-sm">1 {status}</h2>
                  </div>
                </div>
              )
            })
          }
      </div>
      {/** Device List Table Header*/}
      <div className="flex flex-col bg-white m-5 p-3">
        <div className="flex flex-row justify-between flex-wrap items-center mb-5">
          <div>
           <input placeholder="Search" className="border-2"/>
          </div>
          <div className="flex flex-row flex-wrap mr-24">
            <div>
                Show 
                <select className="border-2 p-1 ml-3" onChange={(event)=>setPageCount(Number.parseInt(event.target.value))}>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </select>
            </div>
              <div className="flex flex-row items-center ml-4">
              <button>&lt;</button>
              {
                [...Array(pageCount)].map((item,index)=>{
                  return(
                    <button key={index} onClick={()=>setCurrentPage(index+1)} className={`${currentPage==index+1 ? "border-2" : ""} border-slate-200  p-1 ml-2`}>{index+1}</button>
                  )
                })
              }
               <button>&gt;</button>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b-2 border-b-slate-200">
              <tr>
                {
                  DEVICE_LIST_HEADER?.map((header)=>{
                    return(
                        <th key={`${header}`}>{header}</th>
                    )
                  })
                }
                <th></th>
            </tr>
          </thead>
        
          <tbody>
              {
                deviceData?.splice(currentPage, currentPage*pageCount).map((device)=>{
                  return(
                    <TableItem key={device.serialNo} {...device}/>
                  )
                })
              }
          </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
