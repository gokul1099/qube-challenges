
"use client"
import TableItem from "../components/TableItem";
import { STATUS,STATUS_COLOR,DEVICE_LIST_HEADER } from "../contants";
import { Appliance } from "../types";
import { fetchData } from "../utils/fetchData";
import React, { useEffect } from "react";
import Link from "next/link";
export default function Home() {
  
  const [deviceData,setDeviceData] = React.useState<Appliance[]>([])

  useEffect(()=>{
    const getData = async()=>{
      try{
        const res = await fetch(`http://0.0.0.0:3001/api/v1/appliances`)
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
                    <div style={{backgroundColor:STATUS_COLOR[status]}} className="w-2 h-2 m-1 rounded"></div>
                    <h2 className="text-sm">1 {status}</h2>
                  </div>
                </div>
              )
            })
          }
      </div>
      {/** Device List Table Header*/}
      <div className="flex flex-col bg-white m-5 p-3">
        <div className="mb-5">
          <input placeholder="Search" className="border-2"/>
        </div>
        <div className="flex overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b-2 border-b-slate-200">
              <tr>
                {
                  DEVICE_LIST_HEADER?.map((header)=>{
                    return(
                        <th>{header}</th>
                    )
                  })
                }
                <th></th>
            </tr>
          </thead>
        
          <tbody>
              {
                deviceData?.map((device)=>{
                  return(
                    <TableItem {...device}/>
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
