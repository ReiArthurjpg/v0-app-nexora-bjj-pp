import { fetchApi } from '@/lib/api';
import { ChatResponse } from '../types/chat.types';

export const chatApi = {
  sendMessage: async (message: string, sessionId: string = 'default_session'): Promise<ChatResponse> => {
    const response = await fetchApi('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message, session_id: sessionId }),
      baseUrl: process.env.NEXT_PUBLIC_AI_API_URL
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao enviar mensagem');
    }

    return await response.json();
  }
};
