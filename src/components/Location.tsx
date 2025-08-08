
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Endereço",
      value: "Marechal Floriano 1001",
      action: "Ver no Mapa"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Telefone",
      value: "(54) 9 8101-4238",
      action: "Ligar Agora"
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "E-mail",
      value: "sircell27@gmail.com",
      action: "Enviar E-mail"
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
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
    <section id="localizacao" className="py-20 bg-sircell-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-sircell-black mb-4">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Venha nos visitar! Estamos sempre prontos para atendê-lo com qualidade e agilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-sircell-black mb-6">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-white hover-lift transition-all duration-300 border-0 shadow-md hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                      <p className="text-lg font-semibold text-sircell-black">{info.value}</p>
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
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      {info.action}
                    </Button>
                  )}
                </div>
              </Card>
            ))}

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="text-lg font-bold text-sircell-black mb-2">
                💡 Dica Importante
              </h4>
              <p className="text-muted-foreground">
                Antes de vir até nossa loja, entre em contato conosco para confirmar disponibilidade 
                e agilizar seu atendimento!
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="animate-scale-in">
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
                
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-sircell-black">Sircell</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <Button 
                  onClick={openMap}
                  className="w-full bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all duration-200 hover:transform hover:scale-105"
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
