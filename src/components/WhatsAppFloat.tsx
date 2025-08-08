
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Sircell.');
    window.open(`https://wa.me/5554981014238?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 transition-all duration-300 hover:scale-110"
      aria-label="Contatar via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppFloat;
