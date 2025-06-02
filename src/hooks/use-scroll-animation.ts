'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elementToObserve = ref.current; // Capture ref.current at the time of effect setup

    if (!elementToObserve) {
      return; // No element to observe, so do nothing
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(elementToObserve); // Unobserve the captured element
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(elementToObserve); // Observe the captured element

    return () => {
      // Cleanup: always unobserve the element that was observed by this effect instance
      observer.unobserve(elementToObserve);
    };
  }, [threshold, rootMargin, triggerOnce, ref]); // ref is included because elementToObserve depends on ref.current

  return { ref, isVisible };
}

// Animation utility classes (keep your existing animation classes below this)
export const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
export const fadeInVisible = "opacity-100 translate-y-0";

export const fadeInLeft = "opacity-0 -translate-x-8 transition-all duration-700 ease-out";
export const fadeInLeftVisible = "opacity-100 translate-x-0";

export const fadeInRight = "opacity-0 translate-x-8 transition-all duration-700 ease-out";
export const fadeInRightVisible = "opacity-100 translate-x-0";

export const scaleIn = "opacity-0 scale-95 transition-all duration-700 ease-out";
export const scaleInVisible = "opacity-100 scale-100";