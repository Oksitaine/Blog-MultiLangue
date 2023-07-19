import './globals.css'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import getDictionary from '../../../lib/getDictionary'
import siteConfig from '../../../config/site'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

type params = {
  lang: string
}

export const generateMetadata = async ({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> => {

  const dictionary = await getDictionary(lang)

  return {
    title: {
      template: siteConfig.site + " | %s",
      default: siteConfig.site
    },
    description: dictionary.MetaData.description,
    openGraph: {
      title: siteConfig.site,
      description: dictionary.MetaData.description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: siteConfig.site,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
          width: 1200,
          height: 628,
        }
      ],
      locale: lang,
      type: 'website'
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      languages: {
        'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        'fr-FR': `${process.env.NEXT_PUBLIC_SITE_URL}/fr`,
        'de-DE': `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
      }
    },
    verification: {
      google: "ByzV9I1TtuIm-bVSVZLqagbmDFEtoIztmoyh3qMtDzE"
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
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-NNC2LET1TL"></Script>
      <Script id="google-analystics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NNC2LET1TL');`}
      </Script>
      <Script data-no-cookie strategy='afterInteractive' src="https://cdn.splitbee.io/sb.js"></Script>
      <body className={inter.className}>
        <Navigation local={params.lang} />
        <div className='pt-10 min-h-[calc(100vh-300px)]' >
          {children}
        </div>
        <Footer local={params.lang} />
        <Analytics />
      </body>
    </html>
  )
}