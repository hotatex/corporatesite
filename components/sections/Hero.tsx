'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 sophisticated-mesh opacity-40"></div>
        <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-600 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10 animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-slate-800 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-200">
            <span className="block text-white mb-4">ビジネスに</span>
            <span className="block navy-gradient">追い風を</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            最新テクノロジーと創造性を融合し、<br />
            お客様のビジネスを次のステージへ導きます
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-full transition-all duration-300 hover:scale-105 elegant-shadow"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
              <span className="relative">無料相談を始める</span>
            </Link>
            <Link
              href="#services"
              className="sophisticated-border glass-effect px-8 py-4 rounded-full text-white font-medium hover:bg-slate-700/20 transition-all duration-300 hover:scale-105 text-lg"
            >
              サービスを見る
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}