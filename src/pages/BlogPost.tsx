import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Bookmark } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import BlogComments from '../components/blog/BlogComments';
import NewsletterSignup from '../components/NewsletterSignup';
import { useBlog } from '../context/BlogContext';
import { usePageTitle, createPageTitle } from '../hooks/usePageTitle';
import { slugify } from '../utils/slugify';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { posts, categories, getPostComments, addComment } = useBlog();
  
  // Find post by slug
  const post = posts.find(p => slugify(p.title) === slug);
  const comments = post ? getPostComments(post.id) : [];
  
  // Set dynamic page title based on post
  usePageTitle(post ? createPageTitle(post.title, "Blog") : "Blog Post | PixelsToWeb");
  
  useEffect(() => {
    // If post not found, redirect to blog listing
    if (!post && slug) {
      navigate('/blog', { replace: true });
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, slug, navigate]);
  
  if (!post) return null;

  // Sanitize blog content to prevent XSS attacks
  const sanitizedContent = useMemo(() => {
    if (!post.content) return '';
    return DOMPurify.sanitize(post.content, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'blockquote', 'code', 'pre', 'img', 'br', 'hr', 'span', 'div'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
      ALLOW_DATA_ATTR: false,
    });
  }, [post.content]);

  // Create article schema markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "PixelsToWeb",
      "url": "https://pixelstoweb.com"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "PixelsToWeb",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pixelstoweb.com/images/PTW-re.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pixelstoweb.com/blog/${slug}`
    },
    "inLanguage": "en-US"
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Helmet>
        <title>{post.title} | PixelsToWeb Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://pixelstoweb.com/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://pixelstoweb.com/blog/${slug}`} />
        <meta property="article:author" content="PixelsToWeb" />
        <meta property="article:published_time" content={post.date} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-neutral-600 hover:text-navy transition-colors group"
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to articles
            </Link>
          </div>
            
          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((categoryId, idx) => {
                  const category = categories.find(c => c.id === categoryId);
                  return (
                  <Link
                    key={idx}
                    to={`/blog?category=${categoryId}`}
                    className="px-3 py-1 bg-teal/10 text-teal text-sm font-medium rounded-full hover:bg-teal/20 transition-colors"
                  >
                      {category?.name || categoryId}
                  </Link>
                  );
                })}
              </div>
              
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              {post.title}
            </h1>
              
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6 text-neutral-600">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="p-2 text-neutral-500 hover:text-navy hover:bg-white rounded-full transition-colors">
                  <Share2 size={18} />
                </button>
                <button className="p-2 text-neutral-500 hover:text-navy hover:bg-white rounded-full transition-colors">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>
          </div>
        
          {/* Featured Image - Smaller Size */}
          <div className="mb-12">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
          </div>
        
          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12">
              <div 
              className="prose prose-lg max-w-none 
                         prose-headings:text-navy prose-headings:font-bold prose-headings:tracking-tight
                         prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
                         prose-a:text-teal prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                         prose-li:text-neutral-700 prose-li:leading-relaxed
                         prose-blockquote:border-l-4 prose-blockquote:border-teal prose-blockquote:bg-teal/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                         prose-code:bg-neutral-100 prose-code:text-navy prose-code:px-2 prose-code:py-1 prose-code:rounded
                         prose-pre:bg-neutral-900 prose-pre:text-white
                         prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
          </div>
              
          {/* Tags Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
            <div className="flex items-center flex-wrap gap-3">
              <div className="flex items-center gap-2 text-neutral-700 font-medium">
                <Tag size={16} />
                <span>Related Topics:</span>
              </div>
                  {post.categories.map((categoryId, idx) => {
                    const category = categories.find(c => c.id === categoryId);
                    return (
                      <Link 
                        key={idx} 
                        to={`/blog?category=${categoryId}`} 
                    className="px-4 py-2 bg-neutral-100 hover:bg-teal/10 text-neutral-700 hover:text-teal font-medium rounded-lg transition-colors"
                      >
                        {category?.name || categoryId}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
          {/* Comments Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <BlogComments 
                postId={post.id}
                comments={comments}
                onAddComment={addComment}
              />
            </div>
        </article>
        
        {/* Newsletter CTA */}
        <section className="py-16 bg-white border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup 
              title="Enjoyed this article?"
              description="Subscribe to get more insights on digital accessibility delivered to your inbox."
            />
          </div>
        </section>
      </main>
      <FinalCta />
    </div>
  );
};

export default BlogPostPage;
