import './globals.css'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'

type params = {
  lang: string
}

export default function RootLayout({
  children, 
  params
}: {
  children: React.ReactNode,
  params: params
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Navigation />
        <div className='pt-10 min-h-[calc(100vh-300px)]' >
          {children}  
        </div>
        <Footer />
      </body>
    </html>
  )
}
