import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent ${
        hover ? 'hover:shadow-2xl hover:-translate-y-4 hover:border-[#46c0b5]/30 transition-all duration-500' : ''
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

