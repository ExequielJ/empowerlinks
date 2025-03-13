
import React from 'react';
import { Post as PostType } from '@/types/feed';
import PostCard from './PostCard';

interface PostListProps {
  posts: PostType[];
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
  onShare: (postId: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onLike, onComment, onShare }) => {
  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-border">
        <h3 className="text-lg font-medium">No posts yet</h3>
        <p className="text-muted-foreground mt-2">
          Be the first to share something with your network!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          post={post} 
          onLike={onLike}
          onComment={onComment}
          onShare={onShare}
        />
      ))}
    </div>
  );
};

export default PostList;
