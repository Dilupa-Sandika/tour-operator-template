// File Path: src/components/home/NewsletterSignup.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Check, 
  Gift, 
  Globe, 
  Sparkles,
  Star,
  ArrowRight,
  Shield,
  AlertCircle
} from 'lucide-react';

// Utils
import { cn } from '@/lib/utils/cn';

interface FormData {
  email: string;
  preferences: string[];
}

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const preferenceOptions = [
    { id: 'cultural', label: 'Cultural Tours', icon: Globe },
    { id: 'adventure', label: 'Adventure Tours', icon: Star },
    { id: 'wildlife', label: 'Wildlife Safari', icon: Sparkles },
    { id: 'beach', label: 'Beach Tours', icon: Gift }
  ];

  const handlePreferenceToggle = (preferenceId: string) => {
    setPreferences(prev => 
      prev.includes(preferenceId)
        ? prev.filter(p => p !== preferenceId)
        : [...prev, preferenceId]
    );
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setError(null);
    
    if (newEmail.length > 0) {
      const isValid = validateEmail(newEmail);
      setIsEmailValid(isValid);
      if (!isValid && newEmail.length > 5) {
        setError('Please enter a valid email address');
      }
    } else {
      setIsEmailValid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          preferences,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setPreferences([]);
        setIsEmailValid(false);
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Get early access to special deals and exclusive discounts on our premium tours.'
    },
    {
      icon: Globe,
      title: 'Travel Tips',
      description: 'Receive insider knowledge and expert travel tips from our local Sri Lankan guides.'
    },
    {
      icon: Star,
      title: 'Early Access',
      description: 'Be the first to know about new destinations and seasonal tour offerings.'
    }
  ];

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white"
      >
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-white" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
          Welcome Aboard! 🎉
        </h2>
        <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
          Thank you for subscribing! You'll receive amazing travel content and exclusive offers soon.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
          <p className="text-sm text-white/80">
            Check your email for a welcome message with your first exclusive offer!
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto text-white">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6"
        >
          <Mail className="h-4 w-4" />
          Newsletter Signup
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-heading font-bold mb-4"
        >
          Stay Updated with Our Latest Adventures
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-white/90 max-w-2xl mx-auto"
        >
          Get travel tips, exclusive offers, and inspiring stories delivered straight to your inbox
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-heading font-bold mb-6">
            What You'll Get
          </h3>
          
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-white/80">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">2,500+ travelers</span>
            </div>
            <p className="text-sm text-white/80">
              Join thousands of travelers getting insider tips and exclusive deals
            </p>
          </div>
        </motion.div>

        {/* Subscription Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  className={cn(
                    'w-full px-4 py-3 pl-12 bg-white/90 backdrop-blur-sm border rounded-xl',
                    'text-neutral-900 placeholder-neutral-500',
                    'focus:outline-none focus:ring-2 focus:border-transparent',
                    'transition-all duration-200',
                    error 
                      ? 'border-red-400 ring-2 ring-red-400/50' 
                      : isEmailValid 
                        ? 'border-green-400 ring-2 ring-green-400/50 focus:ring-green-400/50'
                        : 'border-white/30 focus:ring-primary/50'
                  )}
                  required
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                {isEmailValid && (
                  <Check className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                )}
                {error && (
                  <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
                )}
              </div>
              {error && (
                <p className="text-red-300 text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              )}
              {isEmailValid && (
                <p className="text-green-300 text-sm mt-2 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Email looks good!
                </p>
              )}
            </div>

            {/* Preferences */}
            <div>
              <label className="block text-sm font-medium mb-3 text-white">
                Interests (Optional)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {preferenceOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handlePreferenceToggle(option.id)}
                      className={cn(
                        'flex items-center gap-2 p-3 rounded-xl border transition-all duration-200',
                        'text-sm font-medium text-left',
                        preferences.includes(option.id)
                          ? 'bg-white/20 border-white/40 text-white'
                          : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{option.label}</span>
                      {preferences.includes(option.id) && (
                        <Check className="h-4 w-4 text-white ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-white/60 mt-2">
                Select your interests to receive personalized content
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !isEmailValid}
              className={cn(
                'w-full py-4 px-6 rounded-xl font-semibold',
                'hover:shadow-xl hover:-translate-y-0.5',
                'transition-all duration-300 flex items-center justify-center gap-2',
                'disabled:cursor-not-allowed disabled:transform-none',
                isEmailValid && !isLoading
                  ? 'bg-white text-primary hover:bg-white/90'
                  : 'bg-white/50 text-white/70'
              )}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Subscribe Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <div className="flex items-start gap-2 text-xs text-white/70">
              <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>
                We respect your privacy. Unsubscribe at any time. Read our{' '}
                <a href="/privacy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">2.5K+</div>
              <div className="text-xs text-white/70">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-xs text-white/70">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">4.9</div>
              <div className="text-xs text-white/70">Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterSignup;