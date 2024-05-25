
import CarouselTwo from '@/app/components/CarouselTwo';
import Link from 'next/link';
import { MdOutlineChevronRight } from "react-icons/md";
import CategoryList from './components/CategoryList';



export default function page() {
  return (
    <>
    <section className='mb-[4rem] bg-white'>
        <div className='container__one py-1 flex items-center justify-end gap-3 border-y border-slate-50'>
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
          <MdOutlineChevronRight />
          <Link href='#' className='link__pink'>Home</Link>
        </div>
      </section>


      <CategoryList />

      <section>
        <CarouselTwo />
      </section>
    </>
  )
}
