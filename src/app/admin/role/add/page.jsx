import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import RoleAdd from './components/RoleAdd'



export default function page() {
  return (
    <div>
        {/* Bread Crumbs */}
        <section className='w-[100%]'>
            <div className='mx-auto w-[90%] border-b border-slate-200'>
                <ul className='flex items-center justify-start gap-2 px-3 py-2'>
                    <li><Link href='/'>Home</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/admin/role'>Role List</Link></li>
                    <li><FaAngleRight /></li>
                    <li><Link href='/admin/role/add'>Add Role</Link></li>
                </ul>
            </div>
        </section>

        {/* PAGE TITLE */}
        <section className='w-[100%]'>
          <div className='w-[90%] mx-auto flex items-center justify-center'>
            <h6 className='text-center font-black text-[3rem] pt-[3rem] pb-[2rem] text-transparent bg-gradient-to-br bg-clip-text from-blue-600 to-pink-600'>
              Add Role</h6>
          </div>
        </section>


         {/* BUTTON */}
         <section className='w-[100%]'>
          <div className='mx-auto w-[90%] flex items-center justify-end'>
            <Link href='/admin/role' className='link__one'>
              Role List
            </Link>
          </div>
        </section>


        {/* ADD */}
        <RoleAdd />


    </div>
  )
}
