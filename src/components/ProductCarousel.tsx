
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Cabo de Carregamento Rápido V8 com Cordinha",
      image: "/lovable-uploads/galeria/cabo_de_carregamento_rapido_com_cordinha_mais_resistente_entrada_v8_micro_cabo_.jpg",
      category: "Cabos"
    },
    {
      id: 2,
      name: "Carregador iPhone Duplo",
      image: "/lovable-uploads/galeria/carregador_com_fonte_de_duas_entrada_para_iphone_.jpg",
      category: "Carregadores"
    },
    {
      id: 3,
      name: "Kit Teclado e Mouse Sem Fio",
      image: "/lovable-uploads/galeria/kit_teclado_mouse_sem_fio_.jpg",
      category: "Acessórios"
    },
    {
      id: 4,
      name: "Luminária 3 em 1 com Power Bank",
      image: "/lovable-uploads/galeria/luminaria_decorativa_tres_em_um_tres_modelos_de_usar_e_quando_carregada_serve_de_power_banck_tbm_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 5,
      name: "Balança Digital até 500mg",
      image: "/lovable-uploads/galeria/balanca_digital_de_ate_500mg_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 6,
      name: "Fonte Carregamento Rápido Dupla",
      image: "/lovable-uploads/galeria/fonte_de_carregamento_rapido_com_duas_entradas_.jpg",
      category: "Carregadores"
    },
    {
      id: 7,
      name: "Umidificador Astronauta",
      image: "/lovable-uploads/galeria/umidificador_em_formato_de_astronauta_.jpg",
      category: "Eletrônicos"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotation com pausa em hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, isMobile ? 4000 : 3000);

    return () => clearInterval(interval);
  }, [featuredProducts.length, isMobile]);

  // Preload da imagem atual
  useEffect(() => {
    const currentImage = featuredProducts[currentIndex];
    if (currentImage) {
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
        console.log('Carousel image loaded:', currentImage.image);
      };
      img.onerror = () => {
        console.error('Carousel image failed to load:', currentImage.image);
        setIsLoading(false);
      };
      img.src = currentImage.image;
    }
  }, [currentIndex, featuredProducts]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProduct = featuredProducts[currentIndex];

  return (
    <section id="produtos" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sircell-black mb-2 sm:mb-4">
            Um Pouco de Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
            Confira alguns dos produtos disponíveis em nossa loja
          </p>
        </div>

        <div className="relative max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Carousel Container - Simplified */}
          <div className="relative overflow-hidden rounded-lg shadow-lg sm:shadow-xl md:shadow-2xl bg-white">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              {/* Current Image */}
              <div className="absolute inset-0">
                {isLoading ? (
                  <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 text-gray-400">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        console.error('Image failed to load in carousel:', currentProduct.image);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                      <div className="p-3 sm:p-4 md:p-6 lg:p-8 text-white w-full">
                        <span className="inline-block px-2 py-1 text-xs sm:text-sm md:text-base bg-sircell-green rounded-full mb-1 sm:mb-2 md:mb-3">
                          {currentProduct.category}
                        </span>
                        <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 leading-tight">
                          {currentProduct.name}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl opacity-90 hidden sm:block">
                          Entre em contato para mais informações
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sircell-black rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 shadow-md z-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-sircell-black rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 shadow-md z-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-1 sm:space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-sircell-green scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 bg-sircell-green text-white rounded-full hover:bg-sircell-green-dark transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
