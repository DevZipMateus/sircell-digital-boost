
import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  categoriesWithCounts: Array<{ category: string; count: number }>;
  onClearAll: () => void;
  isSearching: boolean;
  totalResults: number;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryToggle,
  categoriesWithCounts,
  onClearAll,
  isSearching,
  totalResults
}) => {
  const hasActiveFilters = searchQuery.trim() || selectedCategories.length > 0;

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 h-6 w-6"
            onClick={() => onSearchChange('')}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin h-4 w-4 border-2 border-sircell-green border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>

      {/* Filter Categories */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <SlidersHorizontal className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filtrar por categoria:</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {categoriesWithCounts.map(({ category, count }) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <Button
                key={category}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryToggle(category)}
                className={`rounded-full transition-all duration-200 ${
                  isSelected
                    ? 'bg-sircell-green hover:bg-sircell-green-dark text-white'
                    : 'hover:bg-sircell-green-light hover:text-white'
                }`}
              >
                {category}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {count}
                </Badge>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Active Filters and Results */}
      {hasActiveFilters && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{totalResults} produtos encontrados</span>
            {selectedCategories.length > 0 && (
              <div className="flex gap-1">
                {selectedCategories.map(category => (
                  <Badge key={category} variant="outline" className="text-xs">
                    {category}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-1 h-3 w-3 p-0"
                      onClick={() => onCategoryToggle(category)}
                    >
                      <X className="h-2 w-2" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="text-sm"
          >
            Limpar filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
