'use client'

import Link from 'next/link'
import Logo from './Logo'
import styles from './NavBar.module.css'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className="fixed w-full top-0 left-0 bg-black text-white p-4 flex justify-between items-center z-50">
        {/* 햄버거 버튼 (모바일 전용) */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* 메뉴 그룹 */}
        <div
          className={`flex flex-col md:flex md:flex-row flex-1 justify-center absolute md:static top-full left-0 w-full bg-black md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Logo width={30} height={30} />
            </Link>
            <Link href="/models?carIndex=0" onClick={() => setIsOpen(false)}>Models</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            {/* <Link href="/event" onClick={() => setIsOpen(false)}>Event</Link> */}
          </div>
        </div>

        {/* Admin 버튼 (PC에서만) */}
        {/* <div className="hidden md:block">
          <Link href="/admin/dashboard" className={styles.adminLink}>Admin</Link>
        </div> */}
      </nav>
    </>
  )
}
