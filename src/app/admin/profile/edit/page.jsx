import React from 'react'
import Link from 'next/link';
import { MdOutlineChevronRight } from "react-icons/md";
import ProfileEdit from './components/ProfileEdit'

export default function page() {
  return (
    <div>
        <section className='mb-[4rem] bg-white'>
            <div className='container__one py-1 flex items-center justify-start gap-3 border-y border-slate-50'>
            <Link href='#' className='link__pink'>Home</Link>
            <MdOutlineChevronRight />
            <Link href='#' className='link__pink'>Home</Link>
            <MdOutlineChevronRight />
            <Link href='#' className='link__pink'>Home</Link>
            </div>
        </section>

         {/* PAGE TITLE */}
         <section className='w-[100%]'>
          <div className='w-[90%] mx-auto flex items-center justify-center'>
            <h6 className='text-center font-black text-[3rem] pt-[2rem] pb-[2rem] text-transparent bg-gradient-to-br bg-clip-text from-blue-400 to-pink-500'>
              Edit Profile</h6>
          </div>
        </section>

        <section className='w-[100%]'>
          <div className='w-[90%] mx-auto flex items-center justify-end mb-[2rem]'>
              <Link href='/admin/profile' >
                <span className='link__one'>
                  View Profile </span>
              </Link>
          </div>
        </section>


        <ProfileEdit />
    </div>
  )
}
