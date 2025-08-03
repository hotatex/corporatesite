import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: '株式会社Tailwinds | ビジネスに追い風を',
  description: 'アプリケーションソフトウェアの企画・開発・販売を通じて、クライアントと社会を裏側から支える会社です。',
  keywords: 'アプリ開発,ソフトウェア開発,東京,芝浦,Tailwinds',
  openGraph: {
    title: '株式会社Tailwinds | ビジネスに追い風を',
    description: 'アプリケーションソフトウェアの企画・開発・販売を通じて、クライアントと社会を裏側から支える会社です。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社Tailwinds',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}