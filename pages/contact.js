import Head from 'next/head'
import Map from '../components/Contact/Map'
import CustomerForm from '../components/Contact/CustomerForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Map />
      <CustomerForm />
    </>
  )
}
