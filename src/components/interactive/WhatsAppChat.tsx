// src/components/interactive/WhatsAppChat.tsx

'use client';

import { useState, useEffect } from 'react';
import { createTranslator } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Phone, 
  Clock,
  User,
} from 'lucide-react';

// Utils
import { cn } from '@/lib/utils/cn';

// Define types for our component's props and state
interface ChatMessage {
  id: string;
  type: 'user' | 'agent' | 'system';
  message: string;
  timestamp: Date;
}

interface WhatsAppChatProps {
  locale: string;
  messages: any; // Using 'any' for simplicity, could be more specific
}

const WhatsAppChat = ({ locale, messages }: WhatsAppChatProps) => {
  // Create a translator function from the passed messages
  const t = createTranslator({ locale, messages });

  // Component state
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Simulate agent availability based on time
  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Simulate business hours: 8 AM to 8 PM Sri Lanka time
      setIsOnline(hour >= 8 && hour <= 20);
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && chatMessages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        type: 'agent',
        message: isOnline ? t('chat.welcomeOnline') : t('chat.welcomeOffline'),
        timestamp: new Date(),
      };
      
      setChatMessages([welcomeMessage]);
      
      // Simulate typing and follow-up message
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const followUpMessage: ChatMessage = {
            id: '2',
            type: 'agent',
            message: t('chat.howCanWeHelp'),
            timestamp: new Date(),
          };
          setChatMessages(prev => [...prev, followUpMessage]);
        }, 1500);
      }, 1000);
    }
  }, [isOpen, chatMessages.length, isOnline, t]);

  const redirectToWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const defaultMessage = t('chat.defaultMessage');
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(locale, { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  // Simulate new messages when closed
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 30 seconds
          setUnreadCount(prev => prev + 1);
        }
      }, 30000);

      return () => clearInterval(interval);
    } else {
      setUnreadCount(0);
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl',
          'bg-green-500 hover:bg-green-600 text-white transition-all duration-300',
          'hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300',
          isOpen && 'rotate-180'
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('chat.toggleChat')}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        
        <div className={cn(
          'absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white',
          isOnline ? 'bg-green-400' : 'bg-neutral-400'
        )} />
        
        {unreadCount > 0 && !isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 h-auto bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div className={cn(
                  'absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-white',
                  isOnline ? 'bg-green-400' : 'bg-neutral-400'
                )} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Ceylon Excursion</h3>
                <div className="flex items-center gap-1 text-xs text-green-100">
                  <Clock className="h-3 w-3" />
                  <span>
                    {isOnline ? t('chat.onlineNow') : t('chat.offlineMessage')}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 bg-neutral-50 max-h-80 overflow-y-auto">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={cn('flex', 'justify-start')}
                >
                  <div
                    className={cn(
                      'max-w-[80%] p-3 rounded-2xl text-sm',
                      'bg-white text-neutral-800 rounded-bl-md shadow-sm border'
                    )}
                  >
                    <p>{message.message}</p>
                    <div className={cn(
                      'flex items-center gap-1 mt-1 text-xs',
                      'text-neutral-400'
                    )}>
                      <span>{formatTime(message.timestamp)}</span>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Call to Action Button */}
            <div className="p-4 border-t bg-white">
              <button
                onClick={redirectToWhatsApp}
                className="w-full p-3 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                {t('chat.continueOnWhatsApp')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;

