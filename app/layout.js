import {Noto_Serif, Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Phong Dashboard',
}

export default async function RootLayout({ children }) {
  
  return (
    <html data-theme="dark" className='antialiased font-sans' lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
