import { useEffect, useState, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px" } = options;

  const [isVisible, setIsVisible] = useState(false);

  // FIX: force the ref to be a div ref
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
