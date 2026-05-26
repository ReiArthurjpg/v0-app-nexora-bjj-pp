import { useState, useCallback, useEffect } from 'react';
import { Message, ChatState } from '../types/chat.types';
import { chatApi } from '../apis/chat.api';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

export function useChat() {
  const { user } = useAuth();
  const sessionId = user?.id ? String(user.id) : 'guest_session';
  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: 'initial',
        role: 'model',
        content: 'Olá! Eu sou a assistente da Nexora 👋 Estou aqui para ajudar você em toda a parte operacional do sistema. Você pode me dizer o que deseja fazer e eu posso te guiar passo a passo ou até executar parte do processo para você de forma automática. Dentro da plataforma, também consigo criar e organizar os campos necessários para as operações do seu sistema você só precisa preencher as informações que eu solicitar, e tudo será salvo automaticamente na Nexora.',
        timestamp: Date.now(),
      }
    ],
    isLoading: false,
    isOpen: false,
  });

  const toggleChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    try {
      const response = await chatApi.sendMessage(content, sessionId);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response.data.answer,
        timestamp: Date.now(),
        action: response.data.action,
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error: any) {
      toast.error(error.message || 'Falha ao processar mensagem');
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const addBotMessage = useCallback((content: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      role: 'model',
      content,
      timestamp: Date.now(),
    };
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }, []);

  return {
    ...state,
    toggleChat,
    sendMessage,
    addBotMessage,
  };
}
