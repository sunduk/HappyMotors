import { useEffect } from 'react';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TrimSwiper({
    selectedCar
}) {
    const INTERVAL = 6000;
    const [autoSlide, setAutoSlide] = useState(1);
    const [selectedTrimIndex, setSelectedTrimIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null); // setInterval ID를 저장해서 나중에 정리할 수 있게 관리

    const swiperRef = useRef(null);

    const toggleAutoSlide = () => {
        setAutoSlide((prevAutoSlide) => (prevAutoSlide === 1 ? 0 : 1));
    };

    const startTrimInterval = () => {
        const id = setInterval(() => {
            setSelectedTrimIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % 3;
                return nextIndex;
            });
        }, INTERVAL);

        setIntervalId(id);
    };

    const clearTrimInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const handleSlideChange = (swiper) => {
        clearTrimInterval();
        setSelectedTrimIndex(swiper.activeIndex);

        if (autoSlide === 1) {
            startTrimInterval();
        }
    };



    useEffect(() => {
        if (autoSlide === 1) {
        startTrimInterval();
        } else {
        clearTrimInterval();
        }

        // Cleanup the interval when the component unmounts or carIndex changes
        return () => clearTrimInterval();
    }, [autoSlide]); // autoSlide 상태가 변경될 때마다 실행

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(selectedTrimIndex);
        }
    }, [selectedTrimIndex]);

    return (
      <section>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          onSlideChange={handleSlideChange}
          initialSlide={selectedTrimIndex}
          activeIndex={selectedTrimIndex}
          slideToClickedSlide={false}
          ref={swiperRef}
        >
          {selectedCar.trims.map((trim, i) => (
            <SwiperSlide
              key={i}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                color: 'black',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              <img 
                src= {trim.image}
                alt={trim.name}
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '1920px',
                }}
              />

              {/* 이미지 위에 올릴 텍스트 */}
              <div className="button-container" 
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                }}
              >
                {trim.name}
              </div>


              <div className="button-container-small" 
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '10px',
                    color: 'white',
                    backgroundColor: 'rgb(0,0,0,0.5)',
                    padding: '8px 16px',
                    borderRadius: '50px',
                  }}>
                <button onClick={toggleAutoSlide}>
                  {autoSlide === 1 ? '자동 슬라이드 끄기' : '자동 슬라이드 켜기'}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
}