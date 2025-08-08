
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductGallery from '@/components/ProductGallery';
import ProductBreadcrumbs from '@/components/ProductBreadcrumbs';

const Catalogo = () => {
  React.useEffect(() => {
    // SEO Meta tags
    document.title = 'Catálogo de Produtos - Sircell | Acessórios e Eletrônicos';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Confira nosso catálogo completo de acessórios para celular, carregadores, cabos, luminárias e muito mais na Sircell Assistência Técnica. Busque por categoria e encontre o que precisa.'
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Catálogo de Produtos - Sircell');
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Catálogo de Produtos Sircell",
      "description": "Catálogo completo de acessórios para celular e eletrônicos",
      "url": "https://sircell.com/catalogo",
      "numberOfItems": 28,
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Acessórios para Celular",
          "category": "Eletrônicos"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-sircell-green to-sircell-green-light">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Catálogo de Produtos
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Confira nossa linha completa de acessórios e eletrônicos
              </p>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Use os filtros abaixo para encontrar exatamente o que você precisa. 
                Temos mais de 28 produtos organizados por categoria para facilitar sua busca.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs and Products Gallery */}
        <div className="container mx-auto px-4 pt-8">
          <ProductBreadcrumbs />
          <ProductGallery />
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Catalogo;
