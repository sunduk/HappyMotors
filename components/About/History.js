import styles from "../../pages/about.module.css"

// 동적으로 데이터를 받아서 넣는 방식
// export default function History({ items }) {
//   return (
//     <section className="historySection">
//       <div className="container">
//         <h2 className="historyTitle">회사 연혁</h2>
//         <div className="historyList">
//           {items.map((item) => (
//             <div className="historyItem" key={item.year}>
//               <span className="historyYear">{item.year}</span>
//               <div className="historyContent">
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function History() {
    return (
    <section className={styles.historySection}>
    <div className={styles.container}>
        <h2 className={styles.historyTitle}>회사 연혁</h2>
        <div className={styles.historyList}>
            <div className={styles.historyItem}>
                <span className={styles.historyYear}>2025</span>
                <div className={styles.historyContent}>
                <h3>새로운 도약</h3>
                <p>글로벌 시장 진출 및 친환경 차량 라인업 확대.</p>
                </div>
            </div>

            <div className={styles.historyItem}>
                <span className={styles.historyYear}>2022</span>
                <div className={styles.historyContent}>
                <h3>혁신적인 모델 출시</h3>
                <p>전기차 모델 'EcoDrive' 시리즈 출시로 전기차 시장 진입.</p>
                </div>
            </div>

            <div className={styles.historyItem}>
                <span className={styles.historyYear}>2017</span>
                <div className={styles.historyContent}>
                <h3>국내 시장 1위 달성</h3>
                <p>세단 시장 점유율 1위를 기록하며 입지 강화.</p>
                </div>
            </div>

            <div className={styles.historyItem}>
                <span className={styles.historyYear}>2010</span>
                <div className={styles.historyContent}>
                <h3>회사 설립</h3>
                <p>Happy Motors 설립, 첫 번째 모델 출시.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
}