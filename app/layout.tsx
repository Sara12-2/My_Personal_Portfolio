import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://my-personal-portfolio-five-zeta.vercel.app'),
  title: {
    default: 'Sara Manzoor - Full Stack Developer & AI Engineer',
    template: '%s | Sara Manzoor',
  },
  description: 'Portfolio of Sara Manzoor - Full Stack Developer, ML Engineer & AI Enthusiast. Building intelligent systems with AI and modern web technologies.',
  keywords: [
    'Sara Manzoor',
    'Full Stack Developer',
    'AI Engineer',
    'Machine Learning',
    'React Developer',
    'Next.js Developer',
    'Python Developer',
    'ML Engineer',
    'Portfolio',
    'Pakistan',
  ],
  authors: [{ name: 'Sara Manzoor' }],
  creator: 'Sara Manzoor',
  publisher: 'Sara Manzoor',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Sara Manzoor - Full Stack Developer & AI Engineer',
    description: 'Portfolio of Sara Manzoor - Full Stack Developer, ML Engineer & AI Enthusiast',
    url: 'https://my-personal-portfolio-five-zeta.vercel.app',
    siteName: 'Sara Manzoor Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sara Manzoor - Full Stack Developer & AI Engineer',
    description: 'Portfolio of Sara Manzoor - Full Stack Developer, ML Engineer & AI Enthusiast',
    images: ['/images/og-image.png'],
  },
  // NOTE: Google Search Console verification removed — add back once you
  // have a real verification string from Search Console:
  // verification: { google: 'REAL_CODE_HERE' },
  alternates: {
    canonical: 'https://my-personal-portfolio-five-zeta.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        
        {/* Toaster with Olive Theme — positioned top-center to avoid overlapping
            the chatbot's floating button, which also sits bottom-right */}
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#2C2C2C',
              color: '#FFFFFF',
              borderRadius: '12px',
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(139, 154, 107, 0.2)',
            },
            success: {
              style: {
                background: '#8B9A6B',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 30px rgba(139, 154, 107, 0.3)',
              },
              iconTheme: {
                primary: '#FFFFFF',
                secondary: '#8B9A6B',
              },
              duration: 4000,
            },
            error: {
              style: {
                background: '#e74c3c',
                color: '#FFFFFF',
                boxShadow: '0 8px 30px rgba(231, 76, 60, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
              duration: 5000,
            },
            loading: {
              style: {
                background: '#2C2C2C',
                color: '#FFFFFF',
                border: '1px solid rgba(139, 154, 107, 0.2)',
              },
            },
          }}
        />
      </body>
    </html>
  )
}