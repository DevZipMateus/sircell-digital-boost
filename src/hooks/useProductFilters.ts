
import { useState, useMemo, useCallback, useEffect } from 'react';
import { debounce } from 'lodash-es';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

interface FilterState {
  searchQuery: string;
  selectedCategories: string[];
  sortBy: 'name' | 'category';
  sortOrder: 'asc' | 'desc';
}

export const useProductFilters = (products: Product[]) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    selectedCategories: [],
    sortBy: 'name',
    sortOrder: 'asc'
  });

  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // Debounce search query
  const debouncedSetSearch = useMemo(
    () => debounce((query: string) => {
      setDebouncedSearchQuery(query);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSetSearch(filters.searchQuery);
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [filters.searchQuery, debouncedSetSearch]);

  // Get unique categories with counts
  const categoriesWithCounts = useMemo(() => {
    const categoryMap = new Map();
    products.forEach(product => {
      const count = categoryMap.get(product.category) || 0;
      categoryMap.set(product.category, count + 1);
    });
    return Array.from(categoryMap.entries()).map(([category, count]) => ({
      category,
      count
    }));
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Apply search filter
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply category filters
    if (filters.selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        filters.selectedCategories.includes(product.category)
      );
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      let aValue = a[filters.sortBy];
      let bValue = b[filters.sortBy];
      
      if (filters.sortOrder === 'desc') {
        [aValue, bValue] = [bValue, aValue];
      }
      
      return aValue.localeCompare(bValue);
    });

    return filtered;
  }, [products, debouncedSearchQuery, filters.selectedCategories, filters.sortBy, filters.sortOrder]);

  const updateSearchQuery = useCallback((query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setFilters(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter(c => c !== category)
        : [...prev.selectedCategories, category]
    }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      selectedCategories: [],
      sortBy: 'name',
      sortOrder: 'asc'
    });
  }, []);

  const setSorting = useCallback((sortBy: 'name' | 'category', sortOrder: 'asc' | 'desc') => {
    setFilters(prev => ({ ...prev, sortBy, sortOrder }));
  }, []);

  return {
    filters,
    filteredProducts,
    categoriesWithCounts,
    updateSearchQuery,
    toggleCategory,
    clearAllFilters,
    setSorting,
    isSearching: debouncedSearchQuery !== filters.searchQuery
  };
};
