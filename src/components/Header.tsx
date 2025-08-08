
import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Catálogo', href: '/catalogo', isLink: true },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-primary rounded-xl flex items-center justify-center">
              <Smartphone className="w-5 md:w-6 h-5 md:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-sircell-black">Sircell</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Assistência Técnica</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sircell-black hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sircell-black hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button 
              onClick={() => scrollToSection('#contato')}
              className="bg-primary hover:bg-primary-hover text-white px-4 xl:px-6 py-2 rounded-full transition-all duration-200 hover:transform hover:scale-105 text-sm xl:text-base"
            >
              Orçamento Grátis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-sircell-black" />
            ) : (
              <Menu className="w-6 h-6 text-sircell-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in border-t">
            <nav className="flex flex-col p-4 space-y-4 max-h-screen overflow-y-auto">
              {menuItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sircell-black hover:text-primary transition-colors text-left py-2 font-medium border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-sircell-black hover:text-primary transition-colors text-left py-2 font-medium border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button 
                onClick={() => scrollToSection('#contato')}
                className="bg-primary hover:bg-primary-hover text-white rounded-full mt-4 w-full"
              >
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
