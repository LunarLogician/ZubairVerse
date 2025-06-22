import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZubairVerse',
  description: 'Portfolio of Muhammad Zubair',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <main className="relative w-full">
          {children}
        </main>
      </body>
    </html>
  )
}
