
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPostType } from '../components/blog/BlogPost';
import { CommentType } from '../components/blog/BlogComments';

// Category type
export interface CategoryType {
  id: string;
  name: string;
}

// Blog context type
interface BlogContextType {
  posts: BlogPostType[];
  categories: CategoryType[];
  comments: Record<number, CommentType[]>; // postId -> comments[]
  addComment: (postId: number, comment: Omit<CommentType, 'id' | 'date'>) => void;
  getPostById: (id: number) => BlogPostType | undefined;
  getPostComments: (postId: number) => CommentType[];
  loading: boolean;
}

// Initial data
const initialCategories: CategoryType[] = [
  { id: 'all', name: 'All Posts' },
  { id: 'wcag', name: 'WCAG Guidelines' },
  { id: 'design', name: 'Accessible Design' },
  { id: 'development', name: 'Accessible Development' },
  { id: 'testing', name: 'Testing & Auditing' },
  { id: 'pdf', name: 'PDF Accessibility' }
];

const initialPosts: BlogPostType[] = [
  {
    id: 1,
    title: "Understanding WCAG 2.1 Success Criterion 1.4.3: Contrast (Minimum)",
    excerpt: "A comprehensive breakdown of contrast requirements for text and visual elements to ensure readability for users with low vision.",
    content: `
      <p>Color contrast is one of the most fundamental aspects of web accessibility. When there's not enough contrast between text and its background, content becomes difficult or impossible to read for many users, especially those with visual impairments.</p>
      
      <h2>What WCAG 2.1 Success Criterion 1.4.3 requires:</h2>
      
      <p>The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:</p>
      
      <ul>
        <li><strong>Large Text:</strong> Large-scale text (at least 18pt or 14pt bold) should have a contrast ratio of at least 3:1.</li>
        <li><strong>Incidental:</strong> Text that is part of an inactive user interface component, pure decoration, or not visible to anyone is exempt.</li>
        <li><strong>Logotypes:</strong> Text that is part of a logo or brand name has no minimum contrast requirement.</li>
      </ul>
      
      <h2>Why contrast matters:</h2>
      
      <p>Sufficient color contrast ensures that text remains readable across different devices, lighting conditions, and for people with various types of color vision deficiencies or low vision. By meeting these contrast requirements, you make your content accessible to a much wider audience.</p>
      
      <h2>How to check contrast:</h2>
      
      <p>Several tools can help you verify contrast ratios:</p>
      
      <ul>
        <li>WebAIM's Contrast Checker</li>
        <li>Color Contrast Analyzer</li>
        <li>Browser developer tools (Chrome and Firefox have built-in contrast checkers)</li>
      </ul>
      
      <h2>Tips for maintaining good contrast:</h2>
      
      <ul>
        <li>Avoid placing text on busy backgrounds or images without a solid overlay</li>
        <li>Be cautious with light gray text on white backgrounds</li>
        <li>Test your design with color vision simulators</li>
        <li>Create a style guide that enforces accessible color combinations</li>
      </ul>
      
      <p>Remember that meeting minimum contrast requirements is just that, a minimum. When possible, aim for higher contrast ratios to ensure better readability for all users.</p>
    `,
    image: "https://images.unsplash.com/photo-1452960458368-9addbb85c548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    author: "Maria Chen",
    date: "May 15, 2023",
    readTime: "8 min read",
    categories: ['wcag', 'design'],
    featured: true
  },
  {
    id: 2,
    title: "The Art of Alt Text: Writing Effective Image Descriptions",
    excerpt: "Learn how to write meaningful alternative text that enhances the user experience for screen reader users without being redundant.",
    content: `
      <p>Alternative text (alt text) is a critical component of web accessibility. It provides a textual alternative to non-text content, enabling people who use screen readers to understand images and other visual elements on a webpage.</p>
      
      <h2>The purpose of alt text:</h2>
      
      <p>Alt text serves multiple functions:</p>
      
      <ul>
        <li>It allows screen reader users to understand the content and function of images</li>
        <li>It appears in place of images when images fail to load</li>
        <li>It helps search engines understand and index image content</li>
      </ul>
      
      <h2>Guidelines for writing effective alt text:</h2>
      
      <h3>1. Be specific and concise</h3>
      <p>Describe the image accurately but keep the description brief. Aim for clarity without unnecessary details.</p>
      
      <h3>2. Context matters</h3>
      <p>Consider the image's purpose and context. The same image might need different alt text depending on how it's used.</p>
      
      <h3>3. Don't start with "Image of" or "Picture of"</h3>
      <p>Screen readers already announce that it's an image, so avoid redundancy.</p>
      
      <h3>4. Include text that appears in the image</h3>
      <p>If the image contains text that's important for understanding the content, include it in the alt text.</p>
      
      <h3>5. Empty alt attributes for decorative images</h3>
      <p>If an image is purely decorative and adds no content value, use an empty alt attribute (alt="") to allow screen readers to skip it.</p>
      
      <h2>Examples of good vs. bad alt text:</h2>
      
      <p><strong>Bad:</strong> "Image of a chart"</p>
      <p><strong>Good:</strong> "Bar chart showing website traffic growth from January to June 2023, with a 40% increase in mobile users"</p>
      
      <p><strong>Bad:</strong> "Dog"</p>
      <p><strong>Good:</strong> "Golden retriever puppy playing with a blue ball in a park"</p>
      
      <h2>Testing your alt text:</h2>
      
      <p>A good way to test the effectiveness of your alt text is to turn off images in your browser or use a screen reader to navigate your site. Does the content still make sense? Can you understand what the images were conveying?</p>
      
      <p>Remember, writing good alt text is both an art and a science. With practice, you'll develop an intuition for what information is most relevant to include.</p>
    `,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    author: "James Rodriguez",
    date: "April 22, 2023",
    readTime: "5 min read",
    categories: ['wcag', 'development']
  },
  {
    id: 3,
    title: "Creating Accessible Forms: Best Practices and Common Pitfalls",
    excerpt: "Forms are crucial interaction points. Learn how to make them accessible with proper labels, error handling, and keyboard navigation.",
    content: `
      <p>Forms are the primary means of interaction on many websites, from simple contact forms to complex applications. Ensuring your forms are accessible is critical for allowing all users to interact with your site effectively.</p>
      
      <h2>The foundations of accessible forms:</h2>
      
      <h3>1. Proper labeling</h3>
      <p>Every form control needs a label that clearly describes its purpose. The label should be programmatically associated with the input using the 'for' attribute that matches the input's 'id'.</p>
      
      <pre><code>&lt;label for="email"&gt;Email Address:&lt;/label&gt;
&lt;input type="email" id="email" name="email"&gt;</code></pre>
      
      <h3>2. Logical tab order</h3>
      <p>Users navigating by keyboard should be able to move through your form in a logical sequence, typically from top to bottom, left to right.</p>
      
      <h3>3. Error identification and suggestions</h3>
      <p>When validation errors occur, clearly identify the errors, provide suggestions for correction, and ensure they're announced to screen reader users.</p>
      
      <h3>4. Grouping related controls</h3>
      <p>Use fieldset and legend elements to group related form controls, especially for radio button groups and checkbox groups.</p>
      
      <h2>Common accessibility pitfalls in forms:</h2>
      
      <h3>Placeholder text as labels</h3>
      <p>Placeholders disappear when users start typing, making it easy to forget what the field is for. They also often have poor contrast. Always use proper labels in addition to placeholders.</p>
      
      <h3>Complex CAPTCHAs</h3>
      <p>Image-based CAPTCHAs can be impossible for screen reader users and difficult for users with cognitive disabilities. Consider alternatives like simple math problems, honeypot techniques, or accessible CAPTCHA services.</p>
      
      <h3>Time limits</h3>
      <p>Strict session timeouts can be problematic for users who need more time to complete forms. Provide warnings and options to extend the session.</p>
      
      <h3>Non-descriptive error messages</h3>
      <p>Error messages like "Invalid input" don't provide enough information for users to correct their mistakes. Be specific about what's wrong and how to fix it.</p>
      
      <h2>Advanced techniques:</h2>
      
      <h3>ARIA attributes</h3>
      <p>Use ARIA attributes like aria-required, aria-invalid, and aria-describedby to enhance form accessibility.</p>
      
      <h3>Live regions for dynamic content</h3>
      <p>Use ARIA live regions to announce dynamic content changes, such as form validation messages that appear after submission.</p>
      
      <h3>Custom form controls</h3>
      <p>If you need to create custom form controls, ensure they're fully keyboard accessible and convey their state and purpose to assistive technologies.</p>
      
      <p>By following these guidelines, you can create forms that are not just accessible but also provide a better user experience for everyone.</p>
    `,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    author: "Alex Johnson",
    date: "March 18, 2023",
    readTime: "7 min read",
    categories: ['development', 'design']
  },
];

