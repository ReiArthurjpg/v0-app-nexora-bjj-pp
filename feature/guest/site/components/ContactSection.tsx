'use client'

import { Send } from 'lucide-react'

const formFields = [
  {
    label: 'Nome do Responsável',
    type: 'text',
    placeholder: 'Ex: Mestre Hélio',
  },
  {
    label: 'Nome da Academia',
    type: 'text',
    placeholder: 'Ex: Alliance Jiu-Jitsu',
  },
  {
    label: 'WhatsApp de Contato',
    type: 'tel',
    placeholder: '(00) 00000-0000',
  },
  {
    label: 'Número de Alunos',
    type: 'select',
    options: ['Até 50 alunos', '51 a 150 alunos', 'Mais de 150 alunos'],
  },
]

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-32 px-6 bg-white text-black relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
          Pronto para <span className="text-[#E11D48]">Dominar?</span>
        </h2>

        <p className="text-gray-600 font-bold uppercase tracking-widest text-sm mb-12">
          Preencha os dados da sua academia e nossa equipe entrará em contato.
        </p>

        <form className="grid md:grid-cols-2 gap-4 text-left">
          {formFields.map((field, index) => (
            <div key={index} className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-1">
                {field.label}
              </label>

              {field.type === 'select' ? (
                <select className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all appearance-none cursor-pointer">
                  {field.options?.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded font-bold focus:border-[#E11D48] outline-none transition-all"
                />
              )}
            </div>
          ))}

          <div className="md:col-span-2 mt-4">
            <button className="w-full bg-[#E11D48] text-white py-5 rounded font-black text-xl uppercase italic tracking-tighter hover:bg-black transition-all flex items-center justify-center gap-3">
              Solicitar Demonstração <Send size={24} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}