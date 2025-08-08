
import { useState, useEffect, useCallback } from 'react';

interface UseInfiniteScrollProps {
  items: any[];
  itemsPerPage?: number;
  threshold?: number;
}

export const useInfiniteScroll = ({ 
  items, 
  itemsPerPage = 12, 
  threshold = 100 
}: UseInfiniteScrollProps) => {
  const [displayedItems, setDisplayedItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Reset when items change (e.g., after filtering)
  useEffect(() => {
    const initialItems = items.slice(0, itemsPerPage);
    setDisplayedItems(initialItems);
    setCurrentPage(1);
    setHasMore(items.length > itemsPerPage);
  }, [items, itemsPerPage]);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 200));

    const nextPage = currentPage + 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newItems = items.slice(startIndex, endIndex);

    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setDisplayedItems(prev => [...prev, ...newItems]);
      setCurrentPage(nextPage);
      setHasMore(endIndex < items.length);
    }

    setIsLoading(false);
  }, [items, currentPage, itemsPerPage, isLoading, hasMore]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - threshold
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, threshold]);

  return {
    displayedItems,
    isLoading,
    hasMore,
    loadMore
  };
};
