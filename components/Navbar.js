import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  return (
    // <nav className="fixed w-full top-0 left-0 bg-black text-white p-4 flex justify-center space-x-8 z-50">

    <nav className="fixed w-full top-0 left-0 bg-black text-white p-4 flex justify-center space-x-8 z-50">
      <Link href="/">

        {/* <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
          <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontFamily="Montserrat, sans-serif" fontSize="36" fill="#FFFFFF" fontWeight="bold">
            HM
          </text>
        </svg> */}

        <Logo width={30} height={30} />

      </Link>
      <Link href="/models?carIndex=0">Models</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
)
}
