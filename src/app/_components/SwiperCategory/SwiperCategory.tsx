'use client'
import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Category } from '../../../types/Category.type';

const SwiperCategory = ({ categories }: { categories: Category[] }) => {




    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {categories?.map((Category, idx) => <SwiperSlide key={idx}>
                    <Image className="h-[200px] object-cover w-100" src={Category.image} width={500} height={500} alt={Category.name} />
                    <p className='text-center'>{Category.name}</p>
                </SwiperSlide>)}


            </Swiper>
        </div>
    )
}

export default SwiperCategory