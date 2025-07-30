import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppChat from '@/components/interactive/WhatsAppChat';
import '../globals.css';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins',
  display: 'swap'
});

// SEO Metadata for the site
export const metadata: Metadata = {
  title: 'Ceylon Excursion - Discover Beautiful Sri Lanka',
  description: 'Experience the best of Sri Lanka with our expertly crafted tours. From ancient temples to pristine beaches, create unforgettable memories.',
  keywords: 'Sri Lanka tours, Ceylon Excursion, travel packages, cultural tours, beach holidays',
  authors: [{ name: 'Ceylon Excursion' }],
  openGraph: {
    title: 'Ceylon Excursion - Discover Beautiful Sri Lanka',
    description: 'Experience the best of Sri Lanka with our expertly crafted tours.',
    images: ['/screenshots/hero-image.jpg'],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const locales = ['en', 'de', 'es'];

export default function LocaleLayout({ 
  children, 
  params: { locale } 
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale)) notFound();

  // Load messages for the client
  const messages = useMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Essential meta tags */}
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#005A8D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            
            {/* Add WhatsApp Chat as a floating widget */}
            <div className="fixed bottom-4 right-4 z-50">
              {/* We pass locale and messages as props to ensure the client component gets them */}
              <WhatsAppChat locale={locale} messages={messages} />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}






