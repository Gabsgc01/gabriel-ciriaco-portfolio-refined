
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Cursos = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  const cursos = [
    {
      id: 'fisk',
      instituicao: 'Fisk',
      curso: 'Inglês Geral – 2015/2019',
      nivel: 'Inglês avançado',
      descricao: 'Desenvolvimento de habilidades em leitura, escrita, conversação e compreensão auditiva em inglês.'
    },
    {
      id: 'sap',
      instituicao: 'Santander Open Academy',
      curso: 'Treinamento SAP-SD - 30 Horas',
      descricao: 'Capacitação em SAP Sales and Distribution, incluindo gestão de pedidos, vendas e faturamento.'
    },
    {
      id: 'powerbi',
      instituicao: 'Santander Open Academy',
      curso: 'Microsoft Power BI – 8 Horas',
      descricao: 'Criação de dashboards, visualizações de dados e business intelligence com Power BI.'
    },
    {
      id: 'python',
      instituicao: 'Santander Open Academy',
      curso: 'Python – 8 Horas',
      descricao: 'Fundamentos de programação em Python, incluindo manipulação de dados e automação.'
    },
    {
      id: 'sunshine',
      instituicao: 'Sunshine English School',
      curso: 'Inglês – 2019/2024',
      nivel: 'Inglês avançado',
      descricao: 'Aperfeiçoamento das habilidades em inglês com foco em comunicação empresarial e técnica.'
    },
    {
      id: 'robotica',
      instituicao: 'Cruzeiro do Sul',
      curso: 'Iniciação em Robótica - 2019/2020',
      descricao: 'Desenvolvimento de projetos com Arduino, programação e montagem de protótipos de robótica.'
    },
    {
      id: 'espanhol',
      instituicao: 'Sunshine English School',
      curso: 'Espanhol Básico – Jan/2025-Fev/2025',
      descricao: 'Introdução à língua espanhola, incluindo gramática básica e vocabulário para comunicação inicial.'
    },
    {
      id: 'lideranca',
      instituicao: 'Alura/FIAP',
      curso: 'Liderança Ágil: Aprimoramento de Soft Skills – 8 Horas',
      descricao: 'Desenvolvimento de habilidades de liderança com foco em metodologias ágeis, comunicação e gestão de equipes.'
    },
    {
      id: 'logica',
      instituicao: 'Alura/FIAP',
      curso: 'Lógica de Programação - 6 Horas',
      descricao: 'Fundamentos de algoritmos, estruturas de dados e resolução de problemas em programação.'
    }
  ];

  const handleToggle = (value: string) => {
    setOpenItem(value === openItem ? null : value);
  };

  return (
    <section id="cursos" className="bg-portfolio-gray py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Cursos Complementares</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {cursos.map((curso) => (
              <AccordionItem
                key={curso.id}
                value={curso.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-portfolio-light hover:no-underline data-[state=open]:bg-portfolio-light">
                  <div className="text-left">
                    <h3 className="font-semibold">{curso.curso}</h3>
                    <p className="text-sm text-gray-500">{curso.instituicao}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {curso.nivel && <p className="mb-2"><strong>Nível:</strong> {curso.nivel}</p>}
                  <p>{curso.descricao}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
