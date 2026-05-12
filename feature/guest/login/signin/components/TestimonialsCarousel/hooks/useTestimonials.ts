'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    date: "12 de Outubro de 2023",
    stars: 5,
    text: "O Nexora mudou a forma como controlo minhas aulas de NoGi. A graduação automática é surreal e me poupa horas de planilha.",
    author: "RICARDO 'PANTUFA' SILVA",
    academy: "GRACIE BARRA MATRIZ"
  },
  {
    date: "05 de Janeiro de 2024",
    stars: 5,
    text: "Sistema impecável. A interface é rápida e o suporte entende de Jiu-Jitsu, não são apenas programadores.",
    author: "MESTRE FLÁVIO ALMEIDA",
    academy: "ALLIANCE SP"
  },
  {
    date: "20 de Fevereiro de 2024",
    stars: 5,
    text: "Meus alunos adoram ver o progresso dos graus no app. A retenção da minha academia subiu 25% em 3 meses.",
    author: "CARLOS 'CAIÇARA'",
    academy: "CHECKMAT TEAM"
  }
];

export function useTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return {
    testimonials,
    currentSlide,
    setCurrentSlide,
    totalSlides: testimonials.length
  };
}
