import Link from 'next/link'
import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import LoginEdit from './components/LoginEdit'

export default function page() {
  return (
    <>
      <section className='mb-[4rem] bg-white'>
        <div className='container__one py-1 flex items-center justify-start gap-3 border-y border-slate-50'>
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
        </div>
      </section>

      <LoginEdit />

    </>
  )
}
