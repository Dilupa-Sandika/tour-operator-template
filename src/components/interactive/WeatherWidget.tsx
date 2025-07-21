'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  CloudLightning,
  Wind,
  Droplets,
  Eye,
  Thermometer,
  MapPin,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';

// Utils
import { cn } from '@/lib/utils/cn';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  feelsLike: number;
  icon: string;
  timestamp: Date;
}

interface WeatherWidgetProps {
  location: string;
  className?: string;
  compact?: boolean;
}

const WeatherWidget = ({ location, className, compact = false }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const t = useTranslations('weather');

  useEffect(() => {
    fetchWeather();
    
    // Update weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [location]);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      // In a real app, you would call your weather API here
      // For demo purposes, we'll simulate the API call
      const response = await simulateWeatherAPI(location);
      setWeather(response);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Simulate weather API response
  const simulateWeatherAPI = async (location: string): Promise<WeatherData> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock weather data based on location
    const mockData: WeatherData = {
      location: location,
      temperature: 28,
      condition: 'sunny',
      description: 'Sunny with few clouds',
      humidity: 72,
      windSpeed: 12,
      visibility: 10,
      uvIndex: 8,
      feelsLike: 31,
      icon: '01d',
      timestamp: new Date()
    };

    // Vary data slightly based on time of day
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      mockData.temperature = 26;
      mockData.description = 'Clear morning sky';
    } else if (hour >= 12 && hour < 18) {
      mockData.temperature = 30;
      mockData.description = 'Hot afternoon sun';
    } else if (hour >= 18 && hour < 20) {
      mockData.temperature = 28;
      mockData.description = 'Pleasant evening';
    } else {
      mockData.temperature = 24;
      mockData.description = 'Cool night';
      mockData.condition = 'clear-night';
    }

    return mockData;
  };

  const getWeatherIcon = (condition: string, size: 'sm' | 'md' | 'lg' = 'md') => {
    const iconSize = size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-6 w-6' : 'h-8 w-8';
    
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className={cn(iconSize, 'text-yellow-500')} />;
      case 'cloudy':
      case 'overcast':
        return <Cloud className={cn(iconSize, 'text-gray-500')} />;
      case 'rainy':
      case 'rain':
        return <CloudRain className={cn(iconSize, 'text-blue-500')} />;
      case 'snowy':
      case 'snow':
        return <CloudSnow className={cn(iconSize, 'text-blue-300')} />;
      case 'stormy':
      case 'thunderstorm':
        return <CloudLightning className={cn(iconSize, 'text-purple-500')} />;
      default:
        return <Sun className={cn(iconSize, 'text-yellow-500')} />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return 'from-yellow-400 to-orange-400';
      case 'cloudy':
      case 'overcast':
        return 'from-gray-400 to-gray-500';
      case 'rainy':
      case 'rain':
        return 'from-blue-400 to-blue-600';
      case 'snowy':
      case 'snow':
        return 'from-blue-200 to-blue-400';
      case 'stormy':
      case 'thunderstorm':
        return 'from-purple-500 to-purple-700';
      default:
        return 'from-yellow-400 to-orange-400';
    }
  };

  const getActivityRecommendation = (temp: number, condition: string) => {
    if (condition.includes('rain') || condition.includes('storm')) {
      return t('recommendations.indoor');
    }
    if (temp > 30) {
      return t('recommendations.hot');
    }
    if (temp < 20) {
      return t('recommendations.cool');
    }
    return t('recommendations.perfect');
  };

  if (loading) {
    return (
      <div className={cn(
        'bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-4',
        'animate-pulse',
        className
      )}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="space-y-2">
            <div className="w-16 h-4 bg-gray-200 rounded" />
            <div className="w-12 h-3 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(
        'bg-red-50/90 backdrop-blur-sm border border-red-200 rounded-xl p-4 text-red-600',
        className
      )}>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span className="text-sm">{t('error')}</span>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'glass rounded-xl p-3 cursor-pointer hover:bg-white/20 transition-all duration-200',
          className
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {getWeatherIcon(weather.condition, 'sm')}
          <div className="text-white">
            <div className="text-lg font-bold">{weather.temperature}°C</div>
            <div className="text-xs opacity-80">{weather.location}</div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'glass rounded-2xl overflow-hidden shadow-soft max-w-sm',
        className
      )}
    >
      {/* Header */}
      <div className={cn(
        'bg-gradient-to-r p-4 text-white',
        getConditionColor(weather.condition)
      )}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{weather.location}</span>
          </div>
          <button
            onClick={fetchWeather}
            disabled={loading}
            className="p-1 hover:bg-white/20 rounded-full transition-colors disabled:opacity-50"
          >
            <RefreshCw className={cn('h-4 w-4', loading && 'animate-spin')} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold mb-1">
              {weather.temperature}°C
            </div>
            <div className="text-sm opacity-90">
              {t('feelsLike')} {weather.feelsLike}°C
            </div>
          </div>
          <div className="text-right">
            {getWeatherIcon(weather.condition, 'lg')}
            <div className="text-sm mt-1 opacity-90">
              {weather.description}
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-sm"
          >
            <div className="p-4 space-y-4">
              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span className="text-neutral-600">{t('humidity')}</span>
                  <span className="font-medium">{weather.humidity}%</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-green-500" />
                  <span className="text-neutral-600">{t('wind')}</span>
                  <span className="font-medium">{weather.windSpeed} km/h</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-purple-500" />
                  <span className="text-neutral-600">{t('visibility')}</span>
                  <span className="font-medium">{weather.visibility} km</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-orange-500" />
                  <span className="text-neutral-600">{t('uvIndex')}</span>
                  <span className="font-medium">{weather.uvIndex}</span>
                </div>
              </div>

              {/* Activity Recommendation */}
              <div className="bg-primary-50 rounded-lg p-3">
                <div className="text-sm font-medium text-primary-600 mb-1">
                  {t('recommendation')}
                </div>
                <div className="text-sm text-neutral-700">
                  {getActivityRecommendation(weather.temperature, weather.condition)}
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-xs text-neutral-500 text-center">
                {t('lastUpdated')}: {weather.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button for Expanded View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-2 bg-white/50 hover:bg-white/70 transition-colors text-neutral-600 text-sm border-t border-white/20"
      >
        {isExpanded ? t('showLess') : t('showMore')}
      </button>
    </motion.div>
  );
};

export default WeatherWidget;