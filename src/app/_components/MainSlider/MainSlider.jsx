"use client"

import React from 'react'
import Image from "next/image"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "./../../../../public/grocery-banner-2.jpeg"
import banner2 from "./../../../../public/grocery-banner.png"

import slider1 from "./../../../../public/slider-image-1.jpeg"
import slider2 from "./../../../../public/slider-image-2.jpeg"
import slider3 from "./../../../../public/slider-image-3.jpeg"

const MainSlider = () => {
    return (
        <div className=' flex mb-10'>
            <div className='w-2/3'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop ={true}
                >
                    <SwiperSlide>
                        <Image className="h-[400px] object-cover" src={slider1} alt="baaner" priority  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="h-[400px] object-cover" src={slider2} alt="baaner" priority  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className="h-[400px] object-cover" src={slider3} alt="baaner" priority  />
                    </SwiperSlide>

                    ...
                </Swiper>
            </div>

            <div className='w-1/3'>
                <Image className="h-[200px] object-cover" src={banner1} alt="baaner" />
                <Image className="h-[200px] object-cover" src={banner2} alt="banner" />
            </div>


        </div>
    )
}

export default MainSlider