import { useState, useEffect } from 'react';
import adminStyles from './Admin.module.css';

import { saveAdminSettings, getAdminSettings } from './AdminStorage';

export default function MainVideoReference() {
  const [videoReferenceText, setVideoReferenceText] = useState('');
  const [videoLink, setVideoLink] = useState('');

  // 페이지 로드 시 localStorage에서 읽기
  useEffect(() => {
      const stored = getAdminSettings();
      if (stored) {
          setVideoReferenceText(stored.videoReferenceText || '');
          setVideoLink(stored.videoLink || '');
      } else {
          // 저장된 값이 없으면 기본값!
          setVideoReferenceText('');
          setVideoLink('');
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
        videoReferenceText: videoReferenceText,
        videoLink: videoLink,
      });

      console.log("저장됨:");
      alert("슬로건이 localSTorage에 저장되었습니다! (임시)");
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="videoReferenceText">출처 텍스트(Video by ...)</label>
        <input
          type="text"
          id="videoReferenceText"
          className={adminStyles.input}
          value={videoReferenceText}
          onChange={(e) => setVideoReferenceText(e.target.value)}
        />
      </form>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="videoLink">동영상 링크 주소</label>
        <input
          type="text"
          id="videoLink"
          className={adminStyles.input}
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
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
