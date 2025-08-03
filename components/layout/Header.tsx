'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-effect elegant-shadow' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <div className="bg-white rounded-lg px-3 py-2">
                <Image
                  src="/images/logo/logo.png"
                  alt="Tailwinds"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-300 hover:text-white transition-all duration-300 relative group font-medium">
              <span className="relative z-10">サービス</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#company" className="text-slate-300 hover:text-white transition-all duration-300 relative group font-medium">
              <span className="relative z-10">会社情報</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/#contact" className="sophisticated-border glass-effect px-6 py-3 rounded-full text-white hover:bg-slate-700/30 transition-all duration-300 font-medium">
              お問い合わせ
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-effect text-white hover:bg-white/20"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-effect border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/#services"
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                サービス
              </Link>
              <Link
                href="/#company"
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                会社情報
              </Link>
              <Link
                href="/#contact"
                className="block py-3 px-4 text-white bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}