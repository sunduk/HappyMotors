import React from 'react';
import styles from '../../pages/contact.module.css'; // 선택: 스타일링할 CSS 모듈

export default function ContactForm() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>문의하기</h2>
      <div className={styles.formContainer}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdeAS9qJENgg7yUZEt4apD9DRFz_YISGto1jJFfWQhJjhNExQ/viewform?embedded=true"
            width="100%" height="856"
            frameborder="0" marginheight="0" marginwidth="0">
            로드 중…
        </iframe>
      </div>
    </section>
  );
}
