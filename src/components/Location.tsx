
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "Endereço",
      value: "Marechal Floriano 1001",
      action: "Ver no Mapa"
    },
    {
      icon: <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "Telefone",
      value: "(54) 9 8101-4238",
      action: "Ligar Agora"
    },
    {
      icon: <Mail className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "E-mail",
      value: "sircell27@gmail.com",
      action: "Enviar E-mail"
    },
    {
      icon: <Clock className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />,
      label: "Funcionamento",
      value: "Seg a Sex: 9h às 18:30 (sem fechar meio dia) | Sáb: 9h às 15h",
      action: null
    }
  ];

  const openMap = () => {
    window.open('https://www.google.com/maps/place/R.+Mal.+Floriano,+1001+-+Pio+X,+Caxias+do+Sul+-+RS,+95020-370', '_blank');
  };

  const makeCall = () => {
    window.open('tel:+5554981014238');
  };

  const sendEmail = () => {
    window.open('mailto:sircell27@gmail.com');
  };

  return (
    <section id="localizacao" className="py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-sircell-gray">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 animate-fade-in">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-sircell-black mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-muted-foreground px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto leading-relaxed">
            Venha nos visitar! Estamos sempre prontos para atendê-lo com qualidade e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-start max-w-7xl 2xl:max-w-8xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 animate-slide-up order-2 lg:order-1 xl:col-span-2">
            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-sircell-black mb-2 xs:mb-3 sm:mb-4 md:mb-5">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-white hover-lift transition-all duration-300 border-0 shadow-md hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-col gap-1 xs:gap-2 sm:gap-3">
                  <div className="flex items-start space-x-1 xs:space-x-2 sm:space-x-3">
                    <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-medium">{info.label}</p>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-sircell-black break-words leading-relaxed">{info.value}</p>
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
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full text-xs xs:text-sm sm:text-base md:text-lg py-1 xs:py-2 sm:py-3 md:py-4 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      {info.action}
                    </Button>
                  )}
                </div>
              </Card>
            ))}

            <div className="bg-primary/5 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl border border-primary/10">
              <h4 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-sircell-black mb-1 xs:mb-2 sm:mb-3">
                💡 Dica Importante
              </h4>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Antes de vir até nossa loja, entre em contato conosco para confirmar disponibilidade 
                e agilizar seu atendimento!
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="animate-scale-in order-1 lg:order-2 xl:col-span-3">
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="aspect-video xs:aspect-[4/3] sm:aspect-video md:aspect-[16/10] lg:aspect-video xl:aspect-[21/9] 2xl:aspect-[24/10] bg-primary/5 flex items-center justify-center relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1234567890!2d-51.1788891!3d-29.1631234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.%20Mal.%20Floriano%2C%201001%20-%20Pio%20X%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095020-370!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Localização Sircell - Assistência Técnica"
                ></iframe>
                
                <div className="absolute top-1 xs:top-2 sm:top-3 left-1 xs:left-2 sm:left-3 bg-white px-1 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 rounded-full shadow-lg">
                  <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-sircell-black">Sircell</span>
                  </div>
                </div>
              </div>
              
              <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-white">
                <Button 
                  onClick={openMap}
                  className="w-full bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all duration-200 hover:transform hover:scale-105 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl py-2 xs:py-3 sm:py-4 md:py-5"
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
