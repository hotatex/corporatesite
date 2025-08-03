'use client'

import { useEffect, useRef } from 'react'

export default function Company() {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const companyInfo = [
    { label: '会社名', value: '株式会社Tailwinds' },
    { label: '英文表記', value: 'Tailwinds Inc.' },
    { label: '所在地', value: '〒108-0023\n東京都港区芝浦３丁目１７−１１\n天翔オフィス田町 203' },
    { label: '電話番号', value: '03-6275-1750' },
    { label: 'メールアドレス', value: 'info@tailwinds.co.jp' },
    { label: '設立日', value: '令和7年2月20日' },
    { label: '事業内容', value: 'アプリケーションソフトウェアの企画・開発・販売' },
  ]

  return (
    <section ref={sectionRef} id="company" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">会社情報</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            私たちは、最新技術とクリエイティビティを組み合わせ、
            お客様のビジネスに新しい価値を創造します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
              会社概要
            </h3>
            <div className="glass-effect rounded-3xl p-8 border border-white/10">
              <dl className="space-y-6">
                {companyInfo.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <dt className="font-medium text-gray-400">{item.label}</dt>
                    <dd className="sm:col-span-2 text-white whitespace-pre-line">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
              アクセス
            </h3>
            <div className="glass-effect rounded-3xl overflow-hidden border border-white/10 group">
              <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.729928512!2d139.74759!3d35.633971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188baed2a7aab7%3A0x8f2e8e24c2c2f873!2z44CSMTA4LTAwMjMg5p2x5Lqs6YO95riv5Yy66Iqd5rWm77yT5LiB55uu77yR77yX4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1645000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                ></iframe>
              </div>
              <div className="p-6 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-300">
                  JR田町駅より徒歩8分 / 都営三田駅より徒歩5分
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}