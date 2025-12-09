import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent ${
        hover ? 'hover:shadow-2xl hover:-translate-y-4 hover:border-[#46c0b5]/30 transition-all duration-500' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

