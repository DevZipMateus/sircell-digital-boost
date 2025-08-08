
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Clock, Shield, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-white to-sircell-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-sircell-green/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-sircell-black mb-4">
                Assistência Técnica de 
                <span className="text-gradient"> Qualidade</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Teu celular pronto antes de você sentir falta dele! Seriedade, qualidade e agilidade em cada serviço.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Agilidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Garantia</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Qualidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Laboratório Próprio</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                Conheça Nossa História
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 hover-lift">
              <img 
                src="/lovable-uploads/a88afc1d-df3f-416e-b841-a6b20a8057e4.png" 
                alt="Sircell - Assistência Técnica de Eletrônicos" 
                className="w-full max-w-md mx-auto"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                Novo!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg px-6 py-3 rounded-2xl border border-gray-100">
                <div className="text-sm text-muted-foreground">Desde 2024</div>
                <div className="font-bold text-sircell-black">Compromisso com qualidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
