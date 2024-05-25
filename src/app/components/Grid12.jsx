"use client";
import Link from 'next/link';
import React, { useState } from 'react'




export default function Grid12() {
    const [data, setData] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])

  return (
    <section>
        <div className='container__one pb-[5rem]'>
            <h4 className='mb-4'>Lorem ipsum dolor sit.</h4>
            <div className='w-[100%] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-10 gap-8'>
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
           
        </div>
    </section>
  )
}
 