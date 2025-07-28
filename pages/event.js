import Head from 'next/head'
import Map from '../components/Contact/Map'
import RegisterForm from '../components/Event/RegisterForm'

export default function Event() {
  return (
    <>
      <Head>
        <title>Event</title>
      </Head>
      <RegisterForm />
    </>
  )
}
