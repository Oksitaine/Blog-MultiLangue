import Link from 'next/link'
import './globals.css'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navigation />
        <div className='pt-10' >
          {children}  
        </div>
        <Footer />
      </body>
    </html>
  )
}
