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
import { useState } from 'react';




export default function TopCategoryCarousel() {
    const [data, setData] = useState([0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,0,9,87,6,5,4,3])
  return (
    <section>
        <div className='container__one'>
            <div className='py-[2rem] lg:block hidden'>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation
                    effect
                    speed={1500}
                    loop={true}
                    autoplay={{
                    delay: 8000,
                    disableOnInteraction: true,
                    }}
                    slidesPerView={8} 
                    className='top__category'>
                    {data.map((i, key) => (
                        <SwiperSlide key={key} className='py-[3rem]'>
                            <div className='w-[6rem] rounded-full aspect-square bg-gradient-to-br from-blue-500 to-pink-600'></div>
                            <p>Category Name</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='py-[2rem] block lg:hidden'>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation
                    effect
                    speed={1500}
                    loop={true}
                    autoplay={{
                    delay: 8000,
                    disableOnInteraction: true,
                    }}
                    slidesPerView={4} 
                    className='top__category'>
                    {data.map((i, key) => (
                        <SwiperSlide key={key} className='py-[3rem]'>
                            <div className='w-[6rem] rounded-full aspect-square bg-gradient-to-br from-blue-500 to-pink-600'></div>
                            <p>Category Name</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}
