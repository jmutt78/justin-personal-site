const SCROLL_UP: 'up' = 'up';
const SCROLL_DOWN: 'down' = 'down';

import { useState, useEffect } from 'react';

interface UseScrollDirectionProps {
  initialDirection: 'up' | 'down';
  thresholdPixels?: number;
  off?: boolean;
}

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off,
}: UseScrollDirectionProps) => {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    !off ? window.addEventListener('scroll', onScroll) : setScrollDir(initialDirection);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
};

export default useScrollDirection;
