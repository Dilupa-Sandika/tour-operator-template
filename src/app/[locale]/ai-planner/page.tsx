// File Path: src/app/[locale]/ai-planner/page.tsx

'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, MapPin, Calendar, DollarSign, Users, Zap, Brain, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot' | 'typing';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface TourRecommendation {
  id: string;
  name: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  matchReason: string;
}

export default function AIPlannerPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "🌟 Hello! I'm Aila, your AI travel assistant for Sri Lanka! I'm here to create the perfect itinerary just for you.\n\nTo get started, tell me about your dream Sri Lankan adventure. What interests you most? 🏝️",
      timestamp: new Date(),
      suggestions: [
        "🏛️ I love temples and culture",
        "🐘 Show me wildlife and safaris", 
        "🏖️ I want beautiful beaches",
        "🥾 Adventure and hiking please",
        "🍛 Food and local experiences"
      ]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userPreferences, setUserPreferences] = useState({
    interests: '',
    duration: '',
    budget: '',
    groupSize: ''
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addTypingIndicator = () => {
    setIsTyping(true);
    const typingMessage: Message = {
      id: Date.now().toString(),
      type: 'typing',
      content: '',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, typingMessage]);
  };

  const removeTypingIndicator = () => {
    setIsTyping(false);
    setMessages(prev => prev.filter(msg => msg.type !== 'typing'));
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Add typing indicator
    addTypingIndicator();

    // Simulate AI processing
    setTimeout(() => {
      removeTypingIndicator();
      
      let botResponse = '';
      let suggestions: string[] = [];
      
      if (currentStep === 1) {
        setUserPreferences(prev => ({ ...prev, interests: message }));
        botResponse = "🎯 Perfect choice! I can already see some amazing experiences that match your interests.\n\nNow, let me personalize this further:\n\n📅 How many days will you be exploring Sri Lanka?\n💰 What's your approximate budget per person?\n👥 How many people will be traveling?";
        suggestions = [
          "📅 3-5 days, moderate budget, 2 people",
          "📅 7-10 days, mid-range, solo travel",
          "📅 2 weeks, flexible budget, family of 4"
        ];
        setCurrentStep(2);
      } else if (currentStep === 2) {
        setUserPreferences(prev => ({ ...prev, duration: message }));
        botResponse = "✨ Excellent! I'm analyzing thousands of experiences to find your perfect matches...\n\n🔍 Processing your preferences...\n🎯 Matching with top-rated tours...\n📍 Optimizing your route...";
        setCurrentStep(3);
        
        // Show recommendations after a short delay
        setTimeout(() => {
          const recommendationsMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            content: 'recommendations',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, recommendationsMessage]);
        }, 3000);
      } else {
        botResponse = "🙌 Amazing! I've created a personalized itinerary based on your preferences. Our travel experts will review this and send you a detailed day-by-day plan within 2 hours.\n\n📧 You'll receive:\n• Custom itinerary with timings\n• Booking options & pricing\n• Local tips & recommendations\n• Emergency contact details\n\n💬 Need immediate assistance? Our team is standing by!";
        suggestions = [
          "📞 Call me instead",
          "💬 Chat with human agent",
          "📋 Modify my preferences"
        ];
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
        suggestions: suggestions
      };

      setMessages(prev => [...prev, botMessage]);
    }, 2000 + Math.random() * 1000);
  };

  const mockRecommendations: TourRecommendation[] = [
    {
      id: '1',
      name: 'Sigiriya Rock Fortress Adventure',
      location: 'Ancient Cities',
      duration: 'Full Day',
      price: '$75 USD',
      description: 'Climb the legendary Lion Rock and explore ancient frescoes in this UNESCO World Heritage site.',
      matchReason: 'Perfect for culture and adventure lovers'
    },
    {
      id: '2',
      name: 'Yala National Park Safari',
      location: 'Yala',
      duration: 'Full Day',
      price: '$95 USD',
      description: 'Spot Sri Lankan leopards, elephants, and exotic birds in the island\'s premier wildlife sanctuary.',
      matchReason: 'Matches your wildlife interests'
    },
    {
      id: '3',
      name: 'Galle Fort Heritage Walk',
      location: 'Southern Coast',
      duration: 'Half Day',
      price: '$45 USD',
      description: 'Stroll through Dutch colonial streets and discover maritime history in this charming coastal fort.',
      matchReason: 'Great combination of culture and coast'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Enhanced Hero Section - Full Height */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="absolute inset-0">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white shadow-lg text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 animate-pulse" />
              AI-Powered Travel Planning
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Meet Aila
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your intelligent Sri Lankan travel companion who creates personalized itineraries in minutes, not hours
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Instant Planning</h3>
                <p className="text-sm text-gray-600">Get personalized itineraries in under 5 minutes</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Smart Matching</h3>
                <p className="text-sm text-gray-600">AI analyzes your preferences for perfect matches</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Local Expertise</h3>
                <p className="text-sm text-gray-600">Insider knowledge from Sri Lankan travel experts</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Start Planning with Aila
              </button>
              <button
                onClick={() => window.open('/contact', '_blank')}
                className="bg-white/90 hover:bg-white text-primary px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Talk to Human Agent
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">5k+</div>
                <div className="text-sm text-gray-600">Itineraries Created</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-secondary mb-1">4.9</div>
                <div className="text-sm text-gray-600">AI Accuracy Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-accent mb-1">2 min</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface Section */}
      <section id="chat-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Chat with Aila Now
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tell Aila about your travel preferences and watch as she creates your perfect Sri Lankan adventure in real-time.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Bot className="w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Aila - AI Travel Assistant</h3>
                    <p className="text-sm opacity-90 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Online & Ready to Help
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      AI Powered
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                ref={chatContainerRef}
                className="h-96 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white"
              >
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.type === 'bot' && (
                      <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full h-fit">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-xs md:max-w-md ${message.type === 'user' ? 'order-1' : ''}`}>
                      {message.type === 'typing' ? (
                        <div className="bg-gray-100 rounded-2xl p-4">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      ) : message.content === 'recommendations' ? (
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                            <div className="flex items-center gap-2 mb-4">
                              <Sparkles className="w-5 h-5 text-green-600" />
                              <h4 className="font-bold text-green-800">🎉 Perfect Matches Found!</h4>
                            </div>
                            <div className="space-y-4">
                              {mockRecommendations.map((tour) => (
                                <div key={tour.id} className="bg-white rounded-xl p-4 border shadow-sm hover:shadow-md transition-shadow">
                                  <div className="flex justify-between items-start mb-2">
                                    <h5 className="font-bold text-gray-900">{tour.name}</h5>
                                    <span className="text-lg font-bold text-primary">{tour.price}</span>
                                  </div>
                                  
                                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                    <div className="flex items-center gap-1">
                                      <MapPin className="w-3 h-3" />
                                      {tour.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      {tour.duration}
                                    </div>
                                  </div>
                                  
                                  <p className="text-sm text-gray-700 mb-3">{tour.description}</p>
                                  
                                  <div className="bg-green-50 border border-green-200 text-green-800 text-xs px-3 py-1 rounded-full inline-block">
                                    ✨ {tour.matchReason}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg">
                                📧 Get Complete Itinerary
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className={`rounded-2xl p-4 ${
                            message.type === 'user' 
                              ? 'bg-gradient-to-r from-primary to-secondary text-white ml-auto' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                            <span className="text-xs opacity-70 mt-2 block">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          
                          {/* Suggestions */}
                          {message.suggestions && message.suggestions.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {message.suggestions.map((suggestion, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleSendMessage(suggestion)}
                                  className="block w-full text-left bg-white hover:bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-sm text-blue-700 transition-colors hover:border-blue-300"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {message.type === 'user' && (
                      <div className="bg-gray-200 p-2 rounded-full h-fit">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t p-6 bg-white">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type your message to Aila..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={isTyping || !inputValue.trim()}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:from-gray-300 disabled:to-gray-300 text-white p-3 rounded-xl transition-all hover:scale-105 shadow-lg disabled:hover:scale-100"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <MessageCircle className="w-3 h-3" />
                  <span>Powered by advanced AI • Responses in seconds • 24/7 availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}