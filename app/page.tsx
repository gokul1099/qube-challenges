import { STATUS,STATUS_COLOR,DEVICE_LIST_HEADER } from "../contants";
import { fetchData } from "../utils/fetchData";
import React, { useEffect } from "react";
export default function Home() {
  
  const [deviceData,setDeviceData] = React.useState([])

  useEffect(()=>{
    const getData = async()=>{
      try{
        const res = await fetch(`${process.env.BASE_URL}/appliances`)
        const data =await res.json()
        setDeviceData(data)
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
      {/** Device List Table */}
      <div className="flex flex-col bg-white m-5 p-3">
        <div className="mb-5">
          <input placeholder="Search" className="border-2"/>
        </div>
        <div className="flex flex-row justify-between">
        {
          DEVICE_LIST_HEADER?.map((header)=>{
            return(
              <div>
                <h2>{header}</h2>
              </div>
            )
          })
        }
        </div>
      </div>
    </main>
  );
}
