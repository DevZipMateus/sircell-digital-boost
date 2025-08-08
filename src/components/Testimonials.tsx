
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Em breve...",
      text: "Nossa empresa está apenas começando, mas estamos comprometidos em oferecer o melhor serviço de assistência técnica da região. Em breve, você verá aqui os depoimentos dos nossos clientes satisfeitos!",
      rating: 5,
      service: "Aguardando primeiros clientes"
    }
  ];

  const benefits = [
    "Atendimento personalizado",
    "Orçamento sem compromisso", 
    "Garantia em todos os serviços",
    "Peças originais e compatíveis",
    "Técnicos especializados",
    "Preços justos e competitivos"
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-sircell-black mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Embora sejamos novos no mercado, nosso compromisso com a qualidade e satisfação do cliente é nossa prioridade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Card */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-0 shadow-lg hover-lift">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 inline-block mr-1" />
                ))}
              </div>
              <blockquote className="text-lg text-sircell-black mb-6 italic leading-relaxed">
                "{testimonials[0].text}"
              </blockquote>
              <div className="border-t border-primary/20 pt-4">
                <h4 className="font-bold text-sircell-black">{testimonials[0].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[0].service}</p>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-sircell-black mb-8">
              Por que escolher a Sircell?
            </h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-sircell-gray hover:bg-primary/5 transition-colors duration-200">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <span className="text-lg font-medium text-sircell-black">{benefit}</span>
              </div>
            ))}
            
            <div className="bg-primary/10 p-6 rounded-2xl mt-8">
              <h4 className="text-xl font-bold text-sircell-black mb-2">
                🎉 Empresa Nova - Preços Especiais!
              </h4>
              <p className="text-muted-foreground">
                Aproveite nosso período de lançamento com condições especiais e atendimento exclusivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
