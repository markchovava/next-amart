"use client";
import Link from 'next/link';
import React, { useState } from 'react'



export default function Grid4() {
    const [data, setData] = useState([0,1,2,3]);
    const [item, setItem] = useState([0,1,2]);
  return (
    <section>
        <div className='container__one grid lg:grid-cols-2 grid-cols-1 gap-10 pb-[5rem]'>
            {data.map((i, key) => (
                 <>
                 {/* COL */}
                <div key={key} className='w-[100%] bg-white px-2 pt-2 pb-5 rounded-md drop-shadow-md'>
                    <Link href='#' className='link__pink font-semibold text-xl px-2 pt-2'>Lorem ipsum dolor sit.</Link>
                    {/* SUB COL */}
                    <div className='grid lg:grid-cols-3 grid-cols-2 gap-2'>
                        {item.map((i,key) => (
                            <div key={key} className='w-[100%] p-2'>
                                <div className='w-[100%] rounded-md aspect-[5/4] bg-pink-100 mb-1'></div>
                                <Link href='#' className='font-semibold link__pink lg:text-md text-lg'>Lorem ipsum dolor.</Link>
                            </div>
                        ))}
                    </div>
                </div>
                 </>
            ))}
           
        </div>
    </section>
  )
}
