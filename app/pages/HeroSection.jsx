'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        title: 'Experience Pure Sound - Your Perfect Headphones Awaits!',
        subtitle: 'Limited Time Offer 30% Off',
        button: 'Shop now',
        linkText: 'Explore',
        image: '/images/Headphone.png',
    },
    {
        id: 2,
        title: 'Unleash the Bass - Elevate Your Listening Experience',
        subtitle: 'Exclusive Deal – 25% Off Today!',
        button: 'Shop now',
        linkText: 'Explore',
        image: '/images/Headphone.png',
    },
    {
        id: 3,
        title: 'Wireless Freedom, Crystal Clear Sound',
        subtitle: 'Hurry Up – 40% Off Only Today!',
        button: 'Shop now',
        linkText: 'Explore',
        image: '/images/Headphone.png',
    },
];

const HeroSlider = () => {

    return (
        <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-6 md:py-8 lg:py-10">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                loop={true}
                className="w-full hero-slider"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex flex-col-reverse min-h-[75vh] rounded-2xl lg:flex-row items-center justify-between bg-[#E6E9F2] hover:bg-gray-300 w-full lg:rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 2xl:p-24 transition-all duration-300 hover:shadow-xl lg:h-100">
                            {/* Text Content */}
                            <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-8 mt-6 xs:mt-8 sm:mt-10 lg:mt-0 text-center lg:text-left">
                                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-orange-600 pb-2 xs:pb-3 sm:pb-4 font-medium">
                                    {slide.subtitle}
                                </p>
                                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-tight xs:leading-snug sm:leading-tight md:leading-tight lg:leading-[44px] xl:leading-[48px] 2xl:leading-[52px] font-semibold mb-4 xs:mb-5 sm:mb-6 md:mb-8 max-w-full lg:max-w-lg">
                                    {slide.title}
                                </h1>
                                <div className="flex flex-col xs:flex-row items-center xs:justify-center lg:justify-start gap-3 xs:gap-4 sm:gap-5">
                                    <button className="w-full xs:w-auto px-6 xs:px-8 sm:px-10 md:px-12 py-2.5 xs:py-3 sm:py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-full text-white text-sm xs:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
                                        {slide.button}
                                    </button>
                                    <button className="group flex items-center justify-center gap-2 px-3 xs:px-4 py-2 xs:py-2.5 font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 text-sm xs:text-base">
                                        {slide.linkText}
                                        <FaArrowRight className="text-xs xs:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                                <div className="relative">
                                    <Image
                                        src={slide.image}
                                        alt={`${slide.title} - Slide ${slide.id}`}
                                        width={500}
                                        height={500}
                                        className="w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 2xl:w-80 h-auto object-contain transition-all duration-500 hover:scale-105 hover:rotate-1 filter drop-shadow-xl"
                                        priority={slide.id === 1}
                                        sizes="(max-width: 475px) 128px, (max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, (max-width: 1536px) 288px, 320px"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;