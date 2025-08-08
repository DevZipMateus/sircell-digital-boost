
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

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
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  // Preload current and next images
  useEffect(() => {
    const preloadImage = (src: string) => {
      if (!preloadedImages.has(src)) {
        const img = new Image();
        img.src = src;
        setPreloadedImages(prev => new Set([...prev, src]));
      }
    };

    // Preload current image
    preloadImage(featuredProducts[currentIndex].image);
    
    // Preload next image
    const nextIndex = currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1;
    preloadImage(featuredProducts[nextIndex].image);
  }, [currentIndex, featuredProducts, preloadedImages]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredProducts.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sircell-black mb-4">
            Um Pouco de Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Confira alguns dos produtos disponíveis em nossa loja
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="aspect-video md:aspect-[16/9] lg:aspect-[21/9] relative">
                    <OptimizedImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      priority={index === 0} // Prioritize first image
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                      <div className="p-6 text-white w-full">
                        <span className="inline-block px-3 py-1 text-sm bg-sircell-green rounded-full mb-2">
                          {product.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-lg opacity-90">
                          Entre em contato para mais informações
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sircell-black rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sircell-black rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-sircell-green' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="inline-flex items-center justify-center px-8 py-3 bg-sircell-green text-white rounded-full hover:bg-sircell-green-dark transition-colors text-lg font-semibold"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
