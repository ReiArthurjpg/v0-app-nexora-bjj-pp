'use client'

import { Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'precos', label: 'Preços' },
  { id: 'mvp', label: 'Controle' },
  { id: 'contato', label: 'Contato' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function NexoraHero() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('')
        return
      }

      let current = ''
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // a seção que ainda está acima do meio da tela é a ativa
          if (rect.top <= window.innerHeight * 0.55) {
            current = id
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // roda uma vez no mount pra pegar o estado inicial
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAVEGAÇÃO */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#070708]/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-[#E11D48] rounded flex items-center justify-center -skew-x-12 group-hover:skew-x-0 transition-transform">
              <Zap className="text-white fill-current" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter italic">
              NEXORA <span className="text-[#E11D48]">BJJ</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative pb-1 cursor-pointer group"
                  style={{
                    color: isActive ? '#ffffff' : 'rgb(107,114,128)',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)(e.currentTarget as HTMLElement).style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)(e.currentTarget as HTMLElement).style.color = 'rgb(107,114,128)'
                  }}
                >
                  {label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      height: '2px',
                      backgroundColor: '#E11D48',
                      width: isActive ? '100%' : '0%',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </button>
              )
            })}
            <a
              href="/login"
              className="inline-flex items-center px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.25em] italic -skew-x-6 hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300 active:scale-95"
            >
              <span className="skew-x-6">Login</span>
            </a>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E11D48]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#070708]">
              <div className="inline-flex items-center gap-2 bg-[#E11D48]/10 border border-[#E11D48]/20 px-4 py-1.5 rounded mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E11D48]">
                  Especialista em Jiu-Jitsu e NoGi
                </span>
              </div>

              <h1 className="text-5xl md:text-[80px] font-black leading-[0.85] mb-8 tracking-tighter uppercase italic text-white">
                O tatame <br />
                <span className="text-white">quer ordem.</span>
                <br />
                <span className="text-[#E11D48]">A Nexora entrega.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                O único sistema de gestão desenhado exclusivamente para a rotina do Jiu-Jitsu. Controle graduações, presenças
                e mensalidades sem sair do tatame.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#E11D48]/20 blur-[120px] rounded-full opacity-30 animate-pulse" />
              <div className="relative bg-[#0F0F11] border border-white/10 rounded-xl overflow-hidden shadow-2xl skew-y-1">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXGBcXGBgXFxcXGBcXHRUXFxUaFxUYHSggGBolHRgVITIiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS4vLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA9EAABAwIEAwUECQMEAwEAAAABAAIRAwQFEiExQVFhBhMicYGRobHwBxQjMkJSYsHRcpLhM4Ki8RUkQ8L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAnEQACAgICAgIBBAMAAAAAAAAAAQIRAyESMUFRBCITMmFxsRRCkf/aAAwDAQACEQMRAD8A5XiuEvomdSwnR37HkVEW/okOBGUOBEQdiOqqMU7LyDUt9eJp/iH9J/F5bq8MiYub47jtbRl0YQIjdBVMoaNEjQABBBBEAoJSSlLhQJVNhcQ1oJJ2AEk+QCvOzPZ03BzvdkotOruLuYbK2Nvilvb/AGduxrY3P4j5u3KnPKomnD8WWXfSMnh3Yy7qauaKTedQwf7RJnoQFpLLsLbMAdVqVKvk006Z/wB+pPoVJtcQr3DsrGz7g0cS47AfOq1eEYW9gzE948/jdIa0cQxu58+PRTU5z/ZGp4cOLvbMxV7NUGg5bN8DiaFVw/uc+SOpAU7s3hjqxOR1uym0gfZ025iYmMsCPM+9a2nbVR/9fQCB7ApdJ7m8krhvbHjm19YpP+DMYt9HdrW18bH8XsyNzf1MDMp89+qoa30UD8N04f1Ug73h4+C6Qbs9EYuinU61ZnlhjN20czpfRPr4rwR0pa+96n0/omt/xXNX0DB8QVvvrE7wfRLbVHIfBd+VgXx4Lwc/rfRFRI8FzVB/U1hHuhanA8OFpQp28guY2CYidTLonirlj2jYR5H9lBxPDGVnsqd49jmAgEQQQYkOHEaLvyewrFGO4ob70udAOu55DkPMpcOnWkfPP8hNnDHCctRpJM6gt8hpKqWYTelxdUc1rZ0DSXkjyAXNKQ6biaB1YgaM8/EI9dFAqs7w5mVQHflkEeWnBRXXfd+EZgeJcMp9G8E8/EgW/cNQ8QMsgc+vsU3GikZWIqhw1Alw/DMH05+Sh1LCncTmY5tTiQ7X4a+qcp9oWF4p78pAHkPP0CnC5B8QYZnUTBHod1xyaZjcc7N+Ais3vKY2e3RzP3b7281zLGMPNCpkmWkZmO/M3+dx6LvVXFGA6tPtHvC5p9KlBmahUpgAEPaR6giOm/kQq4m7oz/IgqswKJKKSVcyCSiSiklAISCCC4YNBBBcA27a5JyjQHf9lKoXZYYG4jXkpOCYE4+OtpxDRuP6jw8uq0tvhlsNTRzHn4j8SsFbPW/KqMJ2lwllZhuKLYqDWo0DRw4uA581jYXfWYPbu1FPIf0kjz02XM+1vYetQc+rSaX0dT4d2DkW8hzC1wbaMGeKTtGORoIJzMBGAiRonBqxwTDHV6gbswavdwa3j69EnB8KfcPyt0A1c47NHzwWrqZKLO7pjKANSd3HiSknNRLYMEsjvwIxq+awijR0pgBoHDj7+Z5qDgOHOuawDXFpH+odSQ3hlHFxI0HnyTmAYBXu6vg0pgnPVcDkZzA/M79I9Y3XWcDwm0tGZaQgmM748b4/M71OggCdApRj5Zsnk/1iKwbBhSYGhuRo1AOrifzP5uU9waPzE80j61SnQmU1Wu280/Ihx8jvepmrdQota50VRiGIMYMz3tY3m5wA95UZy9FYouvrXHdH9aWDue21ozTvM39DXOHtiPemKPbdj57ujUdrAmG53b5Wxm1iSZ0AEkhT4y9Dc0dFbdt4p+nUa77rlzS67VV4MU2NdwBNR4IzBshwa3N4iAcubUhR8Lxy5N1lqeFjgcsCIfAOpOvPQgHUaLqY1+fB0yreFphyNuIjmqenfiq3u62h/C/kf1cwqy5a5hLTuN/5+eaXlYz0bFl/PFPUr7qsI2s4cSpTb9wAM+iKkA3P1prhDgCOuvxUd2G0HGWzTdwLTt6FZiljQBh40PEJ6pixpOGstdqD0TqYrii9r4Ix48dNjz+Zvgd8+qbp2WUwHOgcHAyByzDceaapYpoCDIPFSm4oCIMH55hNyQKDdQ0mJ8x/CyPazsl9dpOdSMVqRJYzTK6R4mdDoIPVaW6xplJheZImOEydgfPmshjXaO9d/wCxZUyKTJFTMNXGQP8ATcAXNHMGdU8NOyeWnGmckrUy1xa4EOBIIIggjcEc0hdDxi0ZidPvqdNtG9aYqMmG1Y0Oroy1BHHceiwl/Y1aLslam6m7k4Eeydx1C0J2YnFojFJKUURXHISUSNEuCGgiRrjjsuHVH+Tfj6q8tafMLK0LnwwD09/+VbWNItbmcT0HNSnjNGPIX/eAJVNs7n0VVRqPJAiBuZ4qxpPICnbRbs552q+jyr3hqWYa5jtckw5p45QdCOiwFWkWuLXAtcDBBEEHqF6IZVHHQLM9sezlteEOa/uqw/HlkOHJw4nqrRmn2ZsmGtxONQrKxwK4qOaBRqAOiHFjg2OeYiIXSey/YmnaOdXuHMqu07rSAObsrvxcAeEddLm5vHF2hLZ5rpTURIYm+zn15dU6DBb0YkHxP4vdxnkqykKtZ7KTZL3OytG+5/bU+QXRMRsaVb/Wptd+rZ48nDX0TGEYPRsnGtmFRzmkDM9oyMMGIGpdpvpppG6jGPJ2zc8vGFRNfY4eyhRbSbEMED55ncniZUWvXA3VPWxotbnbTqNG4kSCOms+1M0O1FtWDg54BG/CPMHb1VZ2tmeFPRaPvqOxMlV+KYzb0WF9R8Dh1O8AbkrG4z2pYXd3Zs7154gHL6cXfDqqVtpqK9441ZDS0TFMSY8b4hjdW7c+OqjTfZW14Lyr2ivLyfqrBRpDerUIEDnmOg47AxzCgDAaR+0q1a1weNQnu6QkSCatQy5vVpIViyoC1lYyRTqNhmXLTDD4JbTPBuacztfAYgaKpxTEA61uaFWp9qKzg0OMuIFRrhA3iJA4LuTfQK9jmGdnnMuAx+Rpa1tQFoz5vGARLojVvI6OUXs/SLZDQXkCqxrRDYd31IOdJ/FlLNeQ6Sp9xjx71tRlJ0NpZXGoRSb43syu1kkeF/DaSsxa4jlqVC4S15cTGsEzqAYzNgkEaSDwIBAjyadjOUVJNlwynkkMfm1IfklkSD9nLMxBIpiY+61k6ZiQltwM2dpH2YzNaJLm5GlzQSJEfqJhwcYJkhHTvm7yC0xBgkl7QDTLntbJykN+8AYkRzDm1HzDKr+ZyOa3UQ4gEavOscGgjUwAu35HVRun2joMgiRx1CcNbO0A/eboD05fwqzA31O6YKoyvLdRyI04dIUp87hY3plVtCiEKjNEpj8wlJrVA3fijezmtER6e73NTLHbgy3pzHkic3VIpDUqhOrRJw24LDH4TurOo8tmNokKm2Gqkm6JZG/CUyAydh967xHSQ0uE6iW+Lj5LMXOL0y5mZtSrQLamU0XSabmlzKpyzMEVG6fpGhVxbGD0+I4hYxtB9peOoMpl9Km8Fsz/AKdQtOvMENidNRvwV8eyORtFvZCjUvQ+i9xZVY6dCHDLlBcA4TIY9jtR/wDNyou0uL3re9sbl4cGvH4RwMtLTwBEFXFxeOFRly1jGhlSk5vhAqNa802VW1BxblcW6yeB2BVj9KWDZ6TLto8VOKdSPxMJ+zdPQmPUclZPZCUfq2jmBRJRCJOREwiRlEVwwSNEjXHHUGXfdUgQJMw0cOYJ6ahTrOrUyhznyTuT58FjMGxE1abWknMyQfLLof8Air9mKNc006euRo1+eKrJWrJQnTpmrp3h1BO3ySnqd6CJ9gVNQ1zOJjws+GYmfVN3OIBgGQg8ZGs+qyTjTN0J6s0tvVP3v+k/SuqL83hBLd42k7a81iRjdV7g0nwnh/lXFyTRZTpsEveczgN9d55AbehQjGtsLyXpBYw97nl8w0egAWJx7to6e7oHQbv/ADHpyHXime2XaR9SbdjvA0kOP5o/CD+Ue9Y6U8Y1tkpSvSLmr2gqu1c4k9UhmMOnUyPYqiUAVXkyXA0trjVRurHuHTMY9myeZRoVqhfcDw5DBZ4ZqSA1ryNhuZjgs1QcVMgkacVKdl8LSabVlxRfTb9kw9zI8RpmTJGg7xwmP35JPeCvbuY5zKT6T9DsyAdNOUE+oUa2tST3jSHHSWka6fiBn12TddjMxdIbXB0D2mHCNCCdnfFSj6NOVKuS0O3+JOAPg7sVWgPcZJcBoSxv4dHaEifKFFsmVa9TJQkGTmqnNJaQ0EvcdYJBIG/ihHZ2odVzXT3EceZ5TyHktla0qEA29VrY2bpHsQnJQVJE4rm+yso9iW6GrVe89IAjgJMmPYrmz7PWrRApM83DMfa6VNo3X5vCf0w5p/2TI9CnKhB1Bb7XN90H4rFLJN+TVGEF4E29syl4Wsa0fpaBHoNwn6rgo2dx5R7ffAVJi2IEAtaSXHgOP8DqjGDkzpTjBWWb7rwh3IkDylTi/TzWQwfDqoyuqOJA0DSSQPILTvp+GcxkJ3i8InHLathW9WHEcFCxesdXclVHHSHuYG6jiT1jaEX/AJEP0eYHQb9E6wyXYj+RF9M01N/gDuiZFYMBc4wFBr4kIAbBjmYH8qHRr53guY+q4bDIRTb5ZoHrquUGc5rwW9s11Z2YghnDqpj26wNh8U9bulonQp1jBwTxQGN0gldoOz/1qnTqtexlem2KZP42xDqdURoJmDrEnRDiVocFpU6lEh7ZIcQCJmIB/cpl9dgW9M5vVbnpvt3h1Kq1mRwIzEDK0h5G8AtjM0lukwMy6Hhb2XlkGv1bVpQ7zIh0Ho4Fc/8ApKsnW1zQuaMmQWAEHQtMjUcw7hrotJ9H2LNqMfTDH0y12fI7hnJLsp4tz5vKQqy3HkiUNTcWcmxC0dRqvpP+8xxafQxPkd/VRlvPpZwzJcMuAIFVsO/rbpr5tj+0rBlVTtWZpR4toIpKMokTgIkaJcEewu6dSqB7eG45tO4Wzw17BqyC06jnHEHqFg6VSDKsLa9fTdmYescE8JUhMsXdnRCf/XeB+kenD3KuoHweUj3/AOUeCYgytScBo7ZzfeI6bo7dmjh1n2gfwlyLaY2J3Gh3C2Zq9NsTLmg+U6rV9qL8ULetVGUPyxI+8XHwt18yNFQdmWA3LJ/CHO/4kD3kJr6RKRFEeMHM8Ega6AE6pIr+yrdbOZ1j/lMpx5SCixUAIIkYKASRbsJKt7a2cQqnD6gD2zzW7smMABIkciFDNPibfiYVOyBadm3VGd4H5SDERrp1VTjOGvG/i68VurW5A0bDRyJ28+qzWMXc1ntEQ0geegJ+KhDJJyN2X42NQryZO3vHMOuo5FW1lUZUOgLTz4FRcQtAQXNGvFVtGs5hlpgha9SR5MouDpm1oUqg5Hz/AMK2tmVeDQq/s3j7agDXwHjpv68FpmXMDb2fMfBZMkae0aMbtaZCNAO0q1KjByAAb/cP5UqhhlNo+zDT1396Favm0+fn2qvcCNpHkljfQZcVsXd2lTc7DkmnV4aQTwUW5fU/OVmMRxKs15a4gjcGI0WmEGzLOaQnEHZa5PMApVau3mJ8im7e1dXe0k5RtPH0C1Fz2Ytm08z6r2xxJbB9IV20uzOoyltFbhN6HeEjb8XAq4bX5ElZq1rUaTnNFXODEOykDSdwfNW9Bts4ibiCdtI952U5wXZWEpJUWVO/jc6K1tLwOIA1PIIYPglDN4xmEAyST8Fs7fCaXdxQAYegifWNVJyS6LxjJ9mdqYfWjMKTyI4NJ9wV92foupsOcZMzgAHeEkwNgVV/+Uq2pOeSJ+dUnHL6pWoUrimCS1zswG7cx0d6RE9UOVodR3otO1WDOuKLmA5XDMWu00dkc0T+kyQdjBK57gNVtG7p1GtyNLjTqNy5fvmIcG+EFjgOvgKs8SsH1mgVrvIBqKbG5m+biXDO7r7AFWXgs6ZGZ9Ss4QfCGsBI2J+9rECRrACaGSPRSfx8no2Hb/CRXtHNlrXtc1zC4wMwMET1aXLnlv2Ptx/rXwBjUMpyAeQe5wzf2hOY72jr3Dpc6GjZvBo/dUdzcHz+eSClJKkM8OO7krZZ1eytrEtv9BvNA8+j1E/8dYNOV1W4qnm0MpN9jg8+9VhuS4huoB0l0gDzjWEtlq8656TfN8z/AGgp05+WI44U/rH+yTd2lp3ZLDWa/gC5rm+vgB9ih2mB1qjQ8BoB2zvawkcwHEEjqn206TB4s1Q8vuU56j7zx/bPJIuL973ZnEko82hXig3bVFIApACbpDinVYwyY7a3LqbszDB+I5FazAsXbVdkOj406xrp71jkqjVLXBzTBBBHmE16onW7XZ0/s54btg/MHN/4k/srLtxhzPq7gT9oSCG7wOM8tCs9huIZhSrt4EOMcCD4h8VfdpHg1CBLpAPMEET+6jObxq/3NMYqf/DjdZpBKQr7tNhbqb82UhrtQeHl5qhIVHvaJr0wkSNEgMLomHDzWto19IPp0WPbutLbvloI4qGbwbfhvbRa063hJ4hZy2uS55ndznH4f5Vu2pAPkqjDLfXMdCZU4VTNOa+UEWFJkyOCor+iA4gGVOxCpUDZ2kxI4KExgABO7lWCa2ZfkSUvrRGpvLTIMFbbs9dXT25i1hbzzQ7+3VYl41W27MVg1hkyImSTpEbz86JsnRmh2T73H2UiA9pk8gCg3F87C9lCq4DkG/AlJfg/fVA9400P8D55q/sqADyANA0BR+qH+0mVlraVKwDiO7B3B1cP2UwdnbUwXsNQji5x+AgK3pU42US6rtptLnEADnxXc34GWNeSvvrS2ogvFNrQNyAeWgjn8B7FzzFcUqVnOLnuLZ0aToPTZTe0HaB9eGT4GkkaQSeZ+eConOV4Ra3IjklH9MOv7BIUp7RG+gEDr8yfYoSUamkJyZfdme01S2fBM0zoRvHUfwum23aktAcII3kcQuIrWdk70vaaJ1LRLdeHEfv6qOWGuSL4Z0+LOmXWNNqCQ0OnnqR7UVtetY8tgFhEFukERBkLG27nMqN3AmTryBKsGXvigNgHjv7FmlKjUkVvbKs2hWApF2R7czQTOXg5uusAwfVZareOdx9ive2lMvbSqAElpcw+oB//AD71nbWzfUIa0SSYGsKuNJxs6WaV8WxRuHHQmUBUW1sfo0rQDWqsp/pHjPu0TWKdiQxlY0qrnvoQXtLYzMIDszCDwEyOhRtHcvZju8SzUSzbHgUw5saOIC4N0NlxdsPUpBjqUdS6bwBPuCYdcnoqKLISyxXmxARpKNXMQaNEggAuMAxTuiWOPgcd/wAp5+XNdLwSoX0Ts7u4iRPgI8MHiBBHsXHVquwnaF1CuynUM0nnuzP4Q46emaPLVHipKmdGTi7Nhjr21KZovaMrt+emxB4Fc+xjs3Vot7xvjpEmHDcRH3h6jVdBx6llqEexE6i59pA4VPi0fwsMck4zaNsoRkjkDmpELtdDstbuoB9agzQTMZXOPUjVY9+CtJqGg1rXt8TQ4+EDMA4nNO0rUpWR4V2ZKxw5z9TIb7yrulTDQGgaBJp3lcvymm3cA6EH4/JUq7tLlxysaGjmNT8NFnyc299G/BPFBfW7/giVKwBy7niOQ6o2ObMSAVHOD1mTJIJ1J4+0p22wQukvc4A/d095S8V7G/O/MRy7pNLHZto/6Kzj6sny0AWow7s09tZgc6WOJgeQJ1HotTX7PUTLnMbJ3Mb+apGSjq7M+ZvJtKjlppOOuU+cGPatLgVs8w6oZEyW8TH3Z9fitbhmFDI6k8ZmjTUcPnilWuEtZ4QNtP4TPKiCxMbp3wjf1TgxmlTGr2+3dKfZgHgJ6f5CUKBHD2GfcYPxUtMqlJAZ2hpu+6QfULLdscSc45Z00AHvJ9sf2rR1KDPyMc7qACNCSTIkAAEysBjF0X1nGcwBIB4QDw6bpsaTlo7IpLHb86K2okSnKjU0tJkQoBApbSAkOK44SrHs9dmncU3AxJynyOmqrkGHVBq1QydbOoXT3EaiCDr5KHf3wbUyASGgSesLM0caqT91k84cD7nK3sqrXDVgB6T+5WR4GuzR/kJ6RatcKrCDx9xGx+CT2cwF+cFzNA48iNIM7g+4p+xa1uyurO4j7pInqdfNLCMo2vAzlGVPyam8NR5y0gJ5mIA8yip20GS4FwHjjWdw2T6u0Vc2/eBkaZJ+KlXVw23pHjUOscZ6pg2ZLtJ2UDqffWzIeC7PTbs4DdzG8CPyjfhrvzTFD4m/0/uV3HDKroa0/eDdehPid8Whcw7d4C5t0X0WOe2p4iGNLsr/AMQgDQHQjzPJWxPdEc18THoJ24t3sMPa5p5OBB9hTS0GYCNEguOFBGko1wBSCJGgA6hZ3v1m1pVjq+MlT+tsCT5jKfVXPZ0+GoImADHkY/dYDsJiQa99u8wKsFk7d4NI/wBw082hdHwqlkkH8WizSg/y2a4SXAdo3D6z8h+7yWYsbY9+WtE5g5sHiOI9y1+GUvtDpz+EKuwuzLbkuI2kpkmqC6ZnLKzDAREEuJPnJE+pk/7lPpkN2TuKCarj1SLVkuaFhytyZpx/VAZbZ3Au1gE+6B8VMNoY28uimW1MeJ3XKPTU/splBkmEfSQfbM++kS5kbhwn4FXDrUKNcUYdPIhWD3wEW62ctjVOzaNhr5qBd0stQDg4Kwo1STomMZGjXcj/ANIRyW6C40iFd0JHzv8A9/FVza4G/s4zx0V8Ggjz+fgs/ilI0qgfGjtPI8PaqpiPRS9q757WkCRmblH9O7o89PYsGCtVid1TuKvgBOWAXE+En9I/fZZi7ble4cifir4VTaE+U+UItddCXu0TRRyiVzGAIBLcdEloXHCSgECnrRsvb5oN0FK3Q/RGqv8ADSs+NDrp86K9wsyjPolHsvaB0U6hXhRKVJOgQszZpRobTEBTbn/Gdug6J6kAwfWLg9WNO5PAxyVLa4hlM921zuBdJjyGyeyurO7yqZA58egHJIVsucMY6pL3eFrtepG/sSMO8VSq+nEhpiZggfdDvOE1WuHhm4zu0DBwbxnloq26xdzYo24jXWN3O4yeSaLpglRKvS2qx3eUgMpgse0Pbm9dR5ieCz9bArImX25af0VHBp6ga+5XNe4Lu9BGpbSOn5i3/AUSpiTaX2bW5su567lU/I0TcEzlaCCJaCAaNEguALlBJRrgC2ldE7I9rO8LaNb/AFB91354HH9Ue1c5CdoVXMcHtMOaQQeRBkFdVnJ0duOIwZakNvyTPFV2A39O8oioIa8aPaPwu/g7hWTLPqsuXHlvT0bMeSDQzdWhIzj1SLGn9o0dYV1UZ9jCrbFn2rfMKEsdSSKqVqyURlhvmfX5hS7TQpNSmDKO3MLl+qxvA1eNaHExqq64rS6JT97WkqDQY45iNCQYO8HgVlnJtlYqkWts2AjvKeem5vQx58EhtU7QltOh15oJ0cN4aZb1Hz/hIxqwbWpPZzGh5Hdp9DCZt60OMfPH+VNbU0V+YEjktra90Hz94udpyAJgfFVGOUSHh8aOE+o0P7LYdqrQ0q2f8NQ+x439o+BVDibO8pwNxqFeE/tfsfJBTw8V4M2UUo3CDCJbDyQyUJSUFwQ1tOzuCMY1tSo2ah1g7N5COar+z+CbVqg6tb8Cf4WmoHUj1+fepTlekPFU7IOL9njXex1MtYAMrp2AEkEdOHTT0qMIdleabtwSOmnLotfbVspUHtD2blhurYHM3xOYOXHKPeujO9SBPGkriiXS1CU4KowrEZaA4EHqCFai4aQpSTQ8JJoDgiFy5vkkvrBNF0qdjj/fVHk5ZLjppy/ZT2d3bUyXEOqHSG6kA7yeCpM5BSIkx8wmTsV+y9NwCQ7TxQSBwDZMft6LOvqSSTxJKsKVwC6RoAMrevNNXViS6WkAHXVMLZztBTf/ABtTkgcMqclp/JH2S4S9EJBSjh7+SL6i/kjzj7Bxfojo1I+ov5ICyfyXco+wUxgFHKe+pv5IfU38ijyQKJmA4u+2qiozbZzeDm8R58jzXZMLvmVmNqUzma7X+QRwIXEDauHAq47MYxVtKuYAmmfvt5jmP1D37I8kBOmdivHQwKPhrPFm/KCfdH7o6NwyvRFSm7M06g+4qZRp5aQP5j8P+1lnH72bYP6gcRBUWtWgJb6kKsua2qx5ZGiKE1XaI7Poodeu3aUqnfNaIaFBDloSUtzoYVAtg5xzEpV/X/CEaOGaD5cVNa9V1ExIUtj5APzOy5HETtDZCvReziRoeRGoPthcwtroyWu0IMHoRoV1snguZ9tbDuq/etHhqa+Thv7f5WvA7+rJzk4fZFdd2wfqDBUB9k4cin2XCBuFpXJaJz/HLZFbbO46K5wyzp93VMSQIaTzgzHtaoFvRdVdDPU8B5/wr59s2nSgHYHzc4/5RlJ9EajWi1wIzQZPIKS0eP0/lIw2nlY0dE7xJ6KVjNBt3Vxg97kMcDuqkDRO0jqIQbONVTwG2qNkMgchssd2vwttq9hpuOR8iCdiI2PJaSljHdMDeJWY7d3BrZGsnMwOfA4jQfCfYujt0CdJFO274FOtu1S0rkO6H4ozVhFwEUy974Himy481VU7hOfWlPgNz0WHewnn4o/p7Aqt1eVH78p0mhXKzV18Kc6XUYcPy8Qqes57TDmkHqEEEnCNWbs9x2hh1U8kWcoIIcUZHkkKzlKDjyQQXUgc2KjoEtjegQQQoPJizTngkGgOSCCU6y0wDE3WztBLD95v7jr8VuDiza9P7OIaNuI5yOBQQVYybXE6L2V1W70VFd35lBBZFt7NbdIjsqzqVaWNEnU7I0EaQE7J9W6DB1VcK8mSgggMDvtVMtaksPQ/Ef8AaJBGgCxU4Ks7QYcLik5vHdvmEEEYunaOatUc3GGGYzFvAgiY9Z1Uy3wRu7nF3/EfufejQW+UmYopFmyrTpDKI6NaoNasalRjTxcNOQ3QQRUaViyk26/c1NPZJc+EEFBbZZ9CmOTn1nLtugguk6OQ22prmOpT9jUa+5oiJ8Lw6duEfAoILoAkZDtBh4Y8uZp4iD5gqrp1Tx1QQWlbRllpj+V2+U+w6pbabzs0oIKTlodRHhTfyHtSSw8kaCXkGj//2Q=="
                  alt="Atletas de Jiu-Jitsu treinando"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="relative p-8 space-y-6 bg-gradient-to-b from-transparent to-[#0F0F11]">
                  <div className="flex gap-4">
                    <div className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
                      <div className="h-1 w-8 bg-[#E11D48] mb-2" />
                      <div className="text-[10px] text-gray-500 uppercase font-black">Ativos</div>
                      <div className="text-lg font-black italic tracking-tighter text-white">142 ALUNOS</div>
                    </div>
                    <div className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
                      <div className="h-1 w-8 bg-[#E11D48] mb-2" />
                      <div className="text-[10px] text-gray-500 uppercase font-black">NoGi</div>
                      <div className="text-lg font-black italic tracking-tighter text-white">56 ATLETAS</div>
                    </div>
                    <div className="h-20 w-1/3 bg-white/5 rounded border border-white/5 p-4 flex flex-col justify-center">
                      <div className="h-1 w-8 bg-[#E11D48] mb-2" />
                      <div className="text-[10px] text-gray-500 uppercase font-black">Aptos</div>
                      <div className="text-lg font-black italic tracking-tighter text-white">12 GRAUS</div>
                    </div>
                  </div>
                  <div className="h-48 bg-white/5 rounded border border-white/5 p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-[#E11D48] flex items-center justify-center font-black italic text-black">
                        BJJ
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-black italic uppercase tracking-tight text-white">Alliance Matriz SP</div>
                        <div className="h-1 w-20 bg-white/10 rounded" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-black uppercase text-gray-500">
                        <span>Frequência Semanal</span>
                        <span className="text-[#E11D48]">92%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded overflow-hidden">
                        <div className="h-full bg-[#E11D48] w-[92%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
