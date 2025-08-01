import Head from 'next/head'
import Vision from '../components/About/Vision'
import History from '../components/About/History'
import Media from '../components/About/Media'
import AppStore from '../components/About/AppStore'
import App from 'next/app'

// SSR방식.
// 1) next.config.js에서 output: 'export', 제거할것
// 2) <History items={historyItems}/> 로 변경
// // 예시로 fake DB 호출 함수
// async function getHistoryFromDB() {
//   // 실제로는 DB 연결해서 SELECT 쿼리 날리면 됩니다.
//   return [
//     { year: 2025, title: '새로운 도약', description: '글로벌 시장 진출 및 친환경 차량 라인업 확대.' },
//     { year: 2022, title: '혁신적인 모델 출시', description: "전기차 모델 'EcoDrive' 시리즈 출시로 전기차 시장 진입." },
//     { year: 2017, title: '국내 시장 1위 달성', description: '세단 시장 점유율 1위를 기록하며 입지 강화.' },
//     { year: 2010, title: '회사 설립', description: 'Happy Motors 설립, 첫 번째 모델 출시.' }
//   ];
// }

// export async function getServerSideProps() {
//   const historyItems = await getHistoryFromDB(); // 여기서 DB 호출
//   return {
//     props: {
//       historyItems
//     }
//   };
// }

export default function About({ historyItems }) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Vision />
      <History items={historyItems}/>
      <Media />
      <AppStore />
    </>
  )
}
