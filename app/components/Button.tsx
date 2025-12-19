import { ReactNode, CSSProperties } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'teal';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  href?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  className = '',
  style,
}: ButtonProps) {
  const baseStyles = 'inline-block font-semibold rounded-lg transition-all duration-300 text-center shadow-md';
  
  const variants = {
    primary: 'bg-[#ac1f2c] text-white hover:bg-[#8d1924] transform hover:scale-105',
    secondary: 'bg-[#265b8f] text-white hover:bg-[#1e4a72] transform hover:scale-105',
    teal: 'bg-[#46c0b5] text-white hover:bg-[#3aa89e] transform hover:scale-105',
    outline: 'border-2 border-[#265b8f] text-[#265b8f] hover:bg-[#265b8f] hover:text-white hover:shadow-lg',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

