import React from 'react'
import About from './components/About'
import { MdOutlineChevronRight } from 'react-icons/md'
import Link from 'next/link'



export default function page() {
  return (
    <div>
      <section className=' bg-white text-black'>
        <div className='container__one py-1 flex items-center justify-start gap-3 border-y border-slate-50'>
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
        </div>
      </section>


      <section className='py-[3rem] bg-gradient-to-br from-blue-600 to-pink-600'>
        <div className='container__one flex justify-center items-center'>
            <h2 className=' font-bold drop-shadow-lg text-white'>
                About Us
            </h2>
        </div>
      </section>


      <About />


    </div>
  )
}
