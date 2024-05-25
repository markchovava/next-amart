"use client";
import { baseURL } from '@/api/baseURL';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';




export default function RegisterEdit() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  }

  async function postData(){
    if(!data.email){
      setErrMsg({email: 'Email is required.'})
      setIsSubmit(false)
      return;
    }
    if(!data.password){
      setErrMsg({ password: 'Password is required.'})
      setIsSubmit(false)
      return;
    }
    if(!data.password_confirmation){
      setErrMsg({password_confirmation: 'Password Confirmation is required.'})
      setIsSubmit(false)
      return;
    }
    if(data.password !== data.password_confirmation){
      setErrMsg({...errMsg, password_confirmation: 'Password do not match.'})
      setIsSubmit(false)
      return;
    }
    /*  */
    const formData = {
      email: data.email,
      password: data.password,
    }
    
    try{
      const result = await axios.post(`${baseURL}register`, formData)
      .then((response) => {
        if(response.data.status == 0){
          setErrMsg({email: response.data.message});
          setIsSubmit(false);
          toast.warn(response.data.message, {
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
          return;
        }
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
        router.push('/login'); 
        setIsSubmit(false);    
      
      })
      } catch (error) {
          console.error(`Error: ${error}`);
          setIsSubmit(false); 
    }

  }


  useEffect(() => {
    isSubmit && postData();
  }, [isSubmit])


  return (
    <>
      <section className='w-[100%]'>
        <div className='w-[50%] mx-auto'>

          <div className='container__one pt-[3rem]'>
            <h2 className='items-center justify-center text-center mb-4'>Register</h2>
          </div>
  
          <div className='flex items-center justify-between gap-2 mb-[1.2rem]'>
              <hr className='border-blue-700 w-[50%]' />
              <span className='text-blue-700'>OR</span>
              <hr className='border-blue-700 w-[50%]' />
          </div>

          <div className='w-[100%] mb-[1.5rem]'> 
              <Link href='/login' className='underline hover:no-underline text-blue-500 hover:text-pink-500'>Create a new Account</Link>
          </div>

          {/* NAME */}
          <div className='mb-6'>
                <p className='font-bold mb-2'>Email:</p>
                <input 
                  type='text' 
                  name='email'
                  onChange={handleInput}
                  placeholder='Enter Email here...'
                  className='w-[100%] rounded-xl outline-none px-4 py-3 border border-slate-300'/>
                {errMsg.email && 
                  <p className='text-red-500'>{errMsg.email}</p>
                }
          </div>
          {/* Confirmation Password */}
          <div className='mb-6'>
              <h6 className='font-bold mb-2'>Password:</h6>
              <input 
                type='password'
                name='password'
                onChange={handleInput}
                placeholder='Enter Password here..' 
                className='w-[100%] rounded-xl outline-none px-4 py-3 border border-slate-300'/>
              {errMsg.password && 
              <p className='text-red-500'>{errMsg.password}</p>
            }
          </div>
          {/* Confirmation Password */}
          <div className='mb-6'>
              <h6 className='font-bold mb-2'>Confirm Password:</h6>
              <input 
                type='password'
                name='password_confirmation'
                onChange={handleInput}
                placeholder='Enter Password here..' 
                className='w-[100%] rounded-xl outline-none px-4 py-3 border border-slate-300'/>
              {errMsg.password_confirmation && 
                <p className='text-red-500'>{errMsg.password_confirmation}</p>
              }
          </div>
              
          <div className='flex items-center justify-center pb-[4rem]'>
            <button
              onClick={() => setIsSubmit(true)}
              className='px-[8rem] py-5 text-white rounded-full transition-all duration-200 ease-in-out bg-gradient-to-br from-blue-600 to-pink-600 hover:bg-gradient-to-br hover:from-pink-600 hover:to-blue-600 hover:drop-shadow-md'>
              { isSubmit == true ? 'Processing' : 'Submit' }
            </button>
          </div>


        </div>
      </section>
    </>
  )
}
