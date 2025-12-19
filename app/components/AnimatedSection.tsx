'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  color?: string;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  direction = 'left',
  color = '#265b8f',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const getDirectionStyles = () => {
    switch (direction) {
      case 'left':
        return {
          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
          clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
        };
      case 'right':
        return {
          transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
          clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
        };
      case 'top':
        return {
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
        };
      case 'bottom':
        return {
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
        };
    }
  };

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Colored Curtain Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          backgroundColor: color,
          opacity: isVisible ? 0 : 1,
          ...getDirectionStyles(),
        }}
      />

      {/* Content */}
      <div
        className="relative z-0 transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

