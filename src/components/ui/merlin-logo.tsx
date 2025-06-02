'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MerlinLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
}

export function MerlinLogo({ className = "", size = 'md', darkMode = false }: MerlinLogoProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback text logo with improved styling
  if (imageError) {
    return (
      <div className={`${className} flex items-center`}>
        <div className={`${darkMode ? 'text-gray-900' : 'text-white'} font-garamond font-medium text-2xl tracking-wide`}>
          MERLIN AI
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center`}>
      <Image
        src="/merlin-logo.png"
        alt="Merlin AI"
        width={200}
        height={40}
        className={`${sizeClasses[size]} w-auto object-contain ${!darkMode ? 'brightness-0 invert' : ''}`}
        onError={handleImageError}
        priority
      />
    </div>
  );
}
