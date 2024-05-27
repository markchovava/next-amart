"use client";

import axiosClientAPI from "@/api/axiosClientAPI";
import { baseURL } from "@/api/baseURL";
import Loader from "@/app/components/Loader";
import { tokenAuth } from "@/tokens/tokenAuth";
import { useEffect, useState } from "react";



export default function AppInfoView() {
  const [data, setData] = useState();
  const { getAuthToken } = tokenAuth()
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
    }};

  /* GET DATA */
  async function getData() {
    try{
    const result = await axiosClientAPI.get(`app-info`, config)
    .then((response) => {
        console.log(response.data.data)
        setData(response.data.data)
    })
    } catch (error) {
    console.error(`Error: ${error}`)
    }   
  }  

  useEffect(() => {
    getData();
  },[]);


  if(!data){ return ( <Loader /> )}

  return (
    <section className='w-[100%]'>
        <div className='mx-auto w-[80%] pb-[4rem]'>
          
          {/* NAME */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>image:</div>
            <div className='w-[80%]'>
              <div className='w-[50%] rounded-lg aspect-[5/3] overflow-hidden bg-slate-50 drop-shadow-lg'>
                <img src={baseURL + data?.image} className='w-[100%] h-[100%] object-cover' alt='Logo' /></div>
            </div>
          </div>
          {/* NAME */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Name:</div>
            <div className='w-[80%]'>{data?.name}</div>
          </div>
          {/* EMAIL */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Email:</div>
            <div className='w-[80%]'>{data?.email}</div>
          </div>
          {/* EMAIL */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Address:</div>
            <div className='w-[80%]'>{data?.address}</div>
          </div>
          {/* PHONE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Phone:</div>
            <div className='w-[80%]'>{data?.phone}</div>
          </div>
          {/* WEBSITE */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Website:</div>
            <div className='w-[80%]'>{data?.website}</div>
          </div>
          {/* FACEBOOK */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Facebook:</div>
            <div className='w-[80%]'>{data?.facebook}</div>
          </div>
          {/* INSTAGRAM */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>Instagram:</div>
            <div className='w-[80%]'>{data?.instagram}</div>
          </div>
          {/* WHATSAPP */}
          <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
            <div className='w-[20%] font-semibold'>WhatsApp:</div>
            <div className='w-[80%]'>{data?.whatsapp}</div>
          </div>
        </div>
    </section>
  )
}
