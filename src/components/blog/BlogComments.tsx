import React, { useState } from 'react';
import { User, Send, MessageSquare } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export interface CommentType {
  id: number;
  author: string;
  content: string;
  date: Date;
  avatar?: string;
}

interface BlogCommentsProps {
  postId: number;
  comments: CommentType[];
  onAddComment: (postId: number, comment: Omit<CommentType, 'id' | 'date'>) => void;
}

const BlogComments: React.FC<BlogCommentsProps> = ({ postId, comments, onAddComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!comment.trim()) {
      setError('Please enter your comment');
      return;
    }
    
    onAddComment(postId, {
      author: name,
      content: comment,
      avatar: undefined
    });
    
    // Reset form
    setName('');
    setComment('');
    setError(null);
  };

  return (
    <div className="border-t border-neutral-200 pt-8">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="text-teal" size={24} />
        <h2 className="text-2xl font-bold text-navy">
          Discussion ({comments.length})
      </h2>
      </div>
      
      {comments.length > 0 ? (
        <div className="space-y-6 mb-10">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-neutral-50 rounded-lg p-6 hover:bg-neutral-100/50 transition-colors">
              <div className="flex items-start gap-4">
                {comment.avatar ? (
                  <img 
                    src={comment.avatar} 
                    alt={`${comment.author}'s avatar`} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-teal-dark text-white flex items-center justify-center flex-shrink-0">
                    <User size={20} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-navy">{comment.author}</h3>
                    <span className="text-sm text-neutral-500">
                    {formatDistanceToNow(comment.date, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 mb-10">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={24} className="text-neutral-400" />
          </div>
          <p className="text-neutral-600 text-lg">No comments yet</p>
          <p className="text-neutral-500">Be the first to share your thoughts!</p>
        </div>
      )}
      
      <div className="bg-neutral-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-navy mb-6">Join the conversation</h3>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6" role="alert">
            <p className="font-medium">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-neutral-700 mb-2">
              Your Comment
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors resize-none"
              placeholder="Share your thoughts on this article..."
            />
          </div>
          
          <div className="flex justify-end">
          <button 
            type="submit" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy/90 transition-colors focus:ring-2 focus:ring-navy focus:ring-offset-2"
          >
            Post Comment
              <Send size={16} />
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogComments;
