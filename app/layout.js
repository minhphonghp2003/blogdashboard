import {Noto_Serif, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const serif = Noto_Serif({ subsets: ['latin'] })

export const metadata = {
  title: 'Phong Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" className='antialiased font-sans' lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
