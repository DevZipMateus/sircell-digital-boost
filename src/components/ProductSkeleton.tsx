
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductSkeletonProps {
  count?: number;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ count = 8 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group animate-pulse">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="p-0">
              {/* Image skeleton */}
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <Skeleton className="w-full h-full" />
              </div>
              
              {/* Content skeleton */}
              <div className="p-4 space-y-3">
                {/* Category badge */}
                <Skeleton className="h-5 w-20 rounded-full" />
                
                {/* Product name */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                
                {/* Description */}
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
                
                {/* Button */}
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
