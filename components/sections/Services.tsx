'use client'

import { HiLightBulb, HiCode, HiShoppingCart } from 'react-icons/hi'
import { useEffect, useRef } from 'react'

const services = [
  {
    icon: HiLightBulb,
    title: 'アプリケーション企画',
    description: 'お客様のビジネス課題を深く理解し、最適なソリューションを設計します。',
    features: [
      'ビジネス課題の分析',
      'ソリューション設計',
      'UI/UX設計'
    ],
    gradient: 'from-slate-500 to-slate-400',
    delay: 0
  },
  {
    icon: HiCode,
    title: 'アプリケーション開発',
    description: '最新技術を活用し、高品質なアプリケーションを開発します。',
    features: [
      'Webアプリケーション',
      'モバイルアプリケーション',
      '業務システム開発'
    ],
    gradient: 'from-slate-600 to-slate-500',
    delay: 200
  },
  {
    icon: HiShoppingCart,
    title: '販売・運用支援',
    description: '開発後も継続的なサポートで、ビジネスの成長を支援します。',
    features: [
      'アプリケーション販売',
      '保守・運用サポート',
      'アップデート対応'
    ],
    gradient: 'from-slate-700 to-slate-600',
    delay: 400
  }
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.service-card')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="navy-gradient">サービス</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            企画から開発、運用まで一貫してサポートし、
            お客様のビジネスに最適なソリューションを提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 group relative"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className="relative h-full sophisticated-border glass-effect rounded-3xl p-8 overflow-hidden hover:border-slate-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 elegant-shadow">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300`}></span>
                        <span className="text-slate-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button className="text-white font-medium hover:gap-4 transition-all duration-300 flex items-center gap-2 group/btn">
                      <span>詳細を見る</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                     style={{background: `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace('to-', ',')})`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}