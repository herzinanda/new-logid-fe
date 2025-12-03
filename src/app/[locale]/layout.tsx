import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter } from 'next/font/google';
import Navigation from '@/components/(main)/Navigation';
import '../globals.css';
import Header from '@/components/(main)/layout/Header';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // You can fetch translations for metadata here if needed
  // const t = await getTranslations({ locale, namespace: 'metadata' });
  // return { title: t('homeTitle') };

  // For now, static metadata from bricknet
  return {
    title: 'Home - LogID',
    description: 'LogID - Building Your Vision from the Ground Up. Professional construction services with unmatched quality and expertise.',
    keywords: 'construction, building, architecture, renovation, remodeling, general contracting',
    authors: [{ name: 'LogID' }],
    robots: 'index, follow',
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
        { url: '/favicon.ico', rel: 'shortcut icon' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params in Next.js 15
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* 3rd Party CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/regular/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/plyr@3.8.3/dist/plyr.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.css"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {/* <Navigation /> */}
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
        <Script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/plyr@3.8.3/dist/plyr.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/shufflejs@6.1.2/dist/shuffle.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}