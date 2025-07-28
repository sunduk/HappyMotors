import { useState } from 'react';
import styles from './MainVideoForm.module.css';
import adminStyles from './Admin.module.css';

import MainVideoReference from './MainVideoReference';

export default function MainVideoForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const [videoReferenceText, setVideoReferenceText] = useState('');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type !== 'video/mp4') {
      setError('mp4 파일만 업로드할 수 있습니다.');
      setFile(null);
      return;
    }
    setError('');
    setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type !== 'video/mp4') {
      setError('mp4 파일만 업로드할 수 있습니다.');
      setFile(null);
      return;
    }
    setError('');
    setFile(dropped);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError('파일을 선택해주세요.');
      return;
    }
    setError('');
    console.log('파일 업로드 시작:', file);
    // TODO: 파일 업로드 API 호출 등 실제 처리 구현
  };

  return (
    <div className={adminStyles.formBox}>

        {/* 동영상 파일 업로드 폼 */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="videoUpload">동영상 파일 (mp4)</label>

            <div
            className={styles.dropZone}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            >
            {file ? (
                <p>선택한 파일: {file.name}</p>
            ) : (
                <p>파일을 끌어다 놓거나 클릭하여 선택하세요.</p>
            )}

            <input
                id="videoUpload"
                type="file"
                accept="video/mp4"
                onChange={handleFileChange}
                className={styles.fileInput}
            />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={adminStyles.buttonContainer}>
            <button type="submit" className={adminStyles.button}>
                업로드
            </button>
            </div>
        </form>

        <MainVideoReference />
    </div>
  );
}
