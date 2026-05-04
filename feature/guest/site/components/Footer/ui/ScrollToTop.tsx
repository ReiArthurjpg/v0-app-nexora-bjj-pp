import { ChevronUp } from 'lucide-react'

type ScrollToTopProps = {
  show: boolean
  onClick: () => void
}

export function ScrollToTop({ show, onClick }: ScrollToTopProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed cursor-pointer bottom-24 md:bottom-10 right-6 z-50 p-4 bg-[#E11D48] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp
        size={24}
        strokeWidth={3}
        className="group-hover:-translate-y-1 transition-transform"
      />
    </button>
  )
}
