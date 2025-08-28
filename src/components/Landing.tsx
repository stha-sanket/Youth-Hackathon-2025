import React from 'react';
import { Play, TrendingUp, Eye, BarChart } from 'lucide-react';

interface LandingProps {
  onStartFeed: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStartFeed }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Feed Chamber Simulator
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience how algorithms shape your reality
          </p>
        </div>

        {/* What You'll Experience */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What You'll Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Diverse content from 6 categories</h3>
                <p className="text-gray-600">Start with a balanced mix of posts across all topics</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Algorithm learns from your likes</h3>
                <p className="text-gray-600">Every like and skip shapes your future feed</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <BarChart className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Feed gradually becomes more biased</h3>
                <p className="text-gray-600">Watch as your preferences create an echo chamber</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-full">
                <Play className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Mirror report shows what you missed</h3>
                <p className="text-gray-600">Discover how much content was filtered out</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onStartFeed}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <Play className="w-8 h-8" />
            <span>Start Your Feed</span>
          </button>
        </div>
      </div>
    </div>
  );
};