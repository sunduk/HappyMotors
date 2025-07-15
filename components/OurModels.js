import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import carData from '../data/carData.js';

export default function CenteredSwiper() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef(null);

  const onButtonClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index); // 슬라이드 이동 (애니메이션 포함)
    }
  };

  return (
    <section className={`h-screen transition-colors duration-500`}
      style={{backgroundColor:`${carData[selectedIndex].backgroundColor}`}} >
      <div>

        {/* Title */}
        <div className="flex justify-center mb-10 h-30">
          <p className="text-2xl mt-20">Our models</p>
        </div>

        {/* Top Navigation */}
        <div className="flex justify-center mb-4 space-x-4">
          {carData.map((item, i) => (
            <button
              key={i}
              className={`button2 px-4 py-2 rounded ${
                selectedIndex === i ? 'text-black font-bold' : 'text-gray-400'
              }`}
              onClick={() => {
                onButtonClick(i);
                setSelectedIndex(i);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>


        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={10}
          onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
          initialSlide={selectedIndex}
          slideToClickedSlide={true}
          ref={swiperRef}
        >
          {carData.map((item, i) => (
            <SwiperSlide
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: '12px',
                cursor: 'pointer',
              }}
            >
              <Link href={`/models?carIndex=${i}`}>
              <img 
                src={item.image}
                alt={item.name}
                style={{
                  width: '100%',
                  maxWidth: '1500px',
                  height: 'auto',
                  marginBottom: '12px',
                  borderRadius: '8px',
                }}
              />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
