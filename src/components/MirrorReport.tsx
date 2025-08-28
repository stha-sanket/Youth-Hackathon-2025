import React from 'react';
import { RotateCcw, TrendingUp, TrendingDown, Eye } from 'lucide-react';
import { UserInteraction, Category } from '../types';
import { getCategoryColor } from '../data/posts';

interface MirrorReportProps {
  interactions: UserInteraction[];
  onRestart: () => void;
}

interface CategoryStats {
  category: Category;
  likes: number;
  skips: number;
  total: number;
  percentage: number;
}

export const MirrorReport: React.FC<MirrorReportProps> = ({ interactions, onRestart }) => {
  const categories: Category[] = ['Sports', 'Technology', 'Politics', 'Environment', 'Entertainment', 'Health'];
  
  const calculateStats = (): CategoryStats[] => {
    const stats: CategoryStats[] = categories.map(category => ({
      category,
      likes: 0,
      skips: 0,
      total: 0,
      percentage: 0
    }));
    
    // Count interactions for each category
    interactions.forEach(interaction => {
      const stat = stats.find(s => s.category === interaction.category);
      if (stat) {
        stat.total++;
        if (interaction.action === 'like') {
          stat.likes++;
        } else if (interaction.action === 'skip') {
          stat.skips++;
        }
      }
    });
    
    // Calculate percentages
    const totalInteractions = interactions.length;
    stats.forEach(stat => {
      stat.percentage = totalInteractions > 0 ? Math.round((stat.total / totalInteractions) * 100) : 0;
    });
    
    return stats.sort((a, b) => b.total - a.total);
  };

  const stats = calculateStats();
  const mostSeenCategory = stats[0];
  const ignoredCategories = stats.filter(s => s.total === 0);
  const skippedCategories = stats.filter(s => s.skips >= 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Eye className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            This is your echo chamber
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how algorithms shaped your feed based on your {interactions.length} interactions
          </p>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mostSeenCategory.total > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Your Favorite Topic
              </h3>
              <div className={`${getCategoryColor(mostSeenCategory.category)} text-white p-4 rounded-lg mb-3`}>
                <span className="text-2xl font-bold">{mostSeenCategory.category}</span>
              </div>
              <p className="text-gray-600">
                You saw {mostSeenCategory.total} posts ({mostSeenCategory.percentage}%) from this category, 
                with {mostSeenCategory.likes} likes and {mostSeenCategory.skips} skips.
              </p>
            </div>
          )}

          {(ignoredCategories.length > 0 || skippedCategories.length > 0) && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <TrendingDown className="w-6 h-6 mr-2" />
                Filtered Out
              </h3>
              <div className="space-y-2 mb-3">
                {ignoredCategories.slice(0, 3).map(category => (
                  <div key={category.category} className="bg-red-100 text-red-800 p-2 rounded">
                    {category.category} (completely hidden)
                  </div>
                ))}
                {skippedCategories.filter(c => !ignoredCategories.includes(c)).slice(0, 2).map(category => (
                  <div key={category.category} className="bg-orange-100 text-orange-800 p-2 rounded">
                    {category.category} ({category.skips} skips)
                  </div>
                ))}
              </div>
              <p className="text-gray-600">
                These topics were reduced or removed from your feed due to lack of engagement.
              </p>
            </div>
          )}
        </div>

        {/* Detailed Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Content Exposure Breakdown</h2>
          
          <div className="space-y-6">
            {stats.map(stat => (
              <div key={stat.category} className="border-l-4 border-gray-200 pl-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{stat.category}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    stat.percentage > 25 ? 'bg-green-100 text-green-800' :
                    stat.percentage > 10 ? 'bg-yellow-100 text-yellow-800' :
                    stat.percentage > 0 ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {stat.percentage}% of feed
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <div className="font-medium text-gray-600">Total Seen</div>
                    <div className="text-2xl font-bold">{stat.total}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Liked</div>
                    <div className="text-2xl font-bold text-red-600">{stat.likes}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">Skipped</div>
                    <div className="text-2xl font-bold text-gray-600">{stat.skips}</div>
                  </div>
                </div>
                
                {/* Exposure bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getCategoryColor(stat.category)}`}
                    style={{ width: `${Math.max(stat.percentage, 2)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <RotateCcw className="w-6 h-6" />
            <span>Try Again</span>
          </button>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            This simulation shows how social media algorithms create echo chambers by showing you more of what you engage with and less of what you ignore. In reality, this happens gradually and often without awareness.
          </p>
        </div>
      </div>
    </div>
  );
};