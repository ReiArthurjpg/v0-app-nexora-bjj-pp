'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Headset, Loader2 } from 'lucide-react';
import { Message } from '../types/chat.types';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ChatLoginForm } from './ChatLoginForm';
import { ChatSignupForm } from './ChatSignupForm';
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
    <div className="fixed bottom-40 md:bottom-28 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-[#0A0A0A]/85 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
      {/* Header */}
      <div className="p-5 border-b border-white/5 bg-black/40 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E11D48]/50 to-transparent"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-[#E11D48] to-[#BE123C] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.4)]">
            <Headset size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-white">Nexora <span className="text-[#E11D48]">Suporte</span></h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Online Agora</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id} 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                  msg.role === 'user' 
                    ? 'bg-white/10 text-white border border-white/5' 
                    : 'bg-gradient-to-br from-[#18181B] to-[#0F0F10] border border-white/10'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <Headset size={14} className="text-[#E11D48]" />}
                </div>
                <div className={`p-4 text-[13px] leading-relaxed rounded-2xl shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-[#E11D48] to-[#BE123C] text-white rounded-tr-sm' 
                    : 'bg-[#18181B] text-gray-200 border border-white/5 rounded-tl-sm'
                }`}>
                  <div className="prose prose-sm text-gray-200">
                    <ReactMarkdown
                      components={{
                        a: ({node, ...props}) => (
                          <a className="text-blue-500 underline" {...props} />
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                  
                  {msg.action === 'show_login_form' && (
                    <div className="mt-3">
                      <ChatLoginForm onSuccess={() => console.log('Login success from chat')} />
                    </div>
                  )}
                  {msg.action === 'show_signup_form' && (
                    <div className="mt-3">
                      <ChatSignupForm onSuccess={() => console.log('Signup success from chat')} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#18181B] border border-white/10 flex items-center justify-center shadow-md">
                  <Headset size={14} className="text-[#E11D48]" />
                </div>
                <div className="px-4 py-3.5 rounded-2xl bg-[#18181B] border border-white/5 rounded-tl-sm flex items-center gap-1.5 shadow-sm min-w-[60px] justify-center">
                  <motion.div
                    className="w-1.5 h-1.5 bg-[#E11D48] rounded-full shadow-[0_0_5px_rgba(225,29,72,0.8)]"
                    animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-[#E11D48] rounded-full shadow-[0_0_5px_rgba(225,29,72,0.8)]"
                    animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-[#E11D48] rounded-full shadow-[0_0_5px_rgba(225,29,72,0.8)]"
                    animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Replies */}
      {messages.length <= 1 && !isLoading && (
        <div className="px-4 pb-2 flex flex-col gap-2">
          {[
            'O que é a NexoraBJJ?',
            'Você pode explicar?',
            'Como funciona a plataforma?',
          ].map((suggestion) => (
            <motion.button
              key={suggestion}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                onSendMessage(suggestion);
              }}
              className="w-full text-left text-[12px] text-gray-300 bg-[#18181B] border border-white/10 hover:border-[#E11D48]/50 hover:text-white hover:bg-[#1f1f1f] rounded-xl px-4 py-2.5 transition-all duration-200 cursor-pointer"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="w-full bg-[#18181B] border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-[13px] text-white placeholder-gray-500 focus:outline-none focus:border-[#E11D48]/50 focus:ring-1 focus:ring-[#E11D48]/50 transition-all"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 bg-[#E11D48] text-white rounded-full hover:bg-[#BE123C] hover:scale-105 transition-all disabled:opacity-50 disabled:grayscale disabled:hover:scale-100 shadow-[0_0_10px_rgba(225,29,72,0.3)]"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
