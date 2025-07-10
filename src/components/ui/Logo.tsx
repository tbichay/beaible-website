'use client';

import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ width = 200, height = 55, className = '' }: LogoProps) {
  const { effectiveTheme } = useTheme();
  
  const logoSrc = effectiveTheme === 'dark' ? '/logo.png' : '/logo-dark.png';
  
  return (
    <div 
      className={`transition-opacity duration-300 ${className}`} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Image
        src={logoSrc}
        alt="beaible Consulting Logo"
        fill
        className="object-contain"
        priority
        sizes={`${width}px`}
      />
    </div>
  );
}