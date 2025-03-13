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

// Mock group-specific posts
const groupSpecificPosts: Record<string, Post[]> = {
  "women-in-tech-leadership": [
    {
      id: "wtech1",
      author: {
        id: "user7",
        name: "Dr. Maya Chen",
        role: "CTO",
        company: "HealthTech Innovations",
        avatar: "https://i.pravatar.cc/150?img=44",
        isVerified: true,
      },
      content: "Just finished our Women in Tech Leadership quarterly meetup! So inspired by all the incredible women pushing boundaries in tech. Special thanks to our guest speaker Sarah Johnson for her insights on leading remote engineering teams.",
      type: "text" as PostType,
      timestamp: "2 days ago",
      likes: 78,
      comments: [
        {
          id: "wc1",
          author: {
            id: "user12",
            name: "Emily Rodriguez",
            role: "VP of Engineering",
            avatar: "https://i.pravatar.cc/150?img=23",
          },
          content: "It was such an informative session! Looking forward to implementing some of Sarah's strategies with my team.",
          timestamp: "1 day ago",
          likes: 8,
        }
      ],
      shares: 12,
      hashtags: ["WomenInTech", "Leadership", "TechCommunity", "WomeninTechLeadership"],
      visibility: "public",
    },
    {
      id: "wtech2",
      author: {
        id: "user23",
        name: "Amina Patel",
        role: "Engineering Director",
        company: "CloudScale",
        avatar: "https://i.pravatar.cc/150?img=25",
      },
      content: "Exciting news! Our mentorship program for women in technical leadership roles is now open for applications. We're pairing senior tech leaders with up-and-coming women in the field. Applications close June 30th.",
      type: "event" as PostType,
      timestamp: "3 days ago",
      likes: 132,
      comments: [],
      shares: 45,
      hashtags: ["Mentorship", "WomenInTech", "TechLeadership", "WomeninTechLeadership"],
      visibility: "public",
    }
  ],
  "female-founders-hub": [
    {
      id: "ffh1",
      author: {
        id: "user15",
        name: "Leila Johnson",
        role: "Founder & CEO",
        company: "EcoStyle",
        avatar: "https://i.pravatar.cc/150?img=32",
        isVerified: true,
      },
      content: "Just closed our Series A funding round! $5M to scale our sustainable fashion tech platform. Grateful to our amazing team and investors who believe in our vision of making fashion more sustainable through technology.",
      type: "text" as PostType,
      timestamp: "6 hours ago",
      likes: 215,
      comments: [
        {
          id: "ffc1",
          author: {
            id: "user17",
            name: "Sophia Wong",
            role: "Angel Investor",
            avatar: "https://i.pravatar.cc/150?img=16",
          },
          content: "Congratulations, Leila! Well-deserved success for an incredible product and team.",
          timestamp: "5 hours ago",
          likes: 12,
        }
      ],
      shares: 87,
      hashtags: ["StartupLife", "WomenFounders", "SustainableTech", "FemaleFounders", "FemaleFoundersHub"],
      visibility: "public",
      isFeatured: true,
    },
    {
      id: "ffh2",
      author: {
        id: "user29",
        name: "Female Founders Network",
        role: "Organization",
        avatar: "https://i.pravatar.cc/150?img=39",
        isVerified: true,
      },
      content: "Join our monthly pitch practice session this Friday at 2PM EST. Get feedback on your pitch from experienced founders and investors. Virtual event, open to all members of this group.",
      type: "event" as PostType,
      timestamp: "1 day ago",
      likes: 45,
      comments: [],
      shares: 23,
      hashtags: ["PitchPractice", "StartupAdvice", "FemaleFounders", "FemaleFoundersHub"],
      visibility: "public",
    },
    {
      id: "ffh3",
      author: {
        id: "user31",
        name: "Zara Williams",
        role: "Founder",
        company: "FinTech Solutions",
        avatar: "https://i.pravatar.cc/150?img=27",
      },
      content: "What's your biggest challenge when raising funds as a female founder? I'm gathering insights for my upcoming workshop and would love to hear your experiences.",
      type: "poll" as PostType,
      timestamp: "2 days ago",
      likes: 67,
      comments: [
        {
          id: "ffc2",
          author: {
            id: "user42",
            name: "Nina Patel",
            role: "Co-founder",
            company: "AI Health",
            avatar: "https://i.pravatar.cc/150?img=29",
          },
          content: "Being taken seriously in healthcare tech is my biggest challenge. I've had VCs question my technical background despite having a PhD in computer science.",
          timestamp: "1 day ago",
          likes: 28,
        }
      ],
      shares: 19,
      poll: {
        question: "Biggest fundraising challenge?",
        options: [
          { id: "ffp1", text: "Getting in the door/networking", votes: 86 },
          { id: "ffp2", text: "Being taken seriously", votes: 103 },
          { id: "ffp3", text: "Valuation discussions", votes: 65 },
          { id: "ffp4", text: "Term sheet negotiations", votes: 42 }
        ],
        totalVotes: 296,
        endDate: "2023-07-01T00:00:00Z"
      },
      hashtags: ["FundingAdvice", "FemaleFounders", "VentureCapital", "FemaleFoundersHub"],
      visibility: "public",
    }
  ],
  "women-in-data-science": [
    {
      id: "wds1",
      author: {
        id: "user55",
        name: "Dr. Rebecca Lee",
        role: "Data Science Lead",
        company: "TechGiant",
        avatar: "https://i.pravatar.cc/150?img=33",
        isVerified: true,
      },
      content: "Just published my new research on ethical considerations in AI algorithms. Link to the paper in comments. Would love your thoughts and feedback!",
      type: "text" as PostType,
      timestamp: "4 hours ago",
      likes: 92,
      comments: [
        {
          id: "wdsc1",
          author: {
            id: "user55",
            name: "Dr. Rebecca Lee",
            role: "Data Science Lead",
            avatar: "https://i.pravatar.cc/150?img=33",
          },
          content: "Here's the link to the paper: https://example.com/ethical-ai-research",
          timestamp: "4 hours ago",
          likes: 5,
        }
      ],
      shares: 31,
      hashtags: ["AIEthics", "DataScience", "Research", "WomenInDataScience"],
      visibility: "public",
    },
    {
      id: "wds2",
      author: {
        id: "user61",
        name: "Data Science Conference",
        role: "Organization",
        avatar: "https://i.pravatar.cc/150?img=40",
        isVerified: true,
      },
      content: "Call for speakers! We're looking for women in data science to present at our annual conference in September. Submit your proposal by July 15th.",
      type: "event" as PostType,
      timestamp: "2 days ago",
      likes: 56,
      comments: [],
      shares: 42,
      hashtags: ["DataScienceConference", "WomenSpeakers", "WomenInDataScience"],
      visibility: "public",
    }
  ]
};

const GroupFeed = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const { toast } = useToast();
  const group = groupId ? groupData[groupId as keyof typeof groupData] : null;

  useEffect(() => {
    // Get pre-populated posts for this group
    const groupPosts = groupId && groupSpecificPosts[groupId] ? groupSpecificPosts[groupId] : [];
    
    // Add some general posts from the mocked data that might be relevant
    const filteredGeneralPosts = mockedPosts.filter(post => 
      post.hashtags?.some(tag => 
        tag.toLowerCase().includes(groupId?.toLowerCase() || '') ||
        post.content.toLowerCase().includes(group?.name.toLowerCase() || '')
      )
    );
    
    // Combine group-specific posts with filtered general posts
    const combinedPosts = [...groupPosts, ...filteredGeneralPosts];
    
    // Sort by timestamp (assuming newer posts should appear first)
    // In a real app, we'd parse dates properly
    setPosts(combinedPosts);
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
