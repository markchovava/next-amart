"use client";
import axiosClientAPI from '@/api/axiosClientAPI';
import Loader from '@/app/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';




export default function ProfileEdit() {
    const router = useRouter();
    const [data, setData] = useState();
    const [isSubmit, setIsSubmit] = useState(false)
  const { getAuthToken } = tokenAuth()
  const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
  }};

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`auth`, config)
      .then((response) => {
        console.log(response.data.data)
        setData(response.data.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  /* GET DATA */
  async function postData() {
    const formData = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        dob: data.dob,
        gender: data.gender,
    };
    try{
      const result = await axiosClientAPI.post(`auth`, formData, config)
      .then((response) => {
        toast.success(response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        router.push('/admin/profile')
        setIsSubmit(false)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  useEffect(() => {
    getData()
  }, []);


  useEffect(() => {
    isSubmit == true && postData();
  }, [isSubmit]);

  if(!data){
    return (
      <Loader />
    )
  }
    
  return (
    <section className='w-[100%]'>
         <div className='mx-auto w-[90%]'>
            {/* NAME */}
            <div className='mb-6 flex justify-start gap-6 items-center'>
                <div className='w-[50%]'>
                    <p className='font-semibold mb-2'>First Name:</p>
                    <input 
                        type='text' 
                        name='fname'
                        value={data.fname}
                        onChange={handleInput}
                        placeholder='Enter First Name here...'
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
                </div>
                <div className='w-[50%]'>
                    <p className='font-semibold mb-2'>Last Name:</p>
                    <input 
                        type='text' 
                        name='lname'
                        value={data.lname}
                        onChange={handleInput}
                        placeholder='Enter Last Name here...'
                        className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
                </div>
            </div>
            {/* EMAIL */}
            <div className='mb-6'>
                <p className='font-semibold mb-2'>Email:</p>
                <input 
                    type='text' 
                    name='email'
                    value={data.email}
                    onChange={handleInput}
                    placeholder="Enter Email here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
            </div>
            {/* Phone */}
            <div className='mb-6'>
                <p className='font-semibold mb-2'>Phone:</p>
                <input 
                    type='text'
                    name='phone'
                    value={data.phone}
                    onChange={handleInput} 
                    placeholder="+263 782 100 200"
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
            </div>
            {/* dob*/}
            <div className='mb-6'>
                <p className='font-semibold mb-2'>Date of Birth:</p>
                <input 
                    type='text'
                    name='dob'
                    value={data.dob}
                    onChange={handleInput} 
                    placeholder="04/02/2000"
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300' />
            </div>
            {/* dob*/}
            <div className='mb-6'>
                <p className='font-semibold mb-2'>Gender:</p>
                <select
                    name='gender'
                    onChange={handleInput} 
                    placeholder="Select an option."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'>
                    <option>Select an option.</option>
                    <option value='Male' selected={data.gender === 'Male' && 'selected'}>Male</option>
                    <option value='Female' selected={data.gender === 'Female' && 'selected'}>Female</option>
                </select>
            </div>
            {/* Address */}
            <div className='mb-6'>
                <p className='font-semibold mb-2'>Address:</p>
                <input 
                    type='text' 
                    name='address'
                    value={data.address}
                    onChange={handleInput} 
                    placeholder="Enter Address here..."
                    className='w-[100%] rounded-lg outline-none px-4 py-3 border border-slate-300'/>
            </div>
            
            {/* Submit */}
            <div className='flex items-center justify-center pb-[4rem]'>
                <button 
                    onClick={() => setIsSubmit(true)}
                    className='px-[8rem] py-5 text-white rounded-full transition-all duration-200 ease-in-out bg-gradient-to-br from-blue-600 to-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-blue-600'>
                    {isSubmit == true ? 'Processing' : 'Submit' }
                </button>
            </div>
        </div>
    </section>
  )
}
