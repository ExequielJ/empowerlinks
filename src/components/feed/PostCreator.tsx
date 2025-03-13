
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Image, FileText, BarChart, Calendar, MapPin, Smile } from 'lucide-react';
import { Post, PostType } from '../../types/feed';

type PostCreatorProps = {
  onAddPost: (post: Post) => void;
  groupContext?: string;
};

const PostCreator = ({ onAddPost, groupContext }: PostCreatorProps) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    
    // In a real app, we would make an API call here
    setTimeout(() => {
      const newPost: Post = {
        id: Math.random().toString(36).substring(7),
        author: {
          id: "current-user",
          name: "Current User",
          role: "Product Designer",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
        content: content,
        images: [],
        timestamp: "Just now",
        likes: 0,
        comments: [],
        shares: 0,
        hashtags: groupContext ? [`#${groupContext.toLowerCase().replace(/\s+/g, '')}`, '#shetrades'] : ['#shetrades'],
        isFeatured: false,
        type: 'text' as PostType,
        visibility: 'public',
      };
      
      onAddPost(newPost);
      setContent('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Current User" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            <Textarea 
              placeholder={groupContext 
                ? `Share something with the ${groupContext} group...` 
                : "What's on your mind?"}
              className="min-h-24 border-none bg-muted/50 p-3 focus-visible:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="outline" size="sm" className="rounded-full">
                <Image className="h-4 w-4 mr-2" />
                Image
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <FileText className="h-4 w-4 mr-2" />
                Document
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <BarChart className="h-4 w-4 mr-2" />
                Poll
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Calendar className="h-4 w-4 mr-2" />
                Event
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <MapPin className="h-4 w-4 mr-2" />
                Location
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Smile className="h-4 w-4 mr-2" />
                Feeling
              </Button>
              <div className="flex-1 text-right">
                <Button 
                  onClick={handleSubmit} 
                  disabled={!content.trim() || isSubmitting}
                  className="px-6"
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCreator;
