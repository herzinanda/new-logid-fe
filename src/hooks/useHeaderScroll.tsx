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
        
        if (hasScrolled) {
          setHeaderClass('scrolled is-white');
        } else {
          setHeaderClass(isWhite ? 'is-white' : '');
        }
      }
    };

    window.addEventListener('scroll', toggleHeaderScrollerClass, { passive: true });
    toggleHeaderScrollerClass(); // Initial check

    return () => {
      window.removeEventListener('scroll', toggleHeaderScrollerClass);
    };
  }, [isWhite, isScrolled]);

  return headerClass;
};