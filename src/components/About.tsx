
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Heart, Wrench, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "Seriedade",
      description: "Trabalhamos com compromisso e responsabilidade em cada serviço prestado."
    },
    {
      icon: <Heart className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "Empatia",
      description: "Entendemos as necessidades dos nossos clientes e oferecemos soluções personalizadas."
    },
    {
      icon: <Wrench className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "Qualidade",
      description: "Laboratório próprio com equipamentos modernos para garantir o melhor resultado."
    },
    {
      icon: <Zap className="w-6 md:w-8 h-6 md:h-8 text-primary" />,
      title: "Agilidade",
      description: "Seu celular pronto antes de você sentir falta dele, com rapidez e eficiência."
    }
  ];

  return (
    <section id="sobre" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-sircell-black mb-4">
            Sobre a <span className="text-gradient">Sircell</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Somos uma empresa nova no mercado, mas com muito conhecimento e dedicação. 
            Trabalhamos com seriedade, qualidade e agilidade para oferecer o melhor serviço aos nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6 animate-slide-up order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-sircell-black">
              Nossa Missão
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Procuramos sempre trazer o melhor e mais diferente serviço para nosso cliente. 
              Temos laboratório de assistência técnica próprio e linhas para diversos bolsos, 
              tanto mais caros quanto mais econômicos.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Visamos sempre olhar o lado do cliente e ter empatia, pois sabemos como é estar 
              do outro lado da moeda. Procuramos sempre trazer melhorias e novidades para engajar nossa loja.
            </p>
            
            <div className="bg-sircell-gray p-4 md:p-6 rounded-2xl border-l-4 border-primary">
              <h4 className="text-lg md:text-xl font-bold text-sircell-black mb-2">Nosso Slogan</h4>
              <p className="text-base md:text-lg font-medium text-primary">
                "Teu celular pronto antes de você sentir falta dele!"
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-6 md:p-8">
              <img 
                src="/lovable-uploads/a88afc1d-df3f-416e-b841-a6b20a8057e4.png" 
                alt="Sircell Logo" 
                className="w-32 md:w-48 mx-auto animate-scale-in"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-4 md:p-6 text-center hover-lift bg-white border-gray-100 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                {value.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold text-sircell-black mb-2 md:mb-3">
                {value.title}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
