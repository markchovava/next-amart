"use client";
import Link from 'next/link';
import React, { useState } from 'react';




export default function SidebarCategory() {
  return (
    <>
        {/* SIDEBAR */}
        <div id='sidebar' className='lg:w-[25%] w-[100%] bg-slate-100 drop-shadow-md py-[2rem] px-3'>
            <h5 className='mb-1'>Top Categories</h5>
            <ul className='px-3 mb-3'>
            <li className='w-[100%] p-2 duration-200 transition-all ease-in-out hover:text-pink-700 hover:bg-slate-200'>
                <Link href='#' className=''>Category</Link></li>
            <li className='w-[100%] p-2 duration-200 transition-all ease-in-out hover:text-pink-700 hover:bg-slate-200'>
                <Link href='#'>Category</Link></li>
            <li className='w-[100%] p-2 duration-200 transition-all ease-in-out hover:text-pink-700 hover:bg-slate-200'>
                <Link href='#'>Category</Link></li>
            </ul>
            <hr />
            <h5 className='mb-1'>Top Brands</h5>
            <ul className='px-3'>
            <li className='w-[100%] p-2 duration-200 transition-all ease-in-out hover:text-pink-700 hover:bg-slate-200'>
                <Link href='#' className=''>Category</Link></li>
            <li className='w-[100%] p-2 duration-200 transition-all ease-in-out hover:text-pink-700 hover:bg-slate-200'>
                <Link href='#'>Category</Link></li>
            <li className='w-[100%] p-2 duration-200 transition-all ease-in-out hover:text-pink-700 hover:bg-slate-200'>
                <Link href='#'>Category</Link></li>
            </ul>
        </div>
    </>
  )
}
