
import React from 'react';
import { Instagram, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contato = () => {
  const contatos = [
    {
      id: 'instagram',
      nome: 'Instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/ciriaco.gabriel_?igsh=MWNjZ3d3dHE2MXFqbw%3D%3D&utm_source=qr',
      usuario: '@ciriaco.gabriel_'
    },
    {
      id: 'email',
      nome: 'E-mail',
      icon: Mail,
      link: 'mailto:gabrielciriaco123@gmail.com',
      usuario: 'gabrielciriaco123@gmail.com'
    },
    {
      id: 'whatsapp',
      nome: 'WhatsApp',
      icon: Phone,
      link: 'https://wa.me/5511954825043',
      usuario: '(11) 95482-5043'
    },
    {
      id: 'linkedin',
      nome: 'LinkedIn',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/gabriel-ciriaco-a43b0a198/',
      usuario: 'Gabriel Ciriaco'
    },
    {
      id: 'github',
      nome: 'GitHub',
      icon: Github,
      link: 'https://github.com/Gabsgc01',
      usuario: 'Gabsgc01'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contato e Redes Sociais</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contatos.map((contato) => (
              <a 
                key={contato.id}
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 border border-gray-100 animate-slide-in"
                style={{ animationDelay: `${0.1 * parseInt(contato.id)}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-portfolio-light flex items-center justify-center">
                  <contato.icon className="text-portfolio-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{contato.nome}</h3>
                  <p className="text-sm text-gray-600">{contato.usuario}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Vamos conversar!</h3>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto">
              Estou aberto a novas oportunidades e parcerias. Se meu perfil combina com o que você procura, entre em contato!
            </p>
            <a 
              href="mailto:gabrielciriaco123@gmail.com" 
              className="inline-block bg-portfolio-primary text-white font-medium py-3 px-8 rounded-lg hover:bg-portfolio-secondary transition-all duration-300"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
