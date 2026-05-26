'use client';

import React, { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import { ChatButton, ChatWindow, ChatNotification } from '../ui';
import { AnimatePresence } from 'framer-motion';

export default function ChatAssistant() {
  const { isOpen, messages, isLoading, toggleChat, sendMessage } = useChat();
  const [showNotification, setShowNotification] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setShowNotification(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 300000); // 5 minutes

    return () => clearTimeout(timer);
  }, [isOpen, resetTrigger]);

  const handleNotificationClick = () => {
    setShowNotification(false);
    setIsHovering(false);
    toggleChat();
  };

  const handleNotificationClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotification(false);
    setResetTrigger(prev => prev + 1);
  };

  return (
    <>
      <AnimatePresence>
        {(showNotification || isHovering) && !isOpen && (
          <ChatNotification 
            onClick={handleNotificationClick} 
            onClose={handleNotificationClose} 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        )}
      </AnimatePresence>
      <ChatButton 
        isOpen={isOpen} 
        onClick={toggleChat} 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <ChatWindow 
        isOpen={isOpen} 
        messages={messages} 
        isLoading={isLoading} 
        onSendMessage={sendMessage} 
      />
    </>
  );
}
