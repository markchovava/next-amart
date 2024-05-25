 "use client";
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsPerson, BsCart2 } from "react-icons/bs";
import Link from 'next/link';
import TopNav from './TopNav';
import MainNavigation from './MainNavigation';



export default function Header() {
   

  return (
    <>
    <TopNav />
    <section className='bg-white drop-shadow'>
        <div className='container__one flex lg:flex-row flex-col lg:items-center lg:justify-start gap-8 py-4'>
            <div className='lg:w-[20%] w-[100%] text-[3rem] font-bold drop-shadow-lg text-transparent bg-gradient-to-br from-blue-600 to-pink-600 bg-clip-text'>
                <Link href='/' className='flex items-center lg:justify-start justify-center'>
                    <span className='text-black'>A</span>
                    MART
                </Link>
            </div>
            <div className='lg:w-[60%] w-[100%]'>
                <div className='w-[100%] border border-slate-300 rounded-full flex items-center justify-start'>
                    <select className='w-[30%] text-lg outline-none rounded-l-full border-r border-slate-300 px-5 py-4'>
                        <option value='Products'>Products</option>
                        <option value='Manufacturers'>Manufacturers</option>
                        <option value='Retailers'>Retailers</option>
                    </select>
                    <input 
                        type='text' 
                        className='w-[55%] text-lg outline-none border-r border-slate-300 px-4 py-4' 
                        placeholder='Enter name here...' />
                    <button className='w-[15%] h-[100%] text-lg flex items-center justify-center '>
                        <FaSearch className='hover:text-blue-600 drop-shadow-md'/>
                    </button>
                </div>
            </div>
            <div className='lg:w-[20%] w-[100%]'>
                <div className='w-[100%] flex items-center lg:justify-end justify-center gap-4'>
                    <div className='w-[50%] flex items-center lg:justify-end justify-center gap-3'>
                        <div className=''>
                            <BsCart2 className='text-[3rem]' />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <div className='text-lg'>Cart</div>
                            <div className='font-bold text-xl'>0</div>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-center lg:justify-end justify-center gap-3'>
                        <div className=''>
                            <BsPerson className='text-[3rem]' />
                        </div>
                        <div className='flex items-start justify-center flex-col'>
                            <div className='text-lg'>User</div>
                            <div className='font-bold text-lg'>Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <MainNavigation />

    
    </>
  )
}
 