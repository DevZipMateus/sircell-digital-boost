
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, MessageCircle, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Preencha todos os campos obrigatórios!');
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:
    
👤 Nome: ${formData.name}
📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}
🔧 Serviço: ${formData.service}
💬 Mensagem: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/5554981014238?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Sircell.');
    window.open(`https://wa.me/5554981014238?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/sircell.assistech?igsh=MXFjNTg2eWoyandmNw==', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-sircell-black mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para resolver o problema do seu dispositivo? Entre em contato conosco 
            e receba um orçamento gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-xl border-0 bg-sircell-gray animate-slide-up">
            <h3 className="text-2xl font-bold text-sircell-black mb-6">
              Solicitar Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-sircell-black mb-2 block">
                    Nome *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="bg-white border-gray-200 focus:border-primary rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-sircell-black mb-2 block">
                    Telefone *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(00) 0 0000-0000"
                    className="bg-white border-gray-200 focus:border-primary rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-sircell-black mb-2 block">
                  E-mail
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="bg-white border-gray-200 focus:border-primary rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-sircell-black mb-2 block">
                  Tipo de Serviço
                </label>
                <Input
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  placeholder="Ex: Troca de tela do iPhone, Reparo de notebook..."
                  className="bg-white border-gray-200 focus:border-primary rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-sircell-black mb-2 block">
                  Mensagem *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva o problema do seu dispositivo..."
                  rows={4}
                  className="bg-white border-gray-200 focus:border-primary rounded-xl resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-sircell-black mb-8">
              Outras formas de contato
            </h3>

            {/* WhatsApp Card */}
            <Card className="p-6 hover-lift bg-green-50 border-green-200 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-sircell-black">WhatsApp</h4>
                  <p className="text-green-600">(54) 9 8101-4238</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Atendimento rápido e direto pelo WhatsApp. Envie sua dúvida ou solicite um orçamento!
              </p>
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl"
              >
                Abrir WhatsApp
              </Button>
            </Card>

            {/* Instagram Card */}
            <Card className="p-6 hover-lift bg-pink-50 border-pink-200 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-sircell-black">Instagram</h4>
                  <p className="text-pink-600">@sircell.assistech</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Siga nosso Instagram para dicas, novidades e promoções exclusivas!
              </p>
              <Button 
                onClick={openInstagram}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl"
              >
                Seguir no Instagram
              </Button>
            </Card>

            {/* Info Card */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="text-lg font-bold text-sircell-black mb-2">
                ⚡ Atendimento Ágil
              </h4>
              <p className="text-muted-foreground">
                Respondemos rapidamente pelo WhatsApp! Nossa meta é ter seu dispositivo 
                funcionando no menor tempo possível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
