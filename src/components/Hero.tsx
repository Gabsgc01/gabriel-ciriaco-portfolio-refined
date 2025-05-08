
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-portfolio-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-dark">
              Gabriel Ciriaco <span className="text-portfolio-primary">de Oliveira Silva</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Desenvolvedor e analista de sistemas apaixonado por tecnologia e inovação
            </p>
            
            <ul className="mb-8 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-portfolio-primary rounded-full"></span>
                <span className="font-medium">Paixão e Foco em Tecnologia</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-portfolio-primary rounded-full"></span>
                <span className="font-medium">Potencial de Crescimento</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-portfolio-primary rounded-full"></span>
                <span className="font-medium">Mentalidade Colaborativa e Inovadora</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-portfolio-primary rounded-full"></span>
                <span className="font-medium">Formação Acadêmica em Andamento e Concluída</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-portfolio-primary rounded-full"></span>
                <span className="font-medium">Versatilidade e Experiência Profissional</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                <a href="https://drive.google.com/file/d/1eoGkc8xVVbJXsLkNh9dt1ngwjjmAvhS8/view" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white">
                <a href="#contato">Entre em contato</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-primary shadow-lg">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGbhjsNMhaiPg/profile-displayphoto-shrink_800_800/B4DZanstqkG0Ac-/0/1746570239405?e=1752105600&v=beta&t=-kwSe_5Tfra3lbvd_MJeoijl5jsORJxzbLdH8T3nLhE" 
                  alt="Gabriel Ciriaco" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                <p className="text-portfolio-primary font-medium">Desenvolvedor</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 py-8 px-6 bg-white rounded-xl shadow-md animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Por que me <span className="highlight">contratar</span>?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sou um profissional com uma base sólida em tecnologia, habilidades práticas relevantes e uma mentalidade distinta para o crescimento e a colaboração. Minha combinação de experiência profissional, formação acadêmica e cursos complementares me tornam um candidato promissor e preparado para contribuir significativamente em projetos desafiadores. Acredito que me contratar seria uma excelente escolha para empresas que buscam talentos motivados, versáteis e com potencial para crescer junto com a organização. Estou pronto para enfrentar novos desafios, aprender continuamente e agregar valor aos projetos em que estivermos envolvidos. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
