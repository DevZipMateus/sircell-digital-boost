
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "Endereço",
      value: "Marechal Floriano 1001",
      action: "Ver no Mapa"
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "Telefone",
      value: "(54) 9 8101-4238",
      action: "Ligar Agora"
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "E-mail",
      value: "sircell27@gmail.com",
      action: "Enviar E-mail"
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "Funcionamento",
      value: "Seg a Sex: 9h às 18:30 (sem fechar meio dia) | Sáb: 9h às 12h",
      action: null
    }
  ];

  const openMap = () => {
    window.open('https://maps.app.goo.gl/ozdcieJQWvuu8W7K7?g_st=ipc', '_blank');
  };

  const makeCall = () => {
    window.open('tel:+5554981014238');
  };

  const sendEmail = () => {
    window.open('mailto:sircell27@gmail.com');
  };

  return (
    <section id="localizacao" className="py-8 sm:py-12 lg:py-16 bg-sircell-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12 animate-fade-in">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sircell-black mb-2 sm:mb-4">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
            Venha nos visitar! Estamos sempre prontos para atendê-lo com qualidade e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4 animate-slide-up order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl font-bold text-sircell-black mb-3 sm:mb-4">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-3 sm:p-4 bg-white hover-lift transition-all duration-300 border-0 shadow-md hover:shadow-lg">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{info.label}</p>
                      <p className="text-xs sm:text-sm lg:text-base font-semibold text-sircell-black break-words leading-relaxed">{info.value}</p>
                    </div>
                  </div>
                  {info.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={
                        info.label === 'Endereço' ? openMap :
                        info.label === 'Telefone' ? makeCall :
                        sendEmail
                      }
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full text-xs sm:text-sm"
                    >
                      {info.action}
                    </Button>
                  )}
                </div>
              </Card>
            ))}

            <div className="bg-primary/5 p-3 sm:p-4 rounded-xl border border-primary/10">
              <h4 className="text-sm sm:text-base font-bold text-sircell-black mb-1 sm:mb-2">
                💡 Dica Importante
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Antes de vir até nossa loja, entre em contato conosco para confirmar disponibilidade 
                e agilizar seu atendimento!
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="animate-scale-in order-1 lg:order-2">
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="aspect-video bg-primary/5 flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.7!2d-50.0!3d-28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAwJzAwLjAiUyA1MMKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-sircell-black">Sircell</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 bg-white">
                <Button 
                  onClick={openMap}
                  className="w-full bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all duration-200 hover:transform hover:scale-105 text-xs sm:text-sm"
                >
                  Abrir no Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
