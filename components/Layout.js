import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
    <div style={{paddingTop:'60px'}}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
