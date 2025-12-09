'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  revealColor?: string;
  direction?: 'horizontal' | 'vertical' | 'center' | 'diagonal';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export default function RevealSection({
  children,
  revealColor = '#46c0b5',
  direction = 'horizontal',
  speed = 'normal',
  className = '',
}: RevealSectionProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const speedDuration = {
    slow: 1500,
    normal: 1000,
    fast: 600,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
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
  }, []);

  const getRevealStyle = () => {
    const duration = speedDuration[speed];
    
    if (!isRevealed) {
      return {
        clipPath: direction === 'horizontal' 
          ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
          : direction === 'vertical'
          ? 'polygon(0 0, 100% 0, 100% 0, 0 0)'
          : direction === 'center'
          ? 'circle(0% at 50% 50%)'
          : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        transform: 'scale(0.98)',
        opacity: 0,
      };
    }

    return {
      clipPath: direction === 'horizontal' 
        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        : direction === 'vertical'
        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        : direction === 'center'
        ? 'circle(150% at 50% 50%)'
        : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transform: 'scale(1)',
      opacity: 1,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };
  };

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {/* Reveal Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          backgroundColor: revealColor,
          transform: isRevealed ? 'scaleX(0)' : 'scaleX(1)',
          transformOrigin: direction === 'horizontal' ? 'left' : 'top',
          transition: `transform ${speedDuration[speed]}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }}
      />

      {/* Content with Reveal Effect */}
      <div style={getRevealStyle()}>
        {children}
      </div>
    </div>
  );
}

