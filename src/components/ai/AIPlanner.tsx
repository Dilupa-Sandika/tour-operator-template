// src/components/ai/AIPlanner.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  MapPin, 
  Clock, 
  DollarSign,
  Star,
  ArrowRight,
  Loader2,
  RefreshCw,
  CheckCircle
} from 'lucide-react';

// Utils
import { cn } from '@/lib/utils/cn';

interface AIMessage {
  id: string;
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
}

const AIPlanner = () => {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [suggestions] = useState([
    'Show me tours with history and beaches',
    'I want adventure activities for 3 days',
    'Cultural experiences in hill country',
    'Wildlife safari with family-friendly options',
    'Romantic getaway with luxury accommodations'
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('aiPlanner');

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      const welcomeMessage: AIMessage = {
        id: '1',
        type: 'ai',
        content: t('welcomeMessage'),
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [messages.length, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: AIMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsLoading(false);
      setIsProcessing(true);

      // Show thank you message
      const thankYouMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: t('processing.thankYou'),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, thankYouMessage]);
      setShowThankYou(true);

      // Additional processing message
      setTimeout(() => {
        const processingMessage: AIMessage = {
          id: (Date.now() + 2).toString(),
          type: 'ai',
          content: t('processing.analyzing'),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, processingMessage]);
      }, 1500);

      // Final message
      setTimeout(() => {
        const finalMessage: AIMessage = {
          id: (Date.now() + 3).toString(),
          type: 'ai',
          content: t('processing.contactSoon'),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, finalMessage]);
        setIsProcessing(false);
      }, 3000);

    } catch (error) {
      console.error('Error processing AI request:', error);
      setIsLoading(false);
      setIsProcessing(false);
      
      const errorMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: t('errorMessage'),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const resetChat = () => {
    setMessages([{
      id: '1',
      type: 'ai',
      content: t('welcomeMessage'),
      timestamp: new Date()
    }]);
    setInputValue('');
    setShowThankYou(false);
    setIsProcessing(false);
  };

  return (
    <div className="max-w-4xl mx-auto" id="ai-planner">
      <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold">{t('title')}</h2>
              <p className="text-primary-100 text-sm">{t('subtitle')}</p>
            </div>
          </div>
          
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-semibold">{t('status.received')}</span>
              </div>
              <p className="text-sm text-primary-100">
                {t('status.processing')}
              </p>
            </motion.div>
          )}
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-neutral-50">
          {messages.map((message) => (
            <div key={message.id} className={cn(
              'flex',
              message.type === 'user' ? 'justify-end' : 'justify-start'
            )}>
              <div className={cn(
                'max-w-[80%] space-y-2',
                message.type === 'user' ? 'items-end' : 'items-start'
              )}>
                <div className={cn(
                  'p-3 rounded-2xl text-sm',
                  message.type === 'user'
                    ? 'bg-primary-500 text-white rounded-br-md'
                    : 'bg-white text-neutral-800 rounded-bl-md shadow-sm border'
                )}>
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="h-4 w-4 text-primary-500" />
                      <span className="font-medium text-primary-600">AI Assistant</span>
                    </div>
                  )}
                  <p className="leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary-500" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-200" />
                  </div>
                  <span className="text-sm text-neutral-600">{t('thinking')}</span>
                </div>
              </div>
            </div>
          )}

          {/* Processing Indicator */}
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl p-4 max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Loader2 className="h-5 w-5 text-primary-600 animate-spin" />
                  <span className="font-medium text-primary-700">{t('processing.title')}</span>
                </div>
                <p className="text-sm text-neutral-600">
                  {t('processing.description')}
                </p>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && !showThankYou && (
          <div className="p-4 border-t bg-white">
            <p className="text-sm text-neutral-600 mb-3">{t('suggestionsTitle')}</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-sm bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 text-neutral-700 px-3 py-2 rounded-full transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t bg-white">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('inputPlaceholder')}
                disabled={isLoading || isProcessing}
                className="w-full p-3 pr-12 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading || isProcessing}
              className="p-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-[48px]"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </form>
          
          <div className="flex items-center justify-between mt-3 text-xs text-neutral-500">
            <span>{t('poweredBy')} OpenAI GPT-4</span>
            <button
              onClick={resetChat}
              className="flex items-center gap-1 hover:text-primary-600 transition-colors"
              disabled={isProcessing}
            >
              <RefreshCw className="h-3 w-3" />
              {t('clearChat')}
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200"
        >
          <h3 className="font-semibold text-neutral-900 mb-2">
            {t('nextSteps.title')}
          </h3>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              {t('nextSteps.analyze')}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              {t('nextSteps.respond')}
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              {t('nextSteps.customize')}
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default AIPlanner;