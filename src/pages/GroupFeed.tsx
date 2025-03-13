
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PostCreator from '../components/feed/PostCreator';
import PostList from '../components/feed/PostList';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Users } from 'lucide-react';
import { Post, PostComment } from '../types/feed';
import { mockedPosts } from '../data/feed-data';
import { useToast } from '@/hooks/use-toast';

// Mock group data
const groupData = {
  "women-in-tech-leadership": {
    id: "women-in-tech-leadership",
    name: "Women in Tech Leadership",
    description: "A community of women leaders in technology sharing experiences and opportunities.",
    members: 2845,
    activity: "high",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  "female-founders-hub": {
    id: "female-founders-hub",
    name: "Female Founders Hub",
    description: "Connect with fellow female entrepreneurs and share your startup journey.",
    members: 1532,
    activity: "medium",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  "women-in-data-science": {
    id: "women-in-data-science",
    name: "Women in Data Science",
    description: "Empowering women in the field of data science through knowledge sharing and networking.",
    members: 3217,
    activity: "high",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
};

const GroupFeed = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const { toast } = useToast();
  const group = groupId ? groupData[groupId as keyof typeof groupData] : null;

  useEffect(() => {
    // Filter mocked posts to show only those related to this group
    // In a real app, we would fetch group-specific posts from an API
    const filteredPosts = mockedPosts.filter(post => 
      post.hashtags?.includes(`#${groupId}`) || 
      post.content.toLowerCase().includes(group?.name.toLowerCase() || '')
    );
    
    setPosts(filteredPosts);
    window.scrollTo(0, 0);
  }, [groupId, group?.name]);

  const handleAddPost = (newPost: Post) => {
    // Add hashtag for the group to the post
    const postWithGroupTag = {
      ...newPost,
      hashtags: [...(newPost.hashtags || []), `#${groupId}`]
    };
    
    setPosts([postWithGroupTag, ...posts]);
    toast({
      title: "Post published!",
      description: "Your post has been shared with the group.",
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

  if (!group) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Group Not Found</h2>
              <p className="mb-6">The group you're looking for doesn't exist or has been removed.</p>
              <Link to="/networking">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Networking
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/networking" className="inline-flex items-center mb-6 text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Networking
          </Link>
          
          <Card className="mb-8">
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={group.image} 
                alt={group.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{group.name}</CardTitle>
              <CardDescription className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {group.members.toLocaleString()} members • {group.activity} activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{group.description}</p>
            </CardContent>
          </Card>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Group Discussion</h2>
            <PostCreator onAddPost={handleAddPost} groupContext={group.name} />
            
            {posts.length > 0 ? (
              <PostList 
                posts={posts} 
                onLike={handleLikePost}
                onComment={handleCommentPost}
                onShare={handleSharePost}
              />
            ) : (
              <Card className="p-8 text-center my-6">
                <p className="text-muted-foreground mb-4">No posts in this group yet. Be the first to share something!</p>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GroupFeed;
