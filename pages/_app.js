import Layout from '../components/Layout'
import '../styles/globals.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
