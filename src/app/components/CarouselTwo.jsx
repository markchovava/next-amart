"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




export default function CarouselTwo() {
  return (
    <section>
        <div className='container__one pb-[4rem] hidden lg:block'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                navigation
                effect
                pagination={{
                clickable: true,
                }}
                speed={1500}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                }}
                slidesPerView={2}
                className='carousel__two'>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-blue-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-red-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-pink-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-cyan-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-gray-600'></div>
                </SwiperSlide>     
            </Swiper>
        </div>
        <div className='container__one pb-[4rem] lg:hidden block'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                navigation
                effect
                pagination={{
                clickable: true,
                }}
                speed={1500}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                }}
                className='carousel__two'
                slidesPerView={1}>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-blue-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-red-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-pink-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-cyan-600'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] h-[15rem] bg-gray-600'></div>
                </SwiperSlide>     
            </Swiper>
        </div>
    </section>
  )
}
