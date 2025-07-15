import Head from 'next/head'
import IntroVideo from '../components/IntroVideo'
import OurModels from '../components/OurModels'

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Motors</title>
        <meta name="description" content="Happy Motors" />
      </Head>
      <IntroVideo />
      <OurModels />
    </>
  )
}
