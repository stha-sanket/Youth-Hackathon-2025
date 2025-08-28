export interface Post {
  id: number;
  title: string;
  description: string;
  category: Category;
}

export type Category = 'Sports' | 'Technology' | 'Politics' | 'Environment' | 'Entertainment' | 'Health';

export interface UserInteraction {
  postId: number;
  category: Category;
  action: 'like' | 'skip';
}

export interface CategoryWeight {
  category: Category;
  weight: number;
  skipCount: number;
  isHidden: boolean;
  hiddenUntil: number;
}

export type Page = 'landing' | 'feed' | 'report';