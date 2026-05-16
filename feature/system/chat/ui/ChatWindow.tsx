import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { Message } from '../types/chat.types';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  isOpen: boolean;
  onSendMessage: (content: string) => void;
}

export function ChatWindow({ messages, isLoading, isOpen, onSendMessage }: ChatWindowProps) {
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-40 md:bottom-28 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-[#0F0F10]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
      {/* Header */}
      <div className="p-6 border-b border-white/5 bg-gradient-to-r from-[#E11D48]/10 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E11D48] rounded-xl flex items-center justify-center shadow-lg">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-tighter italic">Nexora <span className="text-[#E11D48]">AI</span></h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Online Agora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                msg.role === 'user' ? 'bg-white/10' : 'bg-[#E11D48]/20'
              }`}>
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-[#E11D48]" />}
              </div>
              <div className={`p-4 rounded-2xl text-xs leading-relaxed font-medium italic ${
                msg.role === 'user' 
                  ? 'bg-white text-black rounded-tr-none' 
                  : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E11D48]/20 flex items-center justify-center">
                <Bot size={14} className="text-[#E11D48]" />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-400">
                <Loader2 size={14} className="animate-spin" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-6 bg-white/5 border-t border-white/5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte qualquer coisa..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs italic font-bold focus:outline-none focus:border-[#E11D48]/50 transition-colors pr-12"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#E11D48] hover:scale-110 transition-transform disabled:opacity-50 disabled:grayscale"
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
