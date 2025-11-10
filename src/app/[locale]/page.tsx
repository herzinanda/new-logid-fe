import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params in Next.js 16
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  // Use getTranslations for Server Components (not useTranslations)
  const t = await getTranslations('home');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl mb-4">{t('subtitle')}</p>
            <p className="text-lg mb-8 opacity-90">{t('description')}</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                {t('cta')}
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {t('stats.clients', { count: 500 })}
              </h3>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {t('stats.projects', { count: 1200 })}
              </h3>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {t('stats.years', { count: 10 })}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}