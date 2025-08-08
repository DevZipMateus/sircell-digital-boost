import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Balança Digital até 500mg",
      image: "/lovable-uploads/galeria/balanca_digital_de_ate_500mg_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 2,
      name: "Cabo de Carregamento Rápido V8 com Cordinha",
      image: "/lovable-uploads/galeria/cabo_de_carregamento_rapido_com_cordinha_mais_resistente_entrada_v8_micro_cabo_.jpg",
      category: "Cabos"
    },
    {
      id: 3,
      name: "Cabo USB-C para USB",
      image: "/lovable-uploads/galeria/cabo_de_carregando_com_entrada_tipo_c_e_saida_usb.jpg",
      category: "Cabos"
    },
    {
      id: 4,
      name: "Cabo Medidor de Velocidade de Carregamento",
      image: "/lovable-uploads/galeria/cabo_de_carremento_rapido_que_mede_a_velocidade_de_w_que_esta_passando_para_o_celular_.jpg",
      category: "Cabos"
    },
    {
      id: 5,
      name: "Cabo USB-C 1 Metro",
      image: "/lovable-uploads/galeria/cabo_de_um_metro_com_entrada_e_saida_tipo_c_tipo_c.jpg",
      category: "Cabos"
    },
    {
      id: 6,
      name: "Cabo de Carregamento Rápido USB-C",
      image: "/lovable-uploads/galeria/cabo_de_um_metro_de_carregamento_rapido_entrada_e_saida_tipo_c_.jpg",
      category: "Cabos"
    },
    {
      id: 7,
      name: "Cabo Turbo V8 Micro",
      image: "/lovable-uploads/galeria/cabo_turbo_de_uma_metro_entrada_v8_micro_cabo_.jpg",
      category: "Cabos"
    },
    {
      id: 8,
      name: "Kit Cabos de Carregamento Rápido",
      image: "/lovable-uploads/galeria/cabos_de_carregamento_rapido_.jpg",
      category: "Cabos"
    },
    {
      id: 9,
      name: "Carregador iPhone Duplo",
      image: "/lovable-uploads/galeria/carregador_com_fonte_de_duas_entrada_para_iphone_.jpg",
      category: "Carregadores"
    },
    {
      id: 10,
      name: "Carregador de Carro Duplo",
      image: "/lovable-uploads/galeria/carregador_de_carro_com_duas_entradas_para_conectar_.jpg",
      category: "Carregadores"
    },
    {
      id: 11,
      name: "Carregador Veicular USB Duplo",
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
      name: "Carregador USB-C",
      image: "/lovable-uploads/galeria/carregador_tipo_c_com_entrada_usb_.jpg",
      category: "Carregadores"
    },
    {
      id: 14,
      name: "Luminária Decorativa",
      image: "/lovable-uploads/galeria/decoracao_com_luminaria_.jpg",
      category: "Decoração"
    },
    {
      id: 15,
      name: "Fonte Carregamento Rápido Dupla",
      image: "/lovable-uploads/galeria/fonte_de_carregamento_rapido_com_duas_entradas_.jpg",
      category: "Carregadores"
    },
    {
      id: 16,
      name: "Fonte Carregamento Rápido USB-C",
      image: "/lovable-uploads/galeria/fonte_de_carregamento_rapido_entrada_tipo_c_.jpg",
      category: "Carregadores"
    },
    {
      id: 17,
      name: "Kit Teclado e Mouse Sem Fio",
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
      name: "Luminária 3 em 1 com Power Bank",
      image: "/lovable-uploads/galeria/luminaria_decorativa_tres_em_um_tres_modelos_de_usar_e_quando_carregada_serve_de_power_banck_tbm_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 20,
      name: "Microfone Lightning",
      image: "/lovable-uploads/galeria/microfone_com_entrada_lightning_.jpg",
      category: "Audio"
    },
    {
      id: 21,
      name: "Microfones P2 e USB-C",
      image: "/lovable-uploads/galeria/microfones_com_fio_com_entradas_p2_ou_entrada_tipo_c_adaptavel_para_cada_modelo_de_celular_.jpg",
      category: "Audio"
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
      name: "Suporte Giratório 360º",
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
      name: "Umidificador LED",
      image: "/lovable-uploads/galeria/umidificador_de_ar_com_luz_de_lede_.jpg",
      category: "Eletrônicos"
    },
    {
      id: 28,
      name: "Umidificador Astronauta",
      image: "/lovable-uploads/galeria/umidificador_em_formato_de_astronauta_.jpg",
      category: "Eletrônicos"
    }
  ];

  const categories = [...new Set(products.map(product => product.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  React.useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('Todos')}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === 'Todos'
                  ? 'bg-sircell-green text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-sircell-green-light hover:text-white'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-sircell-green text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-sircell-green-light hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover-lift">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
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
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;
