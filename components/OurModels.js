import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import carData from '../data/carData.js';
import styles from './OurModels.module.css';

export default function CenteredSwiper() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const swiperRef = useRef(null);

  const onButtonClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section
      className={styles.fullscreenSection}
      style={{ backgroundColor: carData[selectedIndex].backgroundColor }}
    >
      <div>

        {/* Title */}
        <div className={styles.titleWrapper}>
          <p className={styles.title}>Our models</p>
        </div>

        {/* Top Navigation */}
        <div className={styles.buttonGroup}>
          {carData.map((item, i) => (
            <button
              key={i}
              className={`${styles.tabButton} ${
                selectedIndex === i ? styles.active : styles.inactive
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
            <SwiperSlide key={i} className={styles.slide}>
              <Link href={`/models?carIndex=${i}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.slideImage}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
