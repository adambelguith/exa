'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'slide' | 'fade' | 'zoom' | 'flip' | 'curtain';
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'slide',
  direction = 'up',
  delay = 0,
  duration = 800,
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'slide':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 
              direction === 'up' ? 'translateY(80px)' :
              direction === 'down' ? 'translateY(-80px)' :
              direction === 'left' ? 'translateX(80px)' :
              'translateX(-80px)',
          };
        case 'fade':
          return {
            ...baseStyle,
            opacity: 0,
          };
        case 'zoom':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'scale(0.8)',
          };
        case 'flip':
          return {
            ...baseStyle,
            opacity: 0,
            transform: direction === 'up' || direction === 'down' 
              ? 'rotateX(90deg)' 
              : 'rotateY(90deg)',
          };
        case 'curtain':
          return {
            ...baseStyle,
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          };
        default:
          return baseStyle;
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: animation === 'curtain' ? 'none' : 'translate(0, 0) scale(1) rotate(0)',
      clipPath: animation === 'curtain' ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'none',
    };
  };

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
}

