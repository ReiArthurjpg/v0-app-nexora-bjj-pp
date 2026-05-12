'use client';

import { CarouselContent } from '../ui/CarouselContent';
import { useTestimonials } from '../hooks/useTestimonials';

export function TestimonialsCarousel() {
  const { testimonials, currentSlide, setCurrentSlide, totalSlides } = useTestimonials();

  return (
    <CarouselContent 
      testimonials={testimonials}
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
      totalSlides={totalSlides}
    />
  );
}
