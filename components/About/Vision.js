import styles from "../../pages/about.module.css"

export default function Vision() {
    return (
        <section className={styles.vision}>
            <img className={styles.visionBackground} src="road_green_r1.png" />

            <div className={styles.visionOverlay}>
                <div className="flex flex-col items-center">
                    <h1 className={styles.visionTitle}>“우리가 만든 건 차가 아니라, 당신의 길입니다.”</h1>
                    <br /><br />
                    <p className="text-xl">언제나 이동의 가치를 생각합니다.<br />
                    사람과 사람을 연결하고, 더 안전하고 효율적이며,<br />
                    더 즐거운 주행 경험을 만듭니다.</p>
                </div>
            </div>
        </section>

    );
}