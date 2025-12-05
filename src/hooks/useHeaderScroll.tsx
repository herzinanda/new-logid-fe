'use client';

import { useState, useEffect } from 'react';

export const useHeaderScroll = (isWhite: boolean = false) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerClass, setHeaderClass] = useState(isWhite ? 'is-white' : '');

  useEffect(() => {
    const threshold = 50; // Scrolled past 50px

    const toggleHeaderScrollerClass = () => {
      const hasScrolled = window.scrollY > threshold;

      if (hasScrolled !== isScrolled) {
        setIsScrolled(hasScrolled);
      }

      // Update header class based on scroll and isWhite prop
      if (hasScrolled) {
        setHeaderClass('scrolled is-white');
      } else {
        setHeaderClass(isWhite ? 'is-white' : '');
      }
    };

    // Initial check
    toggleHeaderScrollerClass();

    window.addEventListener('scroll', toggleHeaderScrollerClass, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleHeaderScrollerClass);
    };
  }, [isWhite, isScrolled]); // Re-run when isWhite changes

  return headerClass;
};