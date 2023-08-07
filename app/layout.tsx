import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import variables from './variables.module.scss'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Plan',
  description: 'The gym trainers web managment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:variables.primaryBackgrondColor, color: variables.primaryColor}}>{children}</body>
    </html>
  )
}
