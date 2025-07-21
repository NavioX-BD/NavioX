import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'NavioX Solutions Inc. | Charting Digital Excellence',
  description: 'NavioX Solutions Inc. serves as your digital compass, guiding businesses through uncharted technological territories with precision-crafted software solutions. We transform ideas into digital reality.',
  keywords: 'software development, web development, digital solutions, NavioX, technology consulting, custom software',
  authors: [{ name: 'NavioX Solutions Inc.' }],
  creator: 'NavioX Solutions Inc.',
  publisher: 'NavioX Solutions Inc.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://navioxbd.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'NavioX Solutions Inc. | Charting Digital Excellence',
    description: 'Your digital compass for navigating technological territories. We transform ideas into digital reality with precision-crafted software solutions.',
    url: '/',
    siteName: 'NavioX Solutions Inc.',
    images: [
      {
        url: '/images/brand/banner.png',
        width: 1200,
        height: 630,
        alt: 'NavioX Solutions Inc. - Charting Digital Excellence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NavioX Solutions Inc. | Charting Digital Excellence',
    description: 'Your digital compass for navigating technological territories.',
    images: ['/images/brand/banner.png'],
    creator: '@NavioXSolutions',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
