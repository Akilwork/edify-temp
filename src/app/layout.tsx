import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'EDIFY Management Consultancy LLP | Empowering Educational Excellence',
    template: '%s | EDIFY Management Consultancy',
  },
  description:
    'EDIFY Management Consultancy LLP — a premier education management firm under MHUDA Trust. Academic services, HR, facilities, technology, and specialized consultancy for institutions across the UAE and beyond.',
  keywords: ['education consultancy', 'school management', 'UAE education', 'MHUDA Trust', 'EDIFY'],
  openGraph: {
    siteName: 'EDIFY Management Consultancy LLP',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
