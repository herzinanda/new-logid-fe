'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import Image from 'next/image';
import { useState, useCallback, useMemo } from 'react';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import NavLinks from './NavLinks';

interface HeaderProps {
  /**
   * Optional: Override automatic white header detection
   * If not provided, automatically uses white header for all pages except homepage
   */
  isWhite?: boolean;
}

/**
 * Main header component with responsive navigation
 * Features:
 * - Automatic white header for all pages except homepage
 * - Dynamic scroll behavior (changes style on scroll)
 * - Mobile menu toggle
 * - Active link detection
 * - Internationalization support
 */
const Header: React.FC<HeaderProps> = ({ isWhite: isWhiteProp }) => {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  /**
   * Automatically determine if header should be white
   * Homepage: transparent/default header
   * All other pages: white header
   */
  const isWhite = useMemo(() => {
    // If prop is explicitly provided, use it
    if (isWhiteProp !== undefined) {
      return isWhiteProp;
    }

    // Check if current page is homepage
    // Remove locale prefix (e.g., "/en" or "/id")
    const segments = pathname.split('/').filter(Boolean);
    const isHomepage = segments.length === 0 ||
      (segments.length === 1 && ['en', 'id'].includes(segments[0]));

    // Debug logging (remove in production)
    console.log('Header Detection:', {
      pathname,
      segments,
      isHomepage,
      willBeWhite: !isHomepage
    });

    // Use white header for all pages except homepage
    return !isHomepage;
  }, [pathname, isWhiteProp]);

  const headerClass = useHeaderScroll(isWhite);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Toggle mobile menu visibility
   * Manages body overflow and aria-expanded state
   */
  const toggleMobileMenu = useCallback(() => {
    const menu = document.getElementById('header-mobile');
    const body = document.body;

    if (menu) {
      const isActive = menu.classList.toggle('active');
      setIsMobileMenuOpen(isActive);
      body.style.overflow = isActive ? 'hidden' : '';
    }
  }, []);

  return (
    <header id="header" className={`header ${headerClass}`} aria-label="Site header">
      <div className="header-wrapper">
        {/* Logo */}
        <Link href="/" className="logo-link" aria-label="Bricknet - Return to homepage">
          {/* White Logo - visible on transparent/dark backgrounds */}
          <picture>
            <Image
              src="/images/logo-white@1x.png"
              alt="Bricknet Logo"
              className="logo-white"
              width={164}
              height={32}
              priority
            />
          </picture>
          {/* Color Logo - visible on white backgrounds */}
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

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation">
          <NavLinks />
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="btn-cta hidden lg:flex"
            aria-label="Contact us for a quote"
          >
            {t('ctaContact')}
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="btn-toggle-menu-mobile"
          type="button"
          className="btn-toggle-menu-mobile"
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
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