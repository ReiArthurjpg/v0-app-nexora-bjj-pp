'use client';

import React from 'react';
import { useChat } from '../hooks/useChat';
import { ChatButton, ChatWindow } from '../ui';

export default function ChatAssistant() {
  const { isOpen, messages, isLoading, toggleChat, sendMessage } = useChat();

  return (
    <>
      <ChatButton isOpen={isOpen} onClick={toggleChat} />
      <ChatWindow 
        isOpen={isOpen} 
        messages={messages} 
        isLoading={isLoading} 
        onSendMessage={sendMessage} 
      />
    </>
  );
}
