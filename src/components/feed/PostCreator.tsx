
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Post, PostType } from '@/types/feed';
import { Image, FileText, Calendar, BarChart3, Link, MessageSquare } from 'lucide-react';

interface PostCreatorProps {
  onAddPost: (post: Post) => void;
}

const PostCreator: React.FC<PostCreatorProps> = ({ onAddPost }) => {
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState<PostType>('text');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // In a real app, we would make an API call here
    const newPost: Post = {
      id: Math.random().toString(36).substring(7),
      author: {
        id: "current-user",
        name: "Current User",
        role: "Product Designer",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      content,
      type: postType,
      timestamp: "Just now",
      likes: 0,
      comments: [],
      shares: 0,
      hashtags: extractHashtags(content),
      mentions: extractMentions(content),
      visibility: "public",
    };
    
    onAddPost(newPost);
    setContent('');
    setPostType('text');
    setIsSubmitting(false);
  };

  const extractHashtags = (text: string): string[] => {
    const hashtagRegex = /#(\w+)/g;
    const matches = text.match(hashtagRegex);
    return matches ? matches.map(tag => tag.substring(1)) : [];
  };

  const extractMentions = (text: string): string[] => {
    const mentionRegex = /@(\w+)/g;
    const matches = text.match(mentionRegex);
    return matches ? matches.map(mention => mention.substring(1)) : [];
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-border">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="https://i.pravatar.cc/150?img=5" 
              alt="Your profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-h-[100px] resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="text" className="w-full" onValueChange={(value) => setPostType(value as PostType)}>
          <TabsList className="w-full justify-start mb-3 bg-transparent p-0 h-auto">
            <TabsTrigger 
              value="text" 
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-1"
            >
              <MessageSquare className="w-4 h-4" /> Post
            </TabsTrigger>
            <TabsTrigger 
              value="image" 
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-1"
            >
              <Image className="w-4 h-4" /> Image
            </TabsTrigger>
            <TabsTrigger 
              value="article" 
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-1"
            >
              <FileText className="w-4 h-4" /> Article
            </TabsTrigger>
            <TabsTrigger 
              value="event" 
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-1"
            >
              <Calendar className="w-4 h-4" /> Event
            </TabsTrigger>
            <TabsTrigger 
              value="poll" 
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex gap-1"
            >
              <BarChart3 className="w-4 h-4" /> Poll
            </TabsTrigger>
          </TabsList>

          <TabsContent value="image" className="mt-0 mb-3">
            <div className="flex items-center gap-2">
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
              />
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={handleFileButtonClick}
              >
                Select image
              </Button>
              <span className="text-sm text-muted-foreground">No file selected</span>
            </div>
          </TabsContent>

          <TabsContent value="article" className="mt-0 mb-3">
            <Input 
              placeholder="Enter article URL" 
              className="mb-2"
            />
          </TabsContent>

          <TabsContent value="event" className="mt-0 mb-3">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input placeholder="Event name" />
              <Input placeholder="Event date" type="date" />
            </div>
            <Input placeholder="Location or virtual link" className="mb-2" />
          </TabsContent>

          <TabsContent value="poll" className="mt-0 mb-3">
            <Input placeholder="Poll question" className="mb-2" />
            <div className="space-y-2 mb-2">
              <Input placeholder="Option 1" />
              <Input placeholder="Option 2" />
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                className="w-full justify-center"
              >
                + Add option
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Poll duration:</span>
              <select className="text-sm border rounded p-1">
                <option>1 day</option>
                <option>3 days</option>
                <option>1 week</option>
                <option>2 weeks</option>
              </select>
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-3" />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={handleFileButtonClick}>
              <Image className="h-4 w-4" />
            </Button>
            <Button type="button" variant="ghost" size="sm">
              <Link className="h-4 w-4" />
            </Button>
            <select className="text-xs border rounded p-1">
              <option value="public">🌎 Public</option>
              <option value="connections">👥 Connections</option>
              <option value="private">🔒 Private</option>
            </select>
          </div>
          <Button 
            type="submit" 
            disabled={!content.trim() || isSubmitting}
            size="sm"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostCreator;
