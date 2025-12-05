/**
 * Navigation configuration
 * Centralized navigation data to avoid duplication between Header and MobileMenu
 */

export interface NavItem {
    href: string;
    labelKey: string;
    ariaLabel?: string;
}

export const navigationItems: NavItem[] = [
    {
        href: '/',
        labelKey: 'home',
        ariaLabel: 'Home',
    },
    {
        href: '/about',
        labelKey: 'about',
        ariaLabel: 'About',
    },
    {
        href: '/projects',
        labelKey: 'projects',
        ariaLabel: 'Projects',
    },
    {
        href: '/contact',
        labelKey: 'contact',
        ariaLabel: 'Contact Us',
    },
];
