export type ChatAction =
  | 'show_login_form'
  | 'show_signup_form'
  | 'show_forgot_password_form'
  | null;

export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: number;
  action?: ChatAction;
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
    action?: ChatAction;
    context_documents?: string[];
    error?: string;
  };
}
