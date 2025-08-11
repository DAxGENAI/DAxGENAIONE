import React from 'react';
import { BarChart3, Database, TrendingUp } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 flex items-center justify-center z-50">
      <div className="text-center px-4">
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="relative flex items-center justify-center space-x-3 sm:space-x-4 animate-pulse">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-red-300 animate-bounce" style={{ animationDelay: '0ms' }} />
            <Database className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 animate-bounce" style={{ animationDelay: '200ms' }} />
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-red-200 animate-bounce" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 animate-fade-in">DAxGENAI</h2>
        <p className="text-red-200 text-sm sm:text-base animate-fade-in">Loading your data analytics journey...</p>
        <div className="mt-4 sm:mt-6 flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;