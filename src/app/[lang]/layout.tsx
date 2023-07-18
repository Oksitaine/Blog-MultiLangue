import './globals.css'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import getDictionary from '../../../lib/getDictionary'
import siteConfig from '../../../config/site'

const inter = Inter({ subsets: ['latin'] })

type params = {
  lang: string
}

export const generateMetadata = async ({params : {lang}} : {params : {lang : string}}) => {

  const dictionary = await getDictionary(lang)

  return {
    title : {
      template: siteConfig.site + " | %s",
      default: siteConfig.site
    },
    description: dictionary.MetaData.description,
    openGraph: {
      title: siteConfig.site ,
      description: dictionary.MetaData.description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: siteConfig.site ,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-iamge.png`,
          width: 1200,
          height: 628,
        }
      ],
      locale: lang,
      type: 'website',
    }
  }
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
      <body className={inter.className}>
        <Navigation local={params.lang} />
        <div className='pt-10 min-h-[calc(100vh-300px)]' >
          {children}  
        </div>
        <Footer local={params.lang} />
      </body>
    </html>
  )
}
