
import React, { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Post, PostComment } from '@/types/feed';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  MoreHorizontal, 
  ChevronDown, 
  ChevronUp,
  Check,
  ExternalLink,
  Calendar
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: string) => void;
  onShare: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment, onShare }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(post.comments.length > 0);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    onComment(post.id, newComment);
    setNewComment('');
  };

  const renderPostMedia = () => {
    if (!post.media || post.media.length === 0) return null;
    
    return (
      <div className="mt-3">
        {post.media.map((media, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            {media.type === 'image' && (
              <img 
                src={media.url} 
                alt={media.alt || 'Post image'} 
                className="w-full h-auto object-cover max-h-[400px]"
              />
            )}
            {media.type === 'video' && (
              <video 
                src={media.url} 
                controls 
                className="w-full"
                poster={media.thumbnail}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderLinkPreview = () => {
    if (!post.linkPreview) return null;
    
    return (
      <a 
        href={post.linkPreview.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-3 block border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
      >
        <div className="flex flex-col md:flex-row">
          {post.linkPreview.image && (
            <div className="md:w-1/3 h-[150px] overflow-hidden">
              <img 
                src={post.linkPreview.image} 
                alt={post.linkPreview.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4 flex-1">
            <h3 className="font-medium text-foreground">{post.linkPreview.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{post.linkPreview.description}</p>
            <div className="flex items-center text-xs text-muted-foreground mt-2">
              <ExternalLink className="h-3 w-3 mr-1" />
              {new URL(post.linkPreview.url).hostname}
            </div>
          </div>
        </div>
      </a>
    );
  };

  const renderPoll = () => {
    if (!post.poll) return null;
    
    return (
      <div className="mt-4 border rounded-lg p-4">
        <h3 className="font-medium mb-3">{post.poll.question}</h3>
        <div className="space-y-3">
          {post.poll.options.map((option) => {
            const percentage = Math.round((option.votes / post.poll.totalVotes) * 100);
            
            return (
              <div key={option.id} className="space-y-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border flex items-center justify-center">
                      {percentage > 30 && <Check className="h-3 w-3" />}
                    </div>
                    <span className="text-sm">{option.text}</span>
                  </div>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
                <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-xs text-muted-foreground mt-3">
          {post.poll.totalVotes} votes • 
          {post.poll.endDate && (
            <span> Ends {formatDistanceToNow(new Date(post.poll.endDate), { addSuffix: true })}</span>
          )}
        </div>
      </div>
    );
  };

  const renderPostTypeIndicator = () => {
    switch (post.type) {
      case 'job':
        return (
          <Badge variant="outline" className="mb-2 border-blue-300 text-blue-600 bg-blue-50">
            <Briefcase className="h-3 w-3 mr-1" />
            Job Opportunity
          </Badge>
        );
      case 'event':
        return (
          <Badge variant="outline" className="mb-2 border-purple-300 text-purple-600 bg-purple-50">
            <Calendar className="h-3 w-3 mr-1" />
            Event
          </Badge>
        );
      default:
        return null;
    }
  };

  const renderPostContent = () => {
    // Parse content for hashtags and mentions
    const contentWithLinks = post.content
      .replace(/#(\w+)/g, '<a href="#" class="text-primary hover:underline">#$1</a>')
      .replace(/@(\w+)/g, '<a href="#" class="text-primary hover:underline">@$1</a>');
    
    return (
      <div 
        className="text-sm md:text-base" 
        dangerouslySetInnerHTML={{ __html: contentWithLinks }}
      />
    );
  };

  return (
    <Card className={post.isFeatured ? 'border-primary/30 bg-primary/5 shadow-md' : ''}>
      {post.isFeatured && (
        <div className="bg-primary/10 text-primary text-xs py-1 px-3 text-center font-medium">
          Featured Post
        </div>
      )}
      <CardHeader className="flex flex-row items-start gap-3 p-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {post.author.isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-[2px]">
              <Check className="h-3 w-3" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm md:text-base flex items-center">
                {post.author.name}
                {post.author.isVerified && (
                  <Check className="h-3 w-3 text-primary ml-1" />
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                {post.author.role}
                {post.author.company && ` at ${post.author.company}`}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-xs text-muted-foreground">{post.timestamp}</div>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {renderPostTypeIndicator()}
        {renderPostContent()}
        {renderPostMedia()}
        {renderLinkPreview()}
        {renderPoll()}
        
        {post.hashtags && post.hashtags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {post.hashtags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-0 flex flex-col">
        <div className="px-4 py-2 flex justify-between text-xs text-muted-foreground">
          <div>
            {post.likes > 0 && (
              <span>{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
            )}
          </div>
          <div>
            {post.comments.length > 0 && (
              <button 
                onClick={() => setShowComments(!showComments)}
                className="hover:underline"
              >
                {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}
              </button>
            )}
            {post.shares > 0 && (
              <span className="ml-2">{post.shares} {post.shares === 1 ? 'share' : 'shares'}</span>
            )}
          </div>
        </div>
        
        <Separator />
        
        <div className="p-1 flex justify-around">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 text-muted-foreground hover:text-primary hover:bg-primary/5"
            onClick={() => onLike(post.id)}
          >
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 text-muted-foreground hover:text-primary hover:bg-primary/5"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Comment
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 text-muted-foreground hover:text-primary hover:bg-primary/5"
            onClick={() => onShare(post.id)}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
        
        {showComments && (
          <div className="px-4 py-2 bg-muted/30">
            {post.comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
            
            <form onSubmit={handleSubmitComment} className="mt-3 flex gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://i.pravatar.cc/150?img=5" 
                  alt="Your profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Input
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="text-sm py-1 h-auto bg-background"
              />
              <Button type="submit" size="sm" disabled={!newComment.trim()}>
                Post
              </Button>
            </form>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

const CommentItem: React.FC<{ comment: PostComment }> = ({ comment }) => {
  return (
    <div className="py-2 flex gap-2">
      <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src={comment.author.avatar} 
          alt={comment.author.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="bg-background rounded-xl p-2 text-sm">
          <div className="font-medium text-xs">{comment.author.name}</div>
          <div>{comment.content}</div>
        </div>
        <div className="flex items-center mt-1 text-xs text-muted-foreground">
          <button className="hover:text-foreground">Like</button>
          <span className="mx-2">•</span>
          <button className="hover:text-foreground">Reply</button>
          <span className="mx-2">•</span>
          <span>{comment.timestamp}</span>
          {comment.likes > 0 && (
            <>
              <span className="mx-2">•</span>
              <span>{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
