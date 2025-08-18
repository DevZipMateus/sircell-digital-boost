
import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 320px) 100vw, (max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate WebP and responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const baseUrl = baseSrc.replace(/\.[^/.]+$/, '');
    const extension = baseSrc.match(/\.[^/.]+$/)?.[0] || '.jpg';
    
    return `${baseSrc} 1x, ${baseSrc} 2x`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
    console.log('OptimizedImage loaded successfully:', src); // Debug log
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
    console.error('OptimizedImage failed to load:', src); // Debug log
  };

  useEffect(() => {
    // Check if WebP is supported
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    const webpSupported = checkWebPSupport();
    
    // For now, use original src (in production you'd convert to WebP)
    setImageSrc(src);
  }, [src]);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-xs sm:text-sm p-2 text-center">Imagem não encontrada</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        srcSet={generateSrcSet(imageSrc)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority || isMobile ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
    </div>
  );
};

export default OptimizedImage;
