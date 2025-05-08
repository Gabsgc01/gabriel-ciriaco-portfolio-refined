
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Formacao from '@/components/Formacao';
import Sobre from '@/components/Sobre';
import Experiencia from '@/components/Experiencia';
import Cursos from '@/components/Cursos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll suave para links de navegação
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (!href || !href.startsWith('#')) return;
      
      const element = document.querySelector(href);
      if (!element) return;
      
      e.preventDefault();
      
      element.scrollIntoView({
        behavior: 'smooth'
      });
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll as EventListener);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-background font-poppins">
      <Header />
      <main>
        <Hero />
        <Formacao />
        <Sobre />
        <Experiencia />
        <Cursos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
