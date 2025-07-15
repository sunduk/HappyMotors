'use client';

import { useState, useEffect } from 'react';
import styles from './SloganForm.module.css';

export default function SloganForm() {
    const STORAGE_KEY = 'siteSettings';
    const [slogan, setSlogan] = useState('');

    // ✅ 페이지 로드 시 localStorage에서 읽기
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const json = JSON.parse(stored);
            setSlogan(json.mainSlogan || '');
        } else {
            // 저장된 값이 없으면 기본값!
            setSlogan('Welcome to Happy Motors. Experience the future of mobility, simplified.');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 임시 코드 : JSON객체로 만들어서 저장
        const data = {
            mainSlogan: slogan,
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        console.log("저장됨:", slogan);
        alert("슬로건이 localSTorage에 저장되었습니다! (임시)");
    };

    return (
        <div className={styles.formBox}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
            <label htmlFor="slogan">메인 슬로건</label>
            <input
                type="text"
                id="slogan"
                className={styles.input}
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
            />
            <button type="submit">저장하기</button>
        </form>
        </div>
    );
}
