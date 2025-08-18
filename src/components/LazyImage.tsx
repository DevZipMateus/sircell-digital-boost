
import React, { useState, useRef, useEffect, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  threshold?: number;
  rootMargin?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  threshold = 0.1,
  rootMargin = '50px',
  sizes,
  priority = false,
  onLoad
}) => {
  const [isInView, setIsInView] = useState(true); // Always start as true to show images immediately
  const imgRef = useRef<HTMLDivElement>(null);

  const handleLoad = useCallback(() => {
    onLoad?.();
  }, [onLoad]);

  return (
    <div ref={imgRef} className={className}>
      <OptimizedImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        width={width}
        height={height}
        sizes={sizes || '(max-width: 768px) 100vw, 33vw'}
        priority={priority}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default LazyImage;
