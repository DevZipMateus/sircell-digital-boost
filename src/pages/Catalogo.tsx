
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductGallery from '@/components/ProductGallery';

const Catalogo = () => {
  React.useEffect(() => {
    // SEO Meta tags
    document.title = 'Catálogo de Produtos - Sircell | Acessórios e Eletrônicos';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Confira nosso catálogo completo de acessórios para celular, carregadores, cabos, luminárias e muito mais na Sircell Assistência Técnica.'
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Catálogo de Produtos - Sircell');
    }
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
            </div>
          </div>
        </section>

        {/* Products Gallery */}
        <ProductGallery />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Catalogo;
