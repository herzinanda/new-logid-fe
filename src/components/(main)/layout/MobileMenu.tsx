'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useCallback } from 'react';
import NavLinks from './NavLinks';

/**
 * Mobile navigation menu component
 * Features:
 * - Full-screen overlay menu
 * - Backdrop click to close
 * - Active link detection
 * - Accessible with proper ARIA attributes
 */
const MobileMenu = () => {
  const t = useTranslations('navigation');

  /**
   * Close mobile menu and restore body scroll
   */
  const closeMobileMenu = useCallback(() => {
    const menu = document.getElementById('header-mobile');
    const body = document.body;
    const toggleButton = document.getElementById('btn-toggle-menu-mobile');

    if (menu) {
      menu.classList.remove('active');
      body.style.overflow = '';

      // Update toggle button aria-expanded state
      if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    }
  }, []);

  return (
    <div
      id="header-mobile"
      className="header-mobile"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop - click to close */}
      <div
        className="header-mobile-bg"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <div className="header-mobile-wrapper">
        {/* Header with logo and close button */}
        <div className="header-mobile-top">
          <Link
            href="/"
            className="logo-link"
            aria-label="Bricknet - Return to homepage"
            onClick={closeMobileMenu}
          >
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

        {/* Mobile Navigation Links */}
        <nav aria-label="Primary navigation">
          <NavLinks onLinkClick={closeMobileMenu} />
        </nav>

        {/* CTA Button */}
        <div className="header-mobile-bottom">
          <Link
            href="/contact"
            className="btn-cta"
            aria-label="Contact us for a quote"
            onClick={closeMobileMenu}
          >
            {t('ctaContact')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;