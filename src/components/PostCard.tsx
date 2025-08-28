import React from 'react';
import { Heart, SkipForward } from 'lucide-react';
import { Post, UserInteraction } from '../types';
import { getCategoryLightColor } from '../data/posts';

interface PostCardProps {
  post: Post;
  onInteraction: (interaction: UserInteraction) => void;
  postNumber: number;
  totalPosts: number;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onInteraction, postNumber, totalPosts }) => {
  const handleLike = () => {
    onInteraction({
      postId: post.id,
      category: post.category,
      action: 'like'
    });
  };

  const handleSkip = () => {
    onInteraction({
      postId: post.id,
      category: post.category,
      action: 'skip'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Post {postNumber} of {totalPosts}</span>
            <span>{Math.round((postNumber / totalPosts) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(postNumber / totalPosts) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Post Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryLightColor(post.category)}`}>
              {post.category}
            </span>
          </div>
          
          {/* Content */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">{post.title}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">{post.description}</p>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleSkip}
              className="flex-1 flex items-center justify-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-2xl transition-all duration-200 font-semibold text-lg"
            >
              <SkipForward className="w-6 h-6" />
              <span>Skip</span>
            </button>
            
            <button
              onClick={handleLike}
              className="flex-1 flex items-center justify-center space-x-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-4 rounded-2xl transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <Heart className="w-6 h-6" />
              <span>Like</span>
            </button>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Your choices shape what you see next
        </p>
      </div>
    </div>
  );
};