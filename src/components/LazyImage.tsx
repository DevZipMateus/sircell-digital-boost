
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
  // Detectar mobile imediatamente
  const [isMobile] = useState(() => window.innerWidth <= 768);
  const [isInView, setIsInView] = useState(isMobile || priority);
  const imgRef = useRef<HTMLDivElement>(null);

  console.log('LazyImage - Mobile:', isMobile, 'Priority:', priority, 'IsInView:', isInView, 'Src:', src);

  const handleLoad = useCallback(() => {
    onLoad?.();
    console.log('LazyImage loaded successfully:', src);
  }, [onLoad, src]);

  useEffect(() => {
    // Se é mobile ou priority, carrega imediatamente - SEM lazy loading
    if (isMobile || priority) {
      setIsInView(true);
      console.log('Mobile/Priority detected - Loading image immediately:', src);
      return;
    }

    // Só usar intersection observer em desktop
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          console.log('Desktop lazy loading triggered:', src);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, priority, isMobile, src]);

  return (
    <div ref={imgRef} className={className}>
      {isInView ? (
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          width={width}
          height={height}
          sizes={sizes || (isMobile ? '100vw' : '(max-width: 768px) 100vw, 33vw')}
          priority={priority || isMobile}
          onLoad={handleLoad}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
