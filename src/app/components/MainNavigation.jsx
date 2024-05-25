"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";



export default function MainNavigation() {
    const [isActive, setIsActive] = useState({
        one: false,
        second: false,
        third: false,
    });


  return (
    <div>
        {/* NAVIGATION */}
        <section className=''>
            <div className='container__one relative'>
                <ul className='flex lg:flex-row flex-col items-center justify-center gap-2 py-3'>
                    {/* CATEGORY */}
                    <li className='hover:bg-slate-100 lg:block hidden rounded-md p-2 cursor-pointer'>
                        <span 
                            onClick={() => setIsActive( {one: !isActive.one} )} 
                            className='flex items-center justify-center gap-1'>
                            All Categories <FaAngleDown />
                        </span>
                    </li>
                    <li className='hover:bg-slate-100 rounded-md px-3 py-2 cursor-pointer'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='hover:bg-slate-100 rounded-md px-3 py-2 cursor-pointer'>
                        <Link href='/about'>About Us</Link>
                    </li>
                    <li className='hover:bg-slate-100 rounded-md px-3 py-2 cursor-pointer'>
                        <Link href='/contact'>Contact Us</Link>
                    </li>
                    <li className='cursor-pointer relative'>
                        <span 
                            onClick={() => setIsActive( {two: !isActive.two} )} 
                            className={` p-2 hover:bg-slate-100 flex items-center justify-center gap-1`}>
                            Help <FaAngleDown />
                        </span>
                        <ul className={`${isActive.two ? 'visible' : 'invisible' } bg-white drop-shadow-md transition-all ease-in-out duration-150 absolute z-30 top-[100%] w-[250%]`}>
                            <li className='p-2 hover:bg-blue-50'>
                                <Link href='#' className='w-[100%]'>For Buyers</Link>
                            </li>
                            <li className='p-2 hover:bg-blue-50'>
                                <Link href='#' className='w-[100%]'>For Buyers</Link>
                            </li>
                            <li className='p-2 hover:bg-blue-50'>
                                <Link href='#' className='w-[100%]'>For Buyers</Link>
                            </li>
                            <li className='p-2 hover:bg-blue-50'>
                                <Link href='#' className='w-[100%]'>For Buyers</Link>
                            </li>
                        
                            
                        </ul>
                    </li>
                    {/* CATEGORY */}
                    <li className='hover:bg-slate-100 lg:hidden block rounded-md p-2 cursor-pointer'>
                        <span 
                            onClick={() => setIsActive( {one: !isActive.one} )} 
                            className='flex items-center justify-center gap-1'>
                            All Categories <FaAngleDown />
                        </span>
                    </li>
                </ul>   
            </div>
        </section>
        {/* MEGAMENU */}
        <section className='relative'>
            <div
                className={`${isActive.one == true ? 'lg:h-[16rem] drop-shadow-md visible' : 'invisible'} w-[100%] bg-white transition-all duration-150 ease-in-out absolute z-30`}>
                {isActive.one == true &&
                    <div className={`${isActive.one == true ? 'visible' : 'invisible'} mx-auto w-[90%] flex lg:flex-row flex-col items-start justify-start gap-4`}>
                        <div className='lg:w-[33%] w-[100%] h-[15rem] overflow-hidden'>
                            <ul className='w-[100%] h-[100%] overflow-y-scroll'>
                                <li className={`nav__li`}>
                                    <Link href='/category-product/1'>Category 1</Link></li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                            </ul>
                        </div>
                        <div className='lg:w-[33%] w-[100%] h-[15rem] overflow-hidden'>
                            <ul className='w-[100%] h-[100%] overflow-y-scroll'>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                                <li className={`nav__li`}> Category 1</li>
                            </ul>
                        </div>
                        <div className='lg:w-[33%] w-[100%] h-[15rem] overflow-hidden'>
                            <div className='w-[100%] h-[100%] overflow-y-scroll'>
                                <h6 className='mb-4'>Category Label</h6>
                                <div className='w-[100%] pb-6 grid grid-cols-4 gap-8 overflow-y'>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>
                                    <span className='w-[5rem] aspect-square rounded-full bg-slate-200 overflow-hidden'></span>  
                                </div>

                            </div>
                        </div>  
                    </div>
                }
            </div>      
        </section>
    </div>
  )
}
