"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";



export default function Grid2() {
  return (
    <section>
        <div className='container__one grid grid-cols-2'>
            <div className='w-[100%]'></div>
            <div className='w-[100%]'></div>
        </div>    
    </section>
  )
}
