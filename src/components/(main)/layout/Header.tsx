'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '../LanguageSwitcher';
import Image from 'next/image';
import { useState } from 'react';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

// You should pass the `isWhite` prop from pages that have a white header by default (like about.html)
// For the homepage, `isWhite` is false.
const Header: React.FC<{ isWhite?: boolean }> = ({ isWhite = false }) => {
  const t = useTranslations('navigation');
  const headerClass = useHeaderScroll(isWhite);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This would ideally be in a global state (Context or Zustand)
  // For now, we'll pass a prop to the layout to toggle the MobileMenu component
  // Or, simpler, we toggle a class on the body
  const toggleMobileMenu = () => {
    const menu = document.getElementById('header-mobile');
    const body = document.body;
    if (menu) {
      const isActive = menu.classList.toggle('active');
      setIsMobileMenuOpen(isActive);
      body.style.overflow = isActive ? 'hidden' : '';
    }
  };

  return (
    <header id="header" className={`header ${headerClass}`} aria-label="Site header">
      <div className="header-wrapper">
        <Link href="/" className="logo-link" aria-label="Bricknet - Return to homepage">
          {/* White Logo */}
          <picture>
            {/* The user-provided SVG is empty, using png fallback */}
            <Image
              src="/images/logo-white@1x.png" // Assuming you move images to public/images
              alt="Bricknet Logo"
              className="logo-white"
              width={164}
              height={32}
              priority
            />
          </picture>
          {/* Color Logo */}
          <picture>
            <Image
              src="/images/logo-color@1x.png"
              alt="Bricknet Logo"
              className="logo-color"
              width={164}
              height={32}
              priority
            />
          </picture>
        </Link>
        <nav aria-label="Primary navigation">
          <ul>
            <li className="group">
              <Link href="/" className="active" aria-current="page">
                {t('home')}
              </Link>
            </li>
            <li className="group">
              <Link href="/about">{t('about')}</Link>
            </li>
            <li className="group">
              <Link href="/projects">{t('projects')}</Link>
            </li>
            <li className="group">
              <Link href="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </nav>
        
        {/* Integration of existing components */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact" className="btn-cta hidden lg:flex" aria-label="Contact us for a quote">
            {t('ctaContact')}
          </Link>
        </div>

        <button
          id="btn-toggle-menu-mobile"
          type="button"
          className="btn-toggle-menu-mobile"
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="header-mobile"
          onClick={toggleMobileMenu}
        >
          <i className="ph ph-list text-2xl" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;