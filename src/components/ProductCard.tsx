
import React from 'react';
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
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="group hover-lift">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <LazyImage
            src={product.image}
            alt={product.name}
            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 text-xs bg-sircell-green text-white rounded-full mb-2">
            {product.category}
          </span>
          <h3 className="font-semibold text-lg text-sircell-black mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Entre em contato para mais informações e preços
          </p>
          <a
            href="https://wa.me/5551999999999?text=Olá! Gostaria de saber mais sobre este produto:"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-sircell-green text-white rounded-lg hover:bg-sircell-green-dark transition-colors"
          >
            Consultar Preço
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
