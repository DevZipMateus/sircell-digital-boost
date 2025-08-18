
import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useProductFilters } from '../hooks/useProductFilters';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import ProductSearch from './ProductSearch';
import OptimizedProductCard from './OptimizedProductCard';
import ProductSkeleton from './ProductSkeleton';
import { InlineLoader, LoadMoreButton, EmptyState } from './LoadingStates';

const ProductGallery = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isMobile] = useState(() => window.innerWidth <= 768);

  console.log('ProductGallery - Mobile detected:', isMobile);

  const products = useMemo(() => [], []);

  const {
    filters,
    filteredProducts,
    categoriesWithCounts,
    updateSearchQuery,
    toggleCategory,
    clearAllFilters,
    isSearching
  } = useProductFilters(products);

  const {
    displayedItems,
    isLoading: isLoadingMore,
    hasMore,
    loadMore
  } = useInfiniteScroll({
    items: filteredProducts,
    itemsPerPage: isMobile ? 6 : 12
  });

  const handleImageLoad = useCallback(() => {
    console.log('Image loaded in gallery');
  }, []);

  // Reduzir drasticamente o tempo de loading inicial em mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
      console.log('Initial loading finished');
    }, isMobile ? 100 : 300);

    return () => clearTimeout(timer);
  }, [isMobile]);

  if (isInitialLoading) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="h-6 md:h-8 bg-gray-200 rounded w-48 md:w-64 mx-auto mb-4 md:mb-6 animate-pulse"></div>
            <div className="h-8 md:h-12 bg-gray-200 rounded-full max-w-sm md:max-w-md mx-auto mb-6 md:mb-8 animate-pulse"></div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-6 md:h-8 w-16 md:w-20 bg-gray-200 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <ProductSkeleton count={isMobile ? 4 : 8} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProductSearch
          searchQuery={filters.searchQuery}
          onSearchChange={updateSearchQuery}
          selectedCategories={filters.selectedCategories}
          onCategoryToggle={toggleCategory}
          categoriesWithCounts={categoriesWithCounts}
          onClearAll={clearAllFilters}
          isSearching={isSearching}
          totalResults={filteredProducts.length}
        />

        {/* Products Grid */}
        {displayedItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              {displayedItems.map((product, index) => (
                <OptimizedProductCard
                  key={product.id}
                  product={product}
                  priority={true}
                  onImageLoad={handleImageLoad}
                />
              ))}
            </div>

            {/* Load More or Loading State */}
            {hasMore || isLoadingMore ? (
              isLoadingMore ? (
                <InlineLoader message="Carregando mais produtos..." />
              ) : (
                <LoadMoreButton
                  onClick={loadMore}
                  isLoading={isLoadingMore}
                  hasMore={hasMore}
                />
              )
            ) : null}
          </>
        ) : (
          <EmptyState
            message={
              filters.searchQuery.trim() || filters.selectedCategories.length > 0
                ? "Nenhum produto encontrado com os filtros aplicados."
                : "Nenhum produto disponível no momento."
            }
            onReset={clearAllFilters}
          />
        )}
      </div>
    </section>
  );
};

export default ProductGallery;
