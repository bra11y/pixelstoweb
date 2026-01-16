import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { slugify } from '../../utils/slugify';

export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  featured?: boolean;
}

interface BlogPostProps {
  post: BlogPostType;
  categories: {id: string, name: string}[];
  featured?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, categories, featured = false }) => {
  if (featured) {
    return (
      <div className="bg-gradient-to-br from-teal to-teal-dark rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 p-6 md:p-10 text-white order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold mb-4 backdrop-blur-sm uppercase tracking-wide">
              Featured Article
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading leading-tight">{post.title}</h2>
            <p className="text-white/90 mb-6 text-base leading-relaxed">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center mb-6 gap-4 text-sm">
              <div className="flex items-center">
                <User size={14} className="text-white/70 mr-2" />
                <span className="text-white/80">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="text-white/70 mr-2" />
                <span className="text-white/80">{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="text-white/70 mr-2" />
                <span className="text-white/80">{post.readTime}</span>
              </div>
            </div>
            
            <Link 
              to={`/blog/${slugify(post.title)}`} 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-teal font-bold transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:scale-105"
            >
              Read Full Article
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="lg:w-2/5 order-1 lg:order-2">
            <img 
              src={post.image} 
              alt="" 
              className="w-full h-48 lg:h-full object-cover"
              aria-hidden="true"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Link to={`/blog/${slugify(post.title)}`} className="group block h-full">
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden border border-neutral-100">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={post.image} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            aria-hidden="true"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((categoryId, idx) => {
            const category = categories.find(c => c.id === categoryId);
            return (
                <span key={idx} className="px-2 py-1 bg-teal/10 text-teal text-xs font-medium rounded-md">
                {category?.name || categoryId}
              </span>
            );
          })}
        </div>
        
          <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-teal transition-colors duration-300 font-heading line-clamp-2">{post.title}</h2>
          <p className="text-neutral-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
        
          <div className="flex items-center justify-between text-xs text-neutral-500 mt-auto pt-3 border-t border-neutral-100">
            <div className="flex items-center gap-3">
          <div className="flex items-center">
                <User size={12} className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex items-center text-teal font-medium group-hover:gap-2 gap-1 transition-all duration-300">
              <span>Read More</span>
              <ArrowRight size={12} />
          </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPost;
