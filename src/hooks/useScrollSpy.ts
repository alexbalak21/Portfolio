import { useEffect, useState } from 'react';

import { SECTION_OFFSETS, DEFAULT_OFFSET } from '@utils/offsets';

export const useScrollSpy = (
  sectionIds: string[],
  offset?: number // fallback offset if not provided in mapping
): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section (loop backwards for priority)
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        const sectionOffset = SECTION_OFFSETS[sectionIds[i]] ?? offset ?? DEFAULT_OFFSET;
        if (section) {
          const scrollPosition = window.scrollY + sectionOffset;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);
  return activeSection;
};

// Smooth scroll to a section with custom duration
export const scrollToSection = (
  sectionId: string,
  offset: number = 110,
  duration: number = 600 // ms
): void => {
  const section = document.getElementById(sectionId);

  if (section) {
    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = rect.top + scrollTop - offset;

    const start = scrollTop;
    const change = targetPosition - start;
    const startTime = performance.now();

    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease in-out
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, start + change * ease);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  }
};