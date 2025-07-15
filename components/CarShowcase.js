import { useRef, useState } from 'react';

export default function CarShowcase() {
  const car1Ref = useRef(null);
  const car2Ref = useRef(null);
  const car3Ref = useRef(null);

  // 상태 선언: 어떤 차량이 선택되었는지 저장
  const [selectedCar, setSelectedCar] = useState('');

  const scrollToCar = (ref, carName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setSelectedCar(carName);  // 차량 이름 상태 업데이트
  };

  return (
    <section className="relative h-screen bg-black text-white flex flex-col">
      {/* Overlay */}
      <div className="relative z-10 flex flex-col h-full justify-between p-8 bg-black/40">
        {/* Top Navigation */}
        <div className="flex space-x-4 justify-center mb-4">
          <button onClick={() => scrollToCar(car1Ref, 'Model X')} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Model X</button>
          <button onClick={() => scrollToCar(car2Ref, 'Model Y')} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Model Y</button>
          <button onClick={() => scrollToCar(car3Ref, 'Model Z')} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Model Z</button>
          <button onClick={() => scrollToCar(car3Ref, 'Model Z1')} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Model Z1</button>
          <button onClick={() => scrollToCar(car3Ref, 'Model Z2')} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Model Z2</button>
          <button onClick={() => scrollToCar(car3Ref, 'Model Z3')} className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">Model Z3</button>
        </div>

        {/* Selected Car Info */}
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center text-xl mt-4">
            {selectedCar ? `Selected Car: ${selectedCar}` : 'Please select a car'}
          </div>
        </div>

      </div>
    </section>
  );
}
