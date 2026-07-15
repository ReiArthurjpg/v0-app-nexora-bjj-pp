import { useState, useCallback, useEffect } from 'react';
import { Message, ChatState } from '../types/chat.types';
import { chatApi } from '../apis/chat.api';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

export function useChat() {
  const { user } = useAuth();
  const sessionId = String(user?.id ?? 'guest_session');

  const [state, setState] = useState<ChatState>({
    messages: [
      {
        id: 'initial',
        role: 'model',
        content: 'Olá! Sou o assistente da Nexora. Como posso ajudar você hoje?',
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

  return {
    ...state,
    toggleChat,
    sendMessage,
  };
}
