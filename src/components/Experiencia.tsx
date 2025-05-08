
import React from 'react';

const Experiencia = () => {
  const experiencias = [
    {
      cargo: 'Vendedor de automóveis',
      empresa: 'JJ AUTOMARCAS',
      periodo: 'Março/2023 – Abril/2024',
      responsabilidades: [
        'Atendimento a clientes, apresentação de veículos e negociação de condições de venda.',
        'Elaboração de propostas comerciais e acompanhamento de processos de financiamento e documentação.'
      ]
    },
    {
      cargo: 'Atendimento ao cliente',
      empresa: 'EMPÓRIO DO PÃO',
      periodo: 'Fevereiro/2020 – Dezembro/2021',
      responsabilidades: [
        'Atendimento direto ao público, oferecendo suporte na escolha de produtos e fechamento de vendas.',
        'Organização de prateleiras e apoio no controle de qualidade dos produtos em exposição.'
      ]
    },
    {
      cargo: 'Auxiliar de Logística',
      empresa: 'GUINA - Materiais de construção',
      periodo: 'Janeiro/2019 – Dezembro/2019',
      responsabilidades: [
        'Responsável pela organização e controle de estoque de materiais de construção.',
        'Auxílio no carregamento e descarregamento de mercadorias, garantindo a integridade dos produtos.'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experiências Profissionais</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-portfolio-primary before:opacity-30">
            {experiencias.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start animate-slide-in" style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="flex flex-col items-center md:w-64 md:items-end md:flex-shrink-0 md:mx-8 md:order-1">
                  <div className="w-10 h-10 rounded-full border-4 border-portfolio-primary bg-white z-10"></div>
                  <span className="block mt-2 text-sm font-medium text-gray-500">{exp.periodo}</span>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 md:order-2 ml-8 md:ml-0 mt-4 md:mt-0 w-full">
                  <h3 className="text-xl font-bold text-portfolio-dark mb-1">{exp.cargo}</h3>
                  <p className="text-portfolio-primary font-medium mb-4">{exp.empresa}</p>
                  <ul className="space-y-2">
                    {exp.responsabilidades.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="h-6 flex items-center mr-2">•</span>
                        <p className="text-gray-700">{resp}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
