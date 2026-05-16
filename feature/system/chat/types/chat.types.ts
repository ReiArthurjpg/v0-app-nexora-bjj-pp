export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  isOpen: boolean;
}

export interface ChatResponse {
  success: boolean;
  message: string;
  data: {
    answer: string;
    provider: string;
    context_documents?: string[];
    error?: string;
  };
}
