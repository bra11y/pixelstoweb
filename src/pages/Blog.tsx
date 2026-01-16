import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Clock, User, ArrowRight, BookOpen, Lightbulb, Code, FileText, TestTube, Accessibility } from 'lucide-react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import { useBlog } from '../context/BlogContext';
import { usePageTitle, PAGE_TITLES } from '../hooks/usePageTitle';
import { slugify } from '../utils/slugify';
import SEO from '../components/SEO';

const BlogPage = () => {
  usePageTitle(PAGE_TITLES.BLOG);

  const { posts, categories } = useBlog();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.some(c => c.id === categoryParam)) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams, categories]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  
  const filteredPosts = posts.filter(post => 
    (selectedCategory === 'all' || post.categories.includes(selectedCategory)) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const categoryIcons: Record<string, React.ReactNode> = {
    'wcag': <Accessibility className="w-5 h-5" />,
    'design': <Lightbulb className="w-5 h-5" />,
    'development': <Code className="w-5 h-5" />,
    'testing': <TestTube className="w-5 h-5" />,
    'pdf': <FileText className="w-5 h-5" />
  };

  return (
    <>
      <SEO 
        title="Web Design Insights & Resources | PixelsToWeb Blog"
        description="Expert articles on web design, website development, and digital design best practices. Learn best practices for creating beautiful, functional websites."
        keywords="web design blog, website development, design articles, Canadian web design, web development tips"
        canonical="https://pixelstoweb.com/blog"
      />
      <Header />
      <main id="main-content" className="bg-[#F7F7F7]">
        {/* Category Navigation */}
        <div className="sticky top-[72px] z-20 bg-[#F7F7F7]/80 backdrop-blur-xl border-b border-black/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex gap-x-6 py-6 justify-center overflow-x-auto px-6 hide-scrollbar">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`whitespace-nowrap text-sm font-medium transition-opacity duration-200 ${
                  selectedCategory === 'all' ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                }`}
              >
                All Posts
              </button>
              {categories.filter(c => c.id !== 'all').map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`whitespace-nowrap text-sm font-medium transition-opacity duration-200 ${
                    selectedCategory === category.id ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-12 pb-20 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black/90 leading-[0.95] tracking-tight mb-6">
                Accessibility
                <br />
                <span className="text-black/30">Insights</span>
              </h1>
              <p className="text-lg text-black/50 max-w-2xl mx-auto mb-10">
                Expert guides and best practices for creating inclusive digital experiences that work for everyone.
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/30 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-transparent rounded-full text-sm focus:border-black/10 focus:outline-none transition-all placeholder:text-black/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchQuery && (
          <section className="pb-16 bg-[#F7F7F7]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Featured Image Card */}
                <Link 
                  to={`/blog/${slugify(featuredPost.title)}`} 
                  className="relative rounded-[32px] overflow-hidden min-h-[480px] group"
                >
                  <img 
                    src={featuredPost.image} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Featured</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm text-white/70 max-w-md line-clamp-2">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </Link>

                {/* Featured Info Card */}
                <div className="rounded-[32px] bg-black p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-sm font-bold text-white/40 uppercase tracking-wider">About This Article</span>
                    <p className="text-xl md:text-2xl text-white/80 mt-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-4 text-sm text-white/50 mb-6">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${slugify(featuredPost.title)}`}
                      className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
                    >
                      Read full article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Cards */}
        {selectedCategory === 'all' && !searchQuery && (
          <section className="py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <h3 className="text-2xl font-bold text-center text-black/80 mb-8">
                Browse by Topic
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.filter(c => c.id !== 'all').map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className="flex flex-col items-start gap-4 p-6 rounded-[32px] bg-[#F7F7F7] hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-black/[0.06] flex items-center justify-center text-black/60">
                      {categoryIcons[category.id] || <BookOpen className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black/80">{category.name}</h4>
                      <p className="text-xs text-black/40 mt-1">
                        {posts.filter(p => p.categories.includes(category.id)).length} articles
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <h3 className="text-2xl font-bold text-center text-black/80 mb-12">
              {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${slugify(post.title)}`}
                    className="group relative rounded-[32px] overflow-hidden min-h-[400px]"
                  >
                    <img 
                      src={post.image} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-10">
                      <div className="flex gap-2 mb-3">
                        {post.categories.slice(0, 2).map((catId, idx) => {
                          const cat = categories.find(c => c.id === catId);
                          return (
                            <span key={idx} className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                              {cat?.name || catId}
                            </span>
                          );
                        })}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white/70 max-w-md line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/60">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-6 h-6 text-black/30" />
                </div>
                <h3 className="text-xl font-bold text-black/80 mb-3">No articles found</h3>
                <p className="text-black/50 mb-6 max-w-md mx-auto">
                  We couldn't find any articles matching your criteria.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    handleCategoryChange('all');
                  }}
                  className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-black/80 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="rounded-[40px] bg-black p-10 md:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Contribute?
              </h3>
              <p className="text-white/50 mb-10 max-w-lg mx-auto">
                Share your accessibility expertise with our community. We're always looking for guest contributors.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FinalCta />
    </>
  );
};

export default BlogPage;
