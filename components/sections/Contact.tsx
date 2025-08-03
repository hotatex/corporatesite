'use client'

import { useState, useEffect, useRef } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirm(true)
  }

  const confirmSubmit = async () => {
    setIsSubmitting(true)
    setShowConfirm(false)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    })
    
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">お問い合わせ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            お気軽にお問い合わせください。
            2営業日以内にご返信いたします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll opacity-0">
              <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      お名前 <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="山田 太郎"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      メールアドレス <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div className="mb-8 group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    お問い合わせ内容 <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden rounded-xl py-4 text-white font-medium text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
                  <span className="relative">
                    {isSubmitting ? '送信中...' : '送信する'}
                  </span>
                </button>
              </form>
            </div>

            <div className="space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="glass-effect rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">電話番号</h3>
                    <p className="text-gray-400">03-6275-1750</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">メールアドレス</h3>
                    <p className="text-gray-400">info@tailwinds.co.jp</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <HiLocationMarker className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">所在地</h3>
                    <p className="text-gray-400">
                      〒108-0023<br />
                      東京都港区芝浦３丁目１７−１１<br />
                      天翔オフィス田町 203
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showConfirm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-effect rounded-3xl p-8 max-w-md w-full border border-white/20 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6">送信内容の確認</h3>
              <div className="space-y-3 mb-8 text-gray-300">
                <p><span className="text-gray-400">お名前:</span> {formData.name}</p>
                {formData.company && <p><span className="text-gray-400">会社名:</span> {formData.company}</p>}
                <p><span className="text-gray-400">メールアドレス:</span> {formData.email}</p>
                {formData.phone && <p><span className="text-gray-400">電話番号:</span> {formData.phone}</p>}
                <p><span className="text-gray-400">お問い合わせ内容:</span></p>
                <p className="whitespace-pre-wrap bg-white/5 p-4 rounded-xl">{formData.message}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={confirmSubmit}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  送信する
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-4 py-3 glass-effect text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        )}

        {showSuccess && (
          <div className="fixed bottom-8 right-8 glass-effect px-6 py-4 rounded-2xl border border-green-400/50 animate-fade-in-up">
            <p className="text-green-400 font-medium">
              お問い合わせを受け付けました。<br />
              2営業日以内にご返信いたします。
            </p>
          </div>
        )}
      </div>
    </section>
  )
}