
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Gabriel<span className="text-portfolio-primary">Ciriaco</span>
            </h3>
          </div>
          
          <div className="flex space-x-8">
            <a href="#home" className="hover:text-portfolio-primary transition-colors">Início</a>
            <a href="#sobre" className="hover:text-portfolio-primary transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-portfolio-primary transition-colors">Contato</a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400">
          <p>© {currentYear} Gabriel Ciriaco de Oliveira Silva - Portfólio Profissional.</p>
          <p className="text-sm mt-2">Desenvolvido com React e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
