
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  ShoppingBag, 
  Shield, 
  Headphones,
  Keyboard,
  Mouse,
  Mic,
  Cable,
  Battery
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Assistência em Celulares",
      description: "Reparo completo de smartphones: tela, bateria, placa, botões e muito mais",
      features: ["Troca de tela", "Substituição de bateria", "Reparo de placa", "Desbloqueio"]
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "Assistência em Tablets",
      description: "Serviços especializados para tablets de todas as marcas e modelos",
      features: ["Reparo de tela", "Problemas de carregamento", "Sistema operacional", "Hardware"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Assistência em Computadores",
      description: "Manutenção preventiva e corretiva em desktops e notebooks",
      features: ["Limpeza interna", "Troca de peças", "Instalação de software", "Diagnóstico"]
    }
  ];

  const products = [
    { icon: <ShoppingBag className="w-6 h-6" />, name: "Capas e Películas" },
    { icon: <Battery className="w-6 h-6" />, name: "Carregadores" },
    { icon: <Headphones className="w-6 h-6" />, name: "Caixas de Som" },
    { icon: <Keyboard className="w-6 h-6" />, name: "Teclados" },
    { icon: <Mouse className="w-6 h-6" />, name: "Mouses" },
    { icon: <Mic className="w-6 h-6" />, name: "Microfones" },
    { icon: <Cable className="w-6 h-6" />, name: "Cabos Diversos" },
    { icon: <Shield className="w-6 h-6" />, name: "Aparelhos Seminovos" }
  ];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-20 bg-sircell-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-sircell-black mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos assistência técnica especializada e venda de produtos eletrônicos 
            com qualidade e garantia que você merece.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="p-8 bg-white hover-lift transition-all duration-300 border-0 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-sircell-black mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-sircell-black">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-primary-hover text-white rounded-full transition-all duration-200"
              >
                Solicitar Orçamento
              </Button>
            </Card>
          ))}
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-sircell-black mb-4">
              Produtos e Acessórios
            </h3>
            <p className="text-lg text-muted-foreground">
              Temos linhas para diversos bolsos, tanto mais caros quanto mais econômicos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {products.map((product, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-sircell-gray hover:bg-primary/5 transition-colors duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                  {product.icon}
                </div>
                <p className="font-medium text-sircell-black text-sm">
                  {product.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:transform hover:scale-105"
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
