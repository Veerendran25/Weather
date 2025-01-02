import React, { useEffect } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules'
import Weather from './Weather'
import Weather1 from './Weather1'
import Weather2 from './Weather2'
import Weather3 from './Weather3'
import Weather4 from './Weather4'

import gsap from 'gsap'

const Sp = () => {
    useEffect(()=>
    {
        gsap.from(".container",
            {
                top:"90%",
                duration:2,
                opacity:0,
                delay:3,
                ease:"bounce.out"
            }
        )
    },[])
return (
    <div className='container'>
        <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
    >
            <SwiperSlide>
                <Weather/>
            </SwiperSlide>
            <SwiperSlide>
                <Weather1/>
            </SwiperSlide>
            <SwiperSlide>
                <Weather2/>
            </SwiperSlide>
            <SwiperSlide>
                <Weather3/>
            </SwiperSlide>
            <SwiperSlide>
                <Weather4/>
            </SwiperSlide>
            <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
    </div>
)
}

export default Sp