'use client';
import { lightTheme } from '@/infraestructure/themes/themeConfig'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={lightTheme}>
            {children}
          </ThemeProvider>
          </StyledComponentsRegistry>
        </body>
    </html>
  )
}