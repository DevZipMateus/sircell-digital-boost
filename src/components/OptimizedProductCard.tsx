
import React, { memo, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from './LazyImage';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onImageLoad?: () => void;
}

const OptimizedProductCard: React.FC<ProductCardProps> = memo(({ 
  product, 
  priority = false,
  onImageLoad 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile] = useState(() => window.innerWidth <= 768);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onImageLoad?.();
    console.log('ProductCard image loaded:', product.name);
  }, [onImageLoad, product.name]);

  const handleWhatsAppClick = useCallback(() => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre: ${product.name} (${product.category})`
    );
    window.open(
      `https://wa.me/5551999999999?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  }, [product.name, product.category]);

  return (
    <Card className="group hover-lift transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg relative bg-gray-100">
          <LazyImage
            src={product.image}
            alt={product.name}
            className={`w-full h-full transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes={isMobile ? '100vw' : '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'}
            onLoad={handleImageLoad}
            priority={priority || isMobile}
          />
          
          {/* Category badge overlay */}
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block px-2 py-1 text-xs bg-sircell-green/90 text-white rounded-full backdrop-blur-sm">
              {product.category}
            </span>
          </div>
          
          {/* Loading indicator */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 text-gray-400">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-sircell-black mb-2 line-clamp-2 group-hover:text-sircell-green transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Entre em contato para mais informações e preços
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-sircell-green text-white rounded-lg hover:bg-sircell-green-dark transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sircell-green focus:ring-offset-2"
            aria-label={`Consultar preço do produto ${product.name}`}
          >
            Consultar Preço
          </button>
        </div>
      </CardContent>
    </Card>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.product.id === nextProps.product.id &&
    prevProps.priority === nextProps.priority
  );
});

OptimizedProductCard.displayName = 'OptimizedProductCard';

export default OptimizedProductCard;
