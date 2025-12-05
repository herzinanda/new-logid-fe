'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/config/navigation';

interface NavLinksProps {
    onLinkClick?: () => void;
    className?: string;
}

/**
 * Reusable navigation links component
 * Automatically detects active page using usePathname
 * Used in both Header and MobileMenu
 */
const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, className = '' }) => {
    const t = useTranslations('navigation');
    const pathname = usePathname();

    // Remove locale prefix from pathname for comparison
    // e.g., "/en/about" -> "/about"
    const getCleanPathname = (path: string) => {
        const segments = path.split('/').filter(Boolean);
        // If first segment is a locale (en, id, etc.), remove it
        if (segments.length > 0 && ['en', 'id'].includes(segments[0])) {
            return '/' + segments.slice(1).join('/');
        }
        return path;
    };

    const cleanPathname = getCleanPathname(pathname);

    const isActive = (href: string) => {
        // Exact match for home
        if (href === '/') {
            return cleanPathname === '/' || cleanPathname === '';
        }
        // For other pages, check if pathname starts with href
        return cleanPathname.startsWith(href);
    };

    return (
        <ul className={className}>
            {navigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                    <li key={item.href} className="group">
                        <Link
                            href={item.href}
                            className={active ? 'active' : ''}
                            aria-current={active ? 'page' : undefined}
                            aria-label={item.ariaLabel}
                            onClick={onLinkClick}
                        >
                            {t(item.labelKey)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
