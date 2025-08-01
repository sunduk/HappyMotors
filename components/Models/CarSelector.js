import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './CarSelector.module.css';

export default function CarSelector({carData, setSelectedCar}){
    const router = useRouter();

    // query url을 직접 입력해서 들어올 때 carIndex의 넘버값을 가져온다.(0부터 시작)
    const { carIndex } = router.query;

    const [selectedCarIndex, setSelectedCarIndex] = useState(0);

    useEffect(() => {
        if (carIndex !== undefined) {
            const index = parseInt(carIndex, 10);
            if (!isNaN(index) && index >= 0 && index < carData.length) {
                setSelectedCarIndex(index);
                setSelectedCar(carData[index]);
            } else {
                handleCarSelect(0);
            }
        }
    }, [carIndex]);

    // 자동차 모델 선택시 호출되는 함수.
    const handleCarSelect = (index) => {
        setSelectedCarIndex(index);
        router.push(`/models?carIndex=${index}`, undefined, { shallow: true });
    };

    return (
        <div className={styles.buttonContainer}>
            {carData.map((car, index) => (
                <button
                    key={index}
                    onClick={() => handleCarSelect(index)}
                    className={`${styles.button} ${selectedCarIndex == index ? styles.selected : styles.deselected}`}
                >
                {car.name}
                </button>
            ))}
        </div>
    );
}