import React from "react";
import styles from "../../pages/about.module.css"

const AppDownloadSection = () => {
    return (
        <section className={styles.appstoreSection}>
            <div className={styles.appstoreContainer}>
                <div className={styles.appstoreContent}>
                    <h1 className={styles.appstoreTitle}>Happy Motors 앱 다운로드</h1>
                    <div className={styles.appstoreImageWrapper}>
                        <img
                        src="appicon.png"
                        alt="HappyMotors App"
                        className={styles.appstoreImage}
                        />
                    </div>
                </div>

                <div className={styles.appstoreContent}>
                    <div className={styles.appstoreDescription}>
                        <p>Happy Motors 공식 앱을 다운로드하고, 차량관리부터 다양한 혜택까지 한번에 경험하세요.</p>
                    </div>

                    <div className={styles.appstoreButtons}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.locnall.KimGiSa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.appstoreButton}
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className={styles.appstoreStoreLogo}
                            />
                        </a>

                        <a
                            href="https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%82%B4%EB%B9%84-%EC%A3%BC%EC%B0%A8-%EB%B0%9C%EB%A0%9B-%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%B6%A9%EC%A0%84-%EC%84%B8%EC%B0%A8-%EB%B3%B4%ED%97%98-%EC%A4%91%EA%B3%A0%EC%B0%A8/id417698849"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.appstoreButton}
                        >
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="App Store"
                                className={styles.appstoreStoreLogo}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    // <section className={styles.appstoreSection}>
    //   <div className={styles.appstoreContainer}>
    //     <div className={styles.appstoreContent}>
    //       <h1 className={styles.appstoreTitle}>Happy Motors 앱 다운로드</h1>

    //         <div className={styles.appstoreImageWrapper}>
    //         <img
    //             src="appicon.png"
    //             alt="HappyMotors App"
    //             className={styles.appstoreImage}
    //         />
    //         </div>

    //       <p className={styles.appstoreDescription}>
    //         Happy Motors 공식 앱을 다운로드하고, 차량관리부터 다양한 혜택까지 한번에 경험하세요.
    //       </p>

    //       <div className={styles.appstoreButtons}>
    //         <a
    //           href="https://play.google.com/store/apps/details?id=com.locnall.KimGiSa"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={styles.appstoreButton}
    //         >
    //           <img
    //             src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    //             alt="Google Play"
    //             className={styles.appstoreStoreLogo}
    //           />
    //         </a>

    //         <a
    //           href="https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%82%B4%EB%B9%84-%EC%A3%BC%EC%B0%A8-%EB%B0%9C%EB%A0%9B-%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%B6%A9%EC%A0%84-%EC%84%B8%EC%B0%A8-%EB%B3%B4%ED%97%98-%EC%A4%91%EA%B3%A0%EC%B0%A8/id417698849"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={styles.appstoreButton}
    //         >
    //           <img
    //             src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    //             alt="App Store"
    //             className={styles.appstoreStoreLogo}
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default AppDownloadSection;
