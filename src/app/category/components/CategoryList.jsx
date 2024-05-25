"use client";
import SidebarCategory from '@/app/components/SidebarCategory';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';



export default function CategoryList() {
    const [data, setData] = useState([0,1,2,3,4,5,6,7,8]);

  return (
    <section className='pb-[2rem]'>
        <div className='container__one flex lg:flex-row flex-col lg:items-start items-center lg:justify-start justify-center gap-4'>
          
          <SidebarCategory />

          {/* LIST */}
          <div className='w-[75%] py-[2rem] px-3'>
              <h5 className='mb-2'>Products</h5>
              <div className='w-[100%] flex items-center justify-between mb-[2rem]'>
                <p>12 of 40 Category</p>
                {/* PAGINATION */}
                <div className='flex items-center justify-end gap-3'>
                  <button
                      className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-blue-700 to-pink-700'>
                      <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-pink-500' /> 
                      Prev 
                  </button>
                  <button 
                      className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-blue-700 to-pink-700'>
                      Next <FaArrowRightLong className='text-pink-500 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
                  </button> 
                </div>
              </div>

              <div className='w-[100%] grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-8 mb-[2rem]'>
                  {/* COL */}
                  {data.map((i,key) => (
                      <div key={key} className='w-[100%] p-3 bg-white drop-shadow rounded-md'>
                          <div className='w-[100%] aspect-[5/4] bg-blue-100 rounded-lg mb-1'></div>
                          <Link href='#' className='link__pink font-semibold mb-1'>
                              Lorem ipsum dolor sit.
                          </Link>
                      </div>
                  ))}
              </div>

              {/* PAGINATION */}
              <div className='flex items-center justify-end gap-3'>
                  <button
                      className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-blue-700 to-pink-700'>
                      <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-pink-500' /> 
                      Prev 
                  </button>
                  <button 
                      className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-blue-700 to-pink-700'>
                      Next <FaArrowRightLong className='text-pink-500 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
                  </button> 
                </div>
          </div>

        </div>
      </section>
  )
}
