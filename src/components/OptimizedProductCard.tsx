
import React, { memo, useCallback } from 'react';
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
  const handleImageLoad = useCallback(() => {
    onImageLoad?.();
  }, [onImageLoad]);

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
            className="w-full h-full transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            onLoad={handleImageLoad}
            priority={priority}
          />
          
          {/* Category badge overlay */}
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block px-2 py-1 text-xs bg-sircell-green/90 text-white rounded-full backdrop-blur-sm">
              {product.category}
            </span>
          </div>
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