// Create context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Provider component
export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPostType[]>(initialPosts);
  const [categories] = useState<CategoryType[]>(initialCategories);
  const [comments, setComments] = useState<Record<number, CommentType[]>>({});
  const [loading, setLoading] = useState(false);

  // Initialize with some mock comments
  useEffect(() => {
    setComments({
      1: [
        {
          id: 1,
          author: "Jamie Smith",
          content: "This was really helpful for understanding contrast requirements. I've been struggling with this on my current project.",
          date: new Date(2023, 4, 16) // May 16, 2023
        },
        {
          id: 2,
          author: "Taylor Wong",
          content: "Great breakdown of the WCAG requirements. Would love to see more examples of good and bad contrast in real websites.",
          date: new Date(2023, 4, 17) // May 17, 2023
        }
      ]
    });
  }, []);

  // Get post by ID
  const getPostById = (id: number) => {
    return posts.find(post => post.id === id);
  };

  // Get comments for a post
  const getPostComments = (postId: number) => {
    return comments[postId] || [];
  };

  // Add a comment
  const addComment = (postId: number, comment: Omit<CommentType, 'id' | 'date'>) => {
    setComments(prevComments => {
      const postComments = prevComments[postId] || [];
      const newComment: CommentType = {
        ...comment,
        id: postComments.length ? Math.max(...postComments.map(c => c.id)) + 1 : 1,
        date: new Date()
      };
      
      return {
        ...prevComments,
        [postId]: [...postComments, newComment]
      };
    });
  };

  return (
    <BlogContext.Provider value={{
      posts,
      categories,
      comments,
      addComment,
      getPostById,
      getPostComments,
      loading
    }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the blog context
export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
