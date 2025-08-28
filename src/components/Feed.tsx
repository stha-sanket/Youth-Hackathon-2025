import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { Post, UserInteraction, Category, CategoryWeight } from '../types';
import { allPosts } from '../data/posts';

interface FeedProps {
  onShowReport: (interactions: UserInteraction[]) => void;
}

export const Feed: React.FC<FeedProps> = ({ onShowReport }) => {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [interactions, setInteractions] = useState<UserInteraction[]>([]);
  const [categoryWeights, setCategoryWeights] = useState<CategoryWeight[]>([]);
  const [usedPostIds, setUsedPostIds] = useState<Set<number>>(new Set());
  const [postCount, setPostCount] = useState(0);
  
  const categories: Category[] = ['Sports', 'Technology', 'Politics', 'Environment', 'Entertainment', 'Health'];
  const totalPosts = 25; // Total posts to show

  // Initialize category weights
  useEffect(() => {
    const initialWeights: CategoryWeight[] = categories.map(category => ({
      category,
      weight: 1.0,
      skipCount: 0,
      isHidden: false,
      hiddenUntil: 0
    }));
    setCategoryWeights(initialWeights);
    selectNextPost(initialWeights, new Set(), 0);
  }, []);

  const selectNextPost = (weights: CategoryWeight[], usedIds: Set<number>, currentPostCount: number) => {
    // Update hidden status based on hiddenUntil
    const updatedWeights = weights.map(w => ({
      ...w,
      isHidden: w.hiddenUntil > currentPostCount
    }));

    // Get available categories (not hidden and weight > 0)
    const availableWeights = updatedWeights.filter(w => !w.isHidden && w.weight > 0);
    
    if (availableWeights.length === 0) {
      // If no categories available, show report
      onShowReport(interactions);
      return;
    }

    // Calculate total weight for normalization
    const totalWeight = availableWeights.reduce((sum, w) => sum + w.weight, 0);
    
    // Select category based on weighted random
    let random = Math.random() * totalWeight;
    let selectedCategory: Category | null = null;
    
    for (const weight of availableWeights) {
      random -= weight.weight;
      if (random <= 0) {
        selectedCategory = weight.category;
        break;
      }
    }

    if (!selectedCategory) {
      selectedCategory = availableWeights[0].category;
    }

    // Get available posts from selected category
    const availablePosts = allPosts.filter(post => 
      post.category === selectedCategory && !usedIds.has(post.id)
    );

    if (availablePosts.length === 0) {
      // If no posts available in this category, try another
      const otherCategories = availableWeights.filter(w => w.category !== selectedCategory);
      if (otherCategories.length > 0) {
        const fallbackCategory = otherCategories[Math.floor(Math.random() * otherCategories.length)];
        const fallbackPosts = allPosts.filter(post => 
          post.category === fallbackCategory.category && !usedIds.has(post.id)
        );
        if (fallbackPosts.length > 0) {
          setCurrentPost(fallbackPosts[Math.floor(Math.random() * fallbackPosts.length)]);
          return;
        }
      }
      // No more posts available, show report
      onShowReport(interactions);
      return;
    }

    // Select random post from available posts
    const selectedPost = availablePosts[Math.floor(Math.random() * availablePosts.length)];
    setCurrentPost(selectedPost);
  };

  const handleInteraction = (interaction: UserInteraction) => {
    const newInteractions = [...interactions, interaction];
    const newUsedIds = new Set([...usedPostIds, interaction.postId]);
    const newPostCount = postCount + 1;
    
    setInteractions(newInteractions);
    setUsedPostIds(newUsedIds);
    setPostCount(newPostCount);

    // Check if we've reached the total post limit
    if (newPostCount >= totalPosts) {
      onShowReport(newInteractions);
      return;
    }

    // Update category weights based on interaction
    const updatedWeights = categoryWeights.map(weight => {
      if (weight.category === interaction.category) {
        if (interaction.action === 'like') {
          return {
            ...weight,
            weight: weight.weight + 0.3 // Increase weight for liked categories
          };
        } else if (interaction.action === 'skip') {
          const newSkipCount = weight.skipCount + 1;
          if (newSkipCount === 1) {
            // First skip: hide for next 2 posts
            return {
              ...weight,
              skipCount: newSkipCount,
              isHidden: true,
              hiddenUntil: newPostCount + 2
            };
          } else if (newSkipCount >= 2) {
            // Second skip: remove category completely
            return {
              ...weight,
              skipCount: newSkipCount,
              weight: 0,
              isHidden: true,
              hiddenUntil: Infinity
            };
          }
        }
      }
      return weight;
    });

    setCategoryWeights(updatedWeights);
    
    // Select next post with updated weights
    setTimeout(() => {
      selectNextPost(updatedWeights, newUsedIds, newPostCount);
    }, 300); // Small delay for smooth transition
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized feed...</p>
        </div>
      </div>
    );
  }

  return (
    <PostCard
      post={currentPost}
      onInteraction={handleInteraction}
      postNumber={postCount + 1}
      totalPosts={totalPosts}
    />
  );
};