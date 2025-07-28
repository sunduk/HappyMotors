'use client';

import { useState, useEffect } from 'react';
import styles from './SloganForm.module.css';
import adminStyles from './Admin.module.css';

import { saveAdminSettings, getAdminSettings } from './AdminStorage';

export default function SloganForm() {
    const STORAGE_KEY = 'siteSettings';
    const [slogan, setSlogan] = useState('');
    const [subSlogan, setSubSlogan] = useState('');

    // 페이지 로드 시 localStorage에서 읽기
    useEffect(() => {
        const stored = getAdminSettings();
        if (stored) {
            setSlogan(stored.mainSlogan || '');
            setSubSlogan(stored.subSlogan || '');
        } else {
            // 저장된 값이 없으면 기본값!
            setSlogan('Welcome to Happy Motors.');
            setSubSlogan('Experience the future of mobility, simplified.');
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // 임시 코드 : JSON객체로 만들어서 저장
        const data = {
            mainSlogan: slogan,
            subSlogan: subSlogan,
        };

        saveAdminSettings({
            mainSlogan: slogan,
            subSlogan: subSlogan,
        });

        console.log("저장됨:", slogan, subSlogan);
        alert("슬로건이 localSTorage에 저장되었습니다! (임시)");
    };

    return (
    <div className={adminStyles.formBox}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="slogan">메인 슬로건</label>
        <input
          type="text"
          id="slogan"
          className={adminStyles.input}
          value={slogan}
          onChange={(e) => setSlogan(e.target.value)}
        />
      </form>

      <br /><br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="subSlogan">보조 슬로건</label>
        <input
          type="text"
          id="subSlogan"
          className={adminStyles.input}
          value={subSlogan}
          onChange={(e) => setSubSlogan(e.target.value)}
        />

        <div className={adminStyles.buttonContainer}>
          <button type="submit" className={adminStyles.button}>
            저장하기
          </button>
        </div>
      </form>
    </div>
  );
}
