import { useState, useCallback } from 'react';
import { Message, ChatState, ChatAction } from '../types/chat.types';
import { chatApi } from '../apis/chat.api';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

export function useChat() {
  const { user, isAuthenticated } = useAuth();
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
      const rawAction: ChatAction = response.data.action ?? null;

      // O formulário de cadastro só é liberado para usuários autenticados (administradores)
      const resolvedAction: ChatAction =
        rawAction === 'show_signup_form' && !isAuthenticated ? null : rawAction;

      // Se o usuário não está logado e tentou acessar o formulário de cadastro,
      // adiciona um aviso ao final da resposta do assistente
      let finalContent = response.data.answer;
      if (rawAction === 'show_signup_form' && !isAuthenticated) {
        finalContent +=
          '\n\n> ⚠️ **Atenção:** O cadastro de novos usuários é restrito a administradores autenticados. Por favor, **faça login** primeiro para ter acesso ao formulário de cadastro.';
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: finalContent,
        timestamp: Date.now(),
        action: resolvedAction,
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
  }, [sessionId, isAuthenticated]);

  return {
    ...state,
    isAuthenticated,
    toggleChat,
    sendMessage,
  };
}
