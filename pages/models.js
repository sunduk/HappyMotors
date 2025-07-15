// pages/Model.jsx

import React, { useState, useRef } from 'react';
import carData from '../data/carData.js';

import CarSelector from "../components/Models/CarSelector.js";
import MainSpec from "../components/Models/MainSpec.js";
import TrimSwiper from "../components/Models/TrimSwiper.js";
import TrimPrice from "../components/Models/TrimPrice.js";

export default function model() {
  const [selectedCar, setSelectedCar] = useState(carData[0]);

  return (
    <div className="min-h-screen bg-gray-80 text-black">
      {/* 섹션1. 차 선택 */}
      <CarSelector 
        carData={carData}
        setSelectedCar={setSelectedCar}
      />


      {/* 섹션2. 메인스펙: 차 이미지 + 제원 */}
      <MainSpec 
        selectedCar={selectedCar}
      />


      {/* 섹션3. 트림 스와이퍼 */}
      <TrimSwiper 
        selectedCar={selectedCar}
      />


      {/* 섹션4.: 트림별 가격 */}
      <TrimPrice 
        selectedCar={selectedCar}
      />
    </div>
  );
}
