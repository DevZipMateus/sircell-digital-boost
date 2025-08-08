
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Instagram, MessageCircle, Mail, MapPin, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    'Assistência em Celulares',
    'Assistência em Tablets', 
    'Assistência em Computadores',
    'Venda de Acessórios'
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-sircell-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sircell</h3>
                <p className="text-sm text-gray-300">Assistência Técnica</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Teu celular pronto antes de você sentir falta dele! 
              Seriedade, qualidade e agilidade em cada serviço.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://wa.me/5554981014238" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sircell.assistech?igsh=MXFjNTg2eWoyandmNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sircell27@gmail.com"
                className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Marechal Floriano 1001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">(54) 9 8101-4238</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-gray-300 text-sm">sircell27@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Sircell Assistência Técnica. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Desenvolvido com ❤️ para qualidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
