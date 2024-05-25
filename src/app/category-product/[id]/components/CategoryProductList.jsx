"use client";
import SidebarCategory from '@/app/components/SidebarCategory';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';




export default function CategoryProductList() {
  const [data, setData] = useState([0,1,2,3,4,5,6,7,8]);
  
  return (
    <section className='pb-[2rem]'>
        <div className='container__one flex lg:flex-row flex-col lg:items-start items-center lg:justify-start justify-center gap-4'>
          
          <SidebarCategory />

          {/* LIST */}
          <div className='w-[75%] py-[2rem] px-3'>
              <h5 className='mb-2'>Products</h5>
              <div className='w-[100%] flex items-center justify-between mb-[2rem]'>
                <p>12 of 40 Products</p>
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
                          <p className='font-extrabold text-center text-xl mb-1'>$20.00</p>
                          <div className="flex items-center justify-start">
                              <input 
                                  type="number"
                                  name="quantity"
                                  placeholder="00"
                                  className="w-[60%] rounded-l-xl outline-none bg-white border border-slate-300 h-[3rem] px-3" />
                              <button
                                  className="w-[40%] rounded-r-xl lg:text-md text-sm btn__one h-[3rem]"> 
                                  Add to Cart
                              </button>
                          </div>
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
