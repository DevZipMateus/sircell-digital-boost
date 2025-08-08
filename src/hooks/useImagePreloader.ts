
import { useState, useEffect, useCallback } from 'react';

export const useImagePreloader = () => {
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (preloadedImages.has(src)) {
        resolve();
        return;
      }

      if (loadingImages.has(src)) {
        // If already loading, wait for it
        const checkLoaded = () => {
          if (preloadedImages.has(src)) {
            resolve();
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      setLoadingImages(prev => new Set([...prev, src]));

      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, src]));
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(src);
          return newSet;
        });
        resolve();
      };
      img.onerror = () => {
        setLoadingImages(prev => {
          const newSet = new Set(prev);
          newSet.delete(src);
          return newSet;
        });
        reject(new Error(`Failed to preload image: ${src}`));
      };
      img.src = src;
    });
  }, [preloadedImages, loadingImages]);

  const preloadImages = useCallback((sources: string[]) => {
    return Promise.all(sources.map(preloadImage));
  }, [preloadImage]);

  const isImagePreloaded = useCallback((src: string) => {
    return preloadedImages.has(src);
  }, [preloadedImages]);

  const isImageLoading = useCallback((src: string) => {
    return loadingImages.has(src);
  }, [loadingImages]);

  return {
    preloadImage,
    preloadImages,
    isImagePreloaded,
    isImageLoading,
    preloadedImages: Array.from(preloadedImages),
    loadingImages: Array.from(loadingImages)
  };
};
