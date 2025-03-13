
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PostCreator from '../components/feed/PostCreator';
import PostList from '../components/feed/PostList';
import FeedSidebar from '../components/feed/FeedSidebar';
import FeedFilters from '../components/feed/FeedFilters';
import TrendingTopics from '../components/feed/TrendingTopics';
import FeaturedAccounts from '../components/feed/FeaturedAccounts';
import { Post, PostComment } from '../types/feed';
import { mockedPosts } from '../data/feed-data';
import { useToast } from '@/hooks/use-toast';

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>(mockedPosts);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
    toast({
      title: "Post published!",
      description: "Your post has been shared with your network.",
    });
  };

  const handleLikePost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 } 
        : post
    ));
  };

  const handleCommentPost = (postId: string, comment: string) => {
    // In a real app, we would make an API call here
    const newComment: PostComment = {
      id: Math.random().toString(36).substring(7),
      author: {
        id: "current-user",
        name: "Current User",
        role: "Product Designer",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      content: comment,
      timestamp: "Just now",
      likes: 0,
    };

    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] } 
        : post
    ));

    toast({
      title: "Comment added",
      description: "Your thoughts have been shared on this post.",
    });
  };

  const handleSharePost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, shares: post.shares + 1 } 
        : post
    ));

    toast({
      title: "Post shared",
      description: "This post has been shared with your network.",
    });
  };

  const filteredPosts = posts
    .filter(post => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'featured') return post.isFeatured;
      if (activeFilter === 'jobs') return post.type === 'job';
      if (activeFilter === 'events') return post.type === 'event';
      return post.type === activeFilter;
    })
    .filter(post => 
      searchTerm === '' || 
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.hashtags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ?? false)
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Sidebar - Desktop only */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <FeedSidebar />
            </div>
            
            {/* Main Feed */}
            <div className="w-full md:w-2/4 lg:w-3/5 space-y-6">
              <FeedFilters 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <PostCreator onAddPost={handleAddPost} />
              <PostList 
                posts={filteredPosts} 
                onLike={handleLikePost}
                onComment={handleCommentPost}
                onShare={handleSharePost}
              />
            </div>
            
            {/* Right Sidebar - Desktop only */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5 space-y-6">
              <TrendingTopics />
              <FeaturedAccounts />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feed;
