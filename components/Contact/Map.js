import React from 'react';
import styles from '../../pages/contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.mapContainer}>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.7262796479017!2d127.02567531590029!3d37.49724303987069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2cc3f2a7%3A0xd2e44a2795272fca!2z6rCV64Ko7Jet!5e0!3m2!1sko!2skr!4v1752335058852!5m2!1sko!2skr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        >
        </iframe>
      </div>

      <div className={styles.infoContainer}>
        <p><strong>Email:</strong> your-email-address</p>
        <p><strong>Phone:</strong> +82-1-1234-5678</p>
        <p><strong>Address:</strong> 서울특별시 강남구</p>
        <p><strong>Business Hours:</strong> Mon - Fri, 9am - 6pm</p>
      </div>
    </section>
  );
}
