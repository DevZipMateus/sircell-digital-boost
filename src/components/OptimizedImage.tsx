
import React, { useState } from 'react';
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
  sizes = '(max-width: 768px) 100vw, 50vw',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile] = useState(() => window.innerWidth <= 768);
  
  console.log('OptimizedImage - Mobile:', isMobile, 'Priority:', priority, 'Loading:', priority || isMobile ? 'eager' : 'lazy', 'Src:', src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
    console.log('OptimizedImage loaded successfully:', src);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('OptimizedImage failed to load:', src, e);
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-xs sm:text-sm p-2 text-center">
          Imagem não encontrada
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`w-full h-full object-cover transition-opacity duration-200 ${
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
