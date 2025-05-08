
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Formacao = () => {
  const formacoes = [
    {
      instituicao: 'Cruzeiro do Sul',
      curso: 'Ensino Médio Técnico em Informática',
      periodo: 'Janeiro/2019 a Dezembro/2022',
      logo: 'https://sindicomunitario.org.br/wp-content/uploads/2022/08/Cruzeiro-do-Sul-Site.png'
    },
    {
      instituicao: 'UNICID',
      curso: 'Análise e Desenvolvimento de Sistemas',
      periodo: 'Janeiro/2023 a Dezembro/2024',
      logo: 'https://i0.wp.com/saopaulo.wordcamp.org/2016/files/2016/10/unicid_pref_pos.png?resize=1000%2C373&ssl=1'
    },
    {
      instituicao: 'FIAP',
      curso: 'Engenharia de Software',
      periodo: 'Fevereiro/2025 - Cursando',
      logo: 'https://avatars.githubusercontent.com/u/79948663?s=200&v=4'
    }
  ];

  return (
    <section id="formacao" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Formação Acadêmica</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formacoes.map((formacao, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="h-40 bg-portfolio-gray flex items-center justify-center p-4">
                <img 
                  src={formacao.logo} 
                  alt={formacao.instituicao}
                  className="h-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{formacao.instituicao}</h3>
                <p className="text-gray-700 font-medium mb-2">{formacao.curso}</p>
                <p className="text-sm text-gray-500">{formacao.periodo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacao;
