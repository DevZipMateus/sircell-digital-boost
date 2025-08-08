
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
      value: "Seg à Sex: 8h às 18h",
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
    <section id="localizacao" className="py-12 sm:py-16 lg:py-20 bg-sircell-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sircell-black mb-2 sm:mb-4">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
            Venha nos visitar! Estamos sempre prontos para atendê-lo com qualidade e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-sircell-black mb-4 sm:mb-6">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-4 sm:p-6 bg-white hover-lift transition-all duration-300 border-0 shadow-md hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{info.label}</p>
                      <p className="text-sm sm:text-lg font-semibold text-sircell-black break-words">{info.value}</p>
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
                      className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto text-xs sm:text-sm flex-shrink-0"
                    >
                      {info.action}
                    </Button>
                  )}
                </div>
              </Card>
            ))}

            <div className="bg-primary/5 p-4 sm:p-6 rounded-2xl border border-primary/10">
              <h4 className="text-base sm:text-lg font-bold text-sircell-black mb-2">
                💡 Dica Importante
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Antes de vir até nossa loja, entre em contato conosco para confirmar disponibilidade 
                e agilizar seu atendimento!
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="animate-scale-in order-1 lg:order-2">
            <Card className="overflow-hidden shadow-2xl border-0">
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
                
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-sircell-black">Sircell</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 bg-white">
                <Button 
                  onClick={openMap}
                  className="w-full bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all duration-200 hover:transform hover:scale-105 text-sm sm:text-base"
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
