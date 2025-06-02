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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
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

<<<<<<< HEAD
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
=======
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
>>>>>>> 754dd9186e70d418523e1d2ef5aee6e23698ddc4
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Animation utility classes
export const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
export const fadeInVisible = "opacity-100 translate-y-0";

export const fadeInLeft = "opacity-0 -translate-x-8 transition-all duration-700 ease-out";
export const fadeInLeftVisible = "opacity-100 translate-x-0";

export const fadeInRight = "opacity-0 translate-x-8 transition-all duration-700 ease-out";
export const fadeInRightVisible = "opacity-100 translate-x-0";

export const scaleIn = "opacity-0 scale-95 transition-all duration-700 ease-out";
export const scaleInVisible = "opacity-100 scale-100";
