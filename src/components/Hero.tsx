
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, Shield, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/425d446e-8ec0-4fdb-8cf7-66691780890d.png')`
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 md:top-20 right-5 md:right-10 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-24 md:w-48 h-24 md:h-48 bg-sircell-green/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Assistência Técnica de 
                <span className="text-gradient block sm:inline"> Qualidade</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                Teu celular pronto antes de você sentir falta dele! Seriedade, qualidade e agilidade em cada serviço.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
                <span className="font-medium text-white text-sm md:text-base">Agilidade</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Shield className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
                <span className="font-medium text-white text-sm md:text-base">Garantia</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Star className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
                <span className="font-medium text-white text-sm md:text-base">Qualidade</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 md:w-5 h-4 md:h-5 text-white" />
                </div>
                <span className="font-medium text-white text-sm md:text-base">Lab. Próprio</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact} 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })} 
                className="border-2 border-white text-white hover:text-sircell-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-200 backdrop-blur-sm bg-green-600 hover:bg-green-500 w-full sm:w-auto"
              >
                Nossa História
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="relative rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 hover-lift border border-white/20 bg-white/[0.47] max-w-sm md:max-w-md mx-auto">
              <img 
                src="/lovable-uploads/a88afc1d-df3f-416e-b841-a6b20a8057e4.png" 
                alt="Sircell - Assistência Técnica de Eletrônicos" 
                className="w-full h-auto mx-auto" 
              />
              
              {/* Floating elements */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-primary text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold animate-bounce">
                Novo!
              </div>
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 bg-white/20 backdrop-blur-md shadow-lg px-4 md:px-6 py-2 md:py-3 rounded-2xl border border-white/30">
                <div className="text-xs md:text-sm text-white/80">Desde 2024</div>
                <div className="font-bold text-white text-sm md:text-base">Compromisso com qualidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
