import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/30">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="bg-white rounded-lg px-3 py-2 inline-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="Tailwinds"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed">
              最新テクノロジーと創造性を融合し、<br />
              お客様のビジネスに追い風を吹かせます
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 sophisticated-border glass-effect rounded-full flex items-center justify-center hover:bg-slate-700/30 transition-all duration-300">
                <span className="text-slate-400 hover:text-white">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 sophisticated-border glass-effect rounded-full flex items-center justify-center hover:bg-slate-700/30 transition-all duration-300">
                <span className="text-slate-400 hover:text-white">in</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">会社情報</h3>
            <div className="space-y-3 text-slate-400">
              <p>株式会社Tailwinds</p>
              <p>〒108-0023</p>
              <p>東京都港区芝浦３丁目１７−１１</p>
              <p>天翔オフィス田町 2F</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">お問い合わせ</h3>
            <div className="space-y-3 text-slate-400">
              <p>TEL: 03-6275-1750</p>
              <p>Email: info@tailwinds.co.jp</p>
            </div>
            <div className="mt-6 space-y-2">
              <Link href="/privacy" className="block text-slate-400 hover:text-white transition-colors duration-300">
                プライバシーポリシー
              </Link>
              <Link href="#" className="block text-slate-400 hover:text-white transition-colors duration-300">
                利用規約
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700/30 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Tailwinds Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}