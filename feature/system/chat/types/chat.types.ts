export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: number;
  action?: string;
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
    action?: string;
    context_documents?: string[];
    error?: string;
  };
}
