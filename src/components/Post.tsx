import React from 'react';
import { Heart, Share, SkipForward } from 'lucide-react';
import { Post as PostType, UserInteraction } from '../types';
import { getCategoryLightColor } from '../data/posts';

interface PostProps {
  post: PostType;
  onInteraction: (interaction: UserInteraction) => void;
}

export const Post: React.FC<PostProps> = ({ post, onInteraction }) => {
  const handleLike = () => {
    onInteraction({
      postId: post.id,
      category: post.category,
      action: 'like'
    });
  };

  const handleShare = () => {
    onInteraction({
      postId: post.id,
      category: post.category,
      action: 'share'
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
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryLightColor(post.category)}`}>
          {post.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
      
      <div className="flex space-x-4">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-colors duration-200 flex-1 justify-center"
        >
          <Heart className="w-5 h-5" />
          <span>Like</span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 flex-1 justify-center"
        >
          <Share className="w-5 h-5" />
          <span>Share</span>
        </button>
        
        <button
          onClick={handleSkip}
          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 flex-1 justify-center"
        >
          <SkipForward className="w-5 h-5" />
          <span>Skip</span>
        </button>
      </div>
    </div>
  );
};