'use client';
import { useEffect, useState } from 'react';

/**
 * Returns whether the viewport is mobile-sized (<= 768px).
 *
 * Always starts as `false` so the server render and the first client render
 * match exactly (no hydration mismatch). The real value is computed after
 * mount, which means mobile visitors briefly see the desktop variant before
 * this updates — an accepted trade-off for eliminating the mismatch.
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
