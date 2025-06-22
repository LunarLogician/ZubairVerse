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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
