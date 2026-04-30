import type { Metadata } from 'next';
import './globals.css';
import ConditionalHeader from '@/components/ConditionalHeader';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

export const metadata: Metadata = {
  title: {
    default: 'EDIFY Management Consultancy LLP | Empowering Educational Excellence',
    template: '%s | EDIFY Management Consultancy',
  },
  description:
    'EDIFY Management Consultancy LLP — a premier education management firm under MHUDA Trust. Incorporated in 2018, we provide a complete range of services including Academic services, HR, facilities, technology, and specialized consultancy for institutions across the UAE and beyond.',
  keywords: ['education consultancy', 'school management', 'UAE education', 'MHUDA Trust', 'EDIFY', 'NIMS schools', 'Dubai consultancy', 'educational excellence', 'educational technology'],
  authors: [{ name: 'EDIFY Management Consultancy LLP' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'EDIFY Management Consultancy LLP | Empowering Educational Excellence',
    description: 'Premier education management firm under MHUDA Trust. Academic services, HR, facilities, and technology across UAE.',
    siteName: 'EDIFY Management Consultancy LLP',
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDIFY Management Consultancy LLP',
    description: 'Empowering Educational Excellence through strategic management and innovation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Jost:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Simple Analytics Tracking Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-XXXXX-Y', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
        <ConditionalHeader />
        <LenisProvider>
          {children}
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
