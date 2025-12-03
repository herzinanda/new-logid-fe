'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const MobileMenu = () => {
  const t = useTranslations('navigation');

  const closeMobileMenu = () => {
    const menu = document.getElementById('header-mobile');
    const body = document.body;
    if (menu) {
      menu.classList.remove('active');
      body.style.overflow = '';
      // Also update the aria-expanded attribute on the toggle button
      document.getElementById('btn-toggle-menu-mobile')?.setAttribute('aria-expanded', 'false');
    }
  };

  return (
    <div
      id="header-mobile"
      className="header-mobile"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="header-mobile-bg" onClick={closeMobileMenu}></div>
      <div className="header-mobile-wrapper">
        <div className="header-mobile-top">
          <Link href="/" className="logo-link" aria-label="Bricknet - Return to homepage" onClick={closeMobileMenu}>
            <picture>
              <Image
                src="/images/logo-color@1x.png"
                alt="Bricknet Logo"
                className="logo-color"
                width={164}
                height={32}
              />
            </picture>
          </Link>
          <button
            type="button"
            className="btn-close"
            aria-label="Close mobile menu"
            onClick={closeMobileMenu}
          >
            <i className="ph ph-x text-2xl"></i>
          </button>
        </div>

        <nav aria-label="Primary navigation">
          <ul>
            <li className="group">
              <Link href="/" className="active" aria-current="page" onClick={closeMobileMenu}>
                {t('home')}
              </Link>
            </li>
            <li className="group">
              <Link href="/about" onClick={closeMobileMenu}>
                {t('about')}
              </Link>
            </li>
            <li className="group">
              <Link href="/projects" onClick={closeMobileMenu}>
                {t('projects')}
              </Link>
            </li>
            <li className="group">
              <Link href="/contact" onClick={closeMobileMenu}>
                {t('contact')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-mobile-bottom">
          <Link href="/contact" className="btn-cta" aria-label="Contact us for a quote" onClick={closeMobileMenu}>
            {t('talk')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;