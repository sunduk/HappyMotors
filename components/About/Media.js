import styles from "../../pages/about.module.css"

export default function Media() {
    return (
    <section className={styles.mediaSection}>
        <h2 className={styles.mediaTitle}>미디어</h2>

        <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
            <iframe
            src="https://www.youtube.com/embed/CBH4sy6aboQ"
            title="기아 | The 2026 K5 & K8 | Respect your way"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ></iframe>
        </div>
        </div>

    </section>
    );
}