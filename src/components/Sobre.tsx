
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Sobre = () => {
  const valores = [
    {
      titulo: 'Paixão pela tecnologia',
      descricao: 'Buscar constantemente o aprendizado e a aplicação de novas ferramentas e metodologias.'
    },
    {
      titulo: 'Colaboração',
      descricao: 'Trabalhar em equipe, compartilhar conhecimentos e contribuir para um ambiente de trabalho produtivo e harmonioso.'
    },
    {
      titulo: 'Inovação',
      descricao: 'Encarar desafios com criatividade e buscar soluções que agreguem valor.'
    },
    {
      titulo: 'Comprometimento',
      descricao: 'Dedicar-me com responsabilidade e ética a cada projeto, garantindo resultados de qualidade.'
    },
    {
      titulo: 'Crescimento contínuo',
      descricao: 'Manter uma mentalidade de aprendizado constante, buscando evoluir tanto pessoal quanto profissionalmente.'
    }
  ];

  return (
    <section id="sobre" className="bg-portfolio-gray py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Sou Gabriel Ciriaco de Oliveira Silva</strong>, um profissional apaixonado por tecnologia e desenvolvimento de sistemas. Com formação em Análise e Desenvolvimento de Sistemas pela UNICSUL e atualmente cursando Engenharia de Software na FIAP, tenho me dedicado a aprimorar minhas habilidades em programação, análise de dados e desenvolvimento de soluções inovadoras.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Minha experiência inclui trabalhos em áreas como vendas, atendimento ao cliente e logística, o que me proporcionou uma visão ampla e habilidades interpessoais essenciais para trabalhar em equipe. Além disso, possuo conhecimentos práticos em ferramentas como SQL, Excel, Java e Python, complementados por cursos em Power BI, SAP-SD e robótica.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sou movido por desafios, tenho uma mentalidade colaborativa e estou sempre em busca de aprendizado e crescimento. Meu objetivo é contribuir para projetos significativos, aplicando minha paixão por tecnologia e minha capacidade de resolver problemas de forma criativa e eficiente.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-portfolio-primary">Missão</h3>
                <p className="text-gray-700">
                  Utilizar meus conhecimentos e habilidades em tecnologia para desenvolver soluções inovadoras que impactem positivamente a vida das pessoas e contribuam para o avanço tecnológico das organizações.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-portfolio-primary">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecido como um profissional de referência na área de tecnologia, destacando-me pela excelência técnica, capacidade de inovação e contribuição para projetos transformadores, sempre buscando aprimorar minhas competências e inspirar outros profissionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mt-16 mb-8">Meus Valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((valor, index) => (
            <Card key={index} className="animate-slide-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="w-10 h-10 bg-portfolio-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold mb-2">{valor.titulo}</h4>
                <p className="text-gray-700">{valor.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
