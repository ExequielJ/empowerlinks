
export type PostType = 'text' | 'image' | 'article' | 'job' | 'event' | 'poll';
export type PostVisibility = 'public' | 'connections' | 'private';

export interface PostAuthor {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  isVerified?: boolean;
}

export interface PostComment {
  id: string;
  author: PostAuthor;
  content: string;
  timestamp: string;
  likes: number;
}

export interface PostMedia {
  type: 'image' | 'video' | 'document';
  url: string;
  alt?: string;
  thumbnail?: string;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  type: PostType;
  timestamp: string;
  likes: number;
  comments: PostComment[];
  shares: number;
  media?: PostMedia[];
  link?: string;
  linkPreview?: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  poll?: {
    question: string;
    options: PollOption[];
    totalVotes: number;
    endDate?: string;
  };
  hashtags?: string[];
  mentions?: string[];
  isPromoted?: boolean;
  isFeatured?: boolean;
  visibility: PostVisibility;
}
