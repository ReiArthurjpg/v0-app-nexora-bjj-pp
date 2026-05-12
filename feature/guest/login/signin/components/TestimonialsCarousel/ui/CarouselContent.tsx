import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  date: string;
  stars: number;
  text: string;
  author: string;
  academy: string;
}

interface CarouselContentProps {
  testimonials: Testimonial[];
  currentSlide: number;
  setCurrentSlide: (fn: (prev: number) => number) => void;
  totalSlides: number;
}

export function CarouselContent({ testimonials, currentSlide, setCurrentSlide, totalSlides }: CarouselContentProps) {
  return (
    <div className="relative mb-20 group">
      <div className="grid md:grid-cols-2 gap-6">
        {[testimonials[currentSlide], testimonials[(currentSlide + 1) % testimonials.length]].map((item, idx) => (
          <div 
            key={idx}
            className={`p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-700 ${idx === 1 ? 'opacity-30 blur-[2px] scale-95 hidden md:block' : 'opacity-100 scale-100'}`}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.date}</span>
              <div className="flex gap-1 text-yellow-500">
                {[...Array(item.stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
            </div>
            <Quote size={32} className="text-[#E11D48] mb-4 opacity-50" />
            <p className="text-lg font-bold italic text-white/90 leading-relaxed mb-8">
              &quot;{item.text}&quot;
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="font-black italic text-[#E11D48] tracking-tighter uppercase">{item.author}</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{item.academy}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles do Carrossel */}
      <div className="flex items-center gap-4 mt-8">
        <button 
          onClick={() => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E11D48] transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-8 bg-[#E11D48]' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        <button 
          onClick={() => setCurrentSlide(prev => (prev + 1) % totalSlides)}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E11D48] transition-all"
        >
          <ChevronRight size={20} />
        </button>
        
        <span className="text-[10px] font-black text-gray-500 ml-4 uppercase tracking-[0.3em]">
          {currentSlide + 1} DE {totalSlides}
        </span>
      </div>
    </div>
  );
}
