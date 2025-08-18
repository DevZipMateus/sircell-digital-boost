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

  const products = useMemo(() => [
    {
      id: 1,
      name: "Balança Digital de até 500mg",
      image: "/lovable-uploads/galeria/balanca_digital_de_ate_500mg_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 2,
      name: "Cabo de Carregamento Rápido com Cordinha Mais Resistente Entrada V8 Micro Cabo",
      image: "/lovable-uploads/galeria/cabo_de_carregamento_rapido_com_cordinha_mais_resistente_entrada_v8_micro_cabo_.jpg",
      category: "Cabos"
    },
    {
      id: 3,
      name: "Cabo de Carregamento com Entrada Tipo C e Saída USB",
      image: "/lovable-uploads/galeria/cabo_de_carregando_com_entrada_tipo_c_e_saida_usb.jpg",
      category: "Cabos"
    },
    {
      id: 4,
      name: "Cabo de Carregamento Rápido que Mede a Velocidade de W que Está Passando para o Celular",
      image: "/lovable-uploads/galeria/cabo_de_carremento_rapido_que_mede_a_velocidade_de_w_que_esta_passando_para_o_celular_.jpg",
      category: "Cabos"
    },
    {
      id: 5,
      name: "Cabo de Um Metro com Entrada e Saída Tipo C",
      image: "/lovable-uploads/galeria/cabo_de_um_metro_com_entrada_e_saida_tipo_c_tipo_c.jpg",
      category: "Cabos"
    },
    {
      id: 6,
      name: "Cabo de Um Metro de Carregamento Rápido Entrada e Saída Tipo C",
      image: "/lovable-uploads/galeria/cabo_de_um_metro_de_carregamento_rapido_entrada_e_saida_tipo_c_.jpg",
      category: "Cabos"
    },
    {
      id: 7,
      name: "Cabo Turbo de Um Metro Entrada V8 Micro Cabo",
      image: "/lovable-uploads/galeria/cabo_turbo_de_uma_metro_entrada_v8_micro_cabo_.jpg",
      category: "Cabos"
    },
    {
      id: 8,
      name: "Cabos de Carregamento Rápido",
      image: "/lovable-uploads/galeria/cabos_de_carregamento_rapido_.jpg",
      category: "Cabos"
    },
    {
      id: 9,
      name: "Carregador com Fonte de Duas Entrada para iPhone",
      image: "/lovable-uploads/galeria/carregador_com_fonte_de_duas_entrada_para_iphone_.jpg",
      category: "Carregadores"
    },
    {
      id: 10,
      name: "Carregador de Carro com Duas Entradas para Conectar",
      image: "/lovable-uploads/galeria/carregador_de_carro_com_duas_entradas_para_conectar_.jpg",
      category: "Carregadores"
    },
    {
      id: 11,
      name: "Carregador de Carro com Duas Entradas USB",
      image: "/lovable-uploads/galeria/carregador_de_carro_com_duas_entradas_usb_.jpg",
      category: "Carregadores"
    },
    {
      id: 12,
      name: "Carregador iPhone",
      image: "/lovable-uploads/galeria/carregador_iphone_.jpg",
      category: "Carregadores"
    },
    {
      id: 13,
      name: "Carregador Tipo C com Entrada USB",
      image: "/lovable-uploads/galeria/carregador_tipo_c_com_entrada_usb_.jpg",
      category: "Carregadores"
    },
    {
      id: 14,
      name: "Decoração com Luminária",
      image: "/lovable-uploads/galeria/decoracao_com_luminaria_.jpg",
      category: "Decoração"
    },
    {
      id: 15,
      name: "Fonte de Carregamento Rápido com Duas Entradas",
      image: "/lovable-uploads/galeria/fonte_de_carregamento_rapido_com_duas_entradas_.jpg",
      category: "Carregadores"
    },
    {
      id: 16,
      name: "Fonte de Carregamento Rápido Entrada Tipo C",
      image: "/lovable-uploads/galeria/fonte_de_carregamento_rapido_entrada_tipo_c_.jpg",
      category: "Carregadores"
    },
    {
      id: 17,
      name: "Kit Teclado Mouse Sem Fio",
      image: "/lovable-uploads/galeria/kit_teclado_mouse_sem_fio_.jpg",
      category: "Acessórios"
    },
    {
      id: 18,
      name: "Lanterna Ultra Potente",
      image: "/lovable-uploads/galeria/lanterna_ultra_potente_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 19,
      name: "Luminária Decorativa Três em Um - Três Modelos de Usar e Quando Carregada Serve de Power Bank Também",
      image: "/lovable-uploads/galeria/luminaria_decorativa_tres_em_um_tres_modelos_de_usar_e_quando_carregada_serve_de_power_banck_tbm_.jpg",
      category: "Decoração"
    },
    {
      id: 20,
      name: "Microfone com Entrada Lightning",
      image: "/lovable-uploads/galeria/microfone_com_entrada_lightning_.jpg",
      category: "Acessórios"
    },
    {
      id: 21,
      name: "Microfones com Fio com Entradas P2 ou Entrada Tipo C Adaptável Para Cada Modelo de Celular",
      image: "/lovable-uploads/galeria/microfones_com_fio_com_entradas_p2_ou_entrada_tipo_c_adaptavel_para_cada_modelo_de_celular_.jpg",
      category: "Acessórios"
    },
    {
      id: 22,
      name: "Mini Lanterna de Bolso",
      image: "/lovable-uploads/galeria/mini_lanterna_de_bolso_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 23,
      name: "Mini Teclado Sem Fio para Tablet",
      image: "/lovable-uploads/galeria/mini_teclado_sem_fio_para_tablet_.jpg",
      category: "Acessórios"
    },
    {
      id: 24,
      name: "Mix Elétrico",
      image: "/lovable-uploads/galeria/mix_eletrico_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 25,
      name: "Suporte Giratório 360° para Tablet",
      image: "/lovable-uploads/galeria/sue_pote_giratorio_360_para_tabela_.jpg",
      category: "Acessórios"
    },
    {
      id: 26,
      name: "Teclado Sem Fio",
      image: "/lovable-uploads/galeria/teclado_sem_fio_.jpg",
      category: "Acessórios"
    },
    {
      id: 27,
      name: "Umidificador de Ar com Luz de LED",
      image: "/lovable-uploads/galeria/umidificador_de_ar_com_luz_de_lede_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 28,
      name: "Umidificador em Formato de Astronauta",
      image: "/lovable-uploads/galeria/umidificador_em_formato_de_astronauta_.jpg",
      category: "Eletrônicos"
    }
  ], []);

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
