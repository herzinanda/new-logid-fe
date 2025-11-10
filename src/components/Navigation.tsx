'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-blue-600">
              MyCompany
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {t('home')}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}