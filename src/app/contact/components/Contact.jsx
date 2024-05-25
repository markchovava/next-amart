"use client"

import { ImLocation } from 'react-icons/im'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

export default function Contact() {
  return (
    <>
    {/* MAIN */}
    <section className=''>
        <div className='mx-auto max-w-7xl h-[100%] py-[5rem] flex lg:flex-row flex-col justify-center lg:justify-start gap-6'>
          <div className='lg:w-[50%] bg-white drop-shadow-lg py-8 px-6'>
            <h4 className='pb-2'>Our Contact Details</h4>
            <hr className='border-t-8 border-pink-700 w-[20%] pb-4' />
            <ul className='pl-[2rem] py-4 text-lg'>
              <li className='flex items-center justify-start gap-2 pb-3'>
                <AiFillPhone />+263 782 210021</li>
              <li className='flex items-center justify-start gap-2 pb-3'>
                <ImLocation />04 - 85 Avenue, Mabelreign, Harare</li>  
              <li className='flex items-center justify-start gap-2 pb-3'>
                <AiOutlineMail />schoolwebsite@gmail.com</li>  
            </ul>
          </div>
          <div className='lg:w-[50%] bg-white drop-shadow-lg py-8 px-6'>
            <h4 className='pb-2'>Write to us.</h4>
            <hr className='border-t-8 border-pink-700 w-[20%] pb-4' />
            <div className='flex flex-col gap-1 justify-center items-start pb-4'>
              <label className='font-semibold'>Full Name:</label>
              <input type='text' className='w-[100%] outline-none border border-slate-300 px-4 py-3 rounded-md' />
            </div>
            <div className='pb-4'>
              <label className='font-semibold'>Email:</label>
              <input type='text' className='w-[100%] outline-none border border-slate-300 px-4 py-3 rounded-md' />
            </div>
            <div className='pb-4'>
              <label className='font-semibold'>Your Message:</label>
              <textarea placeholder='Write your Message here...' className='w-[100%] outline-none border border-slate-300 px-4 py-3 rounded-md'></textarea>
            </div>
            <div className='pb-4'>
            <button className='group px-5 py-4 flex items-center justify-center gap-2 rounded-full text-white bg-gradient-to-br from-blue-600 to-pink-700 hover:from-pink-700 hover:to-blue-600'>
              Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
          </div>
        </div> 
    </section>
      <section className='w-[100%] h-[460px] bg-slate-300 flex items-center justify-center'>
        <p>Google Maps</p>
      </section>
    </>
  )
}
