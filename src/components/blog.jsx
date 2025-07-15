import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'From Roadblocks to Reality: How AI Security Became a Business Imperative',
    date: 'March 21, 2025',
    author: 'Gaurav Nigam',
    image: 'https://launchxlabs.ai/static/img/staticBlogs/roadblock.png',
  },
  {
    title: 'The Encryption Dilemma: Why Developers Avoid It—And Why That Needs to Change',
    date: 'March 18, 2025',
    author: 'Gaurav Nigam',
    image: 'https://launchxlabs.ai/static/img/staticBlogs/encryptionHero.png',
  },
  {
    title: 'The Hidden AI Security Crisis: Why Vector Databases Are the Weakest Link',
    date: 'March 13, 2025',
    author: 'Gaurav Nigam',
    image: 'https://launchxlabs.ai/static/img/staticBlogs/isAiSecure.jpg',
  },
  {
    title: 'Revolutionizing Call Centers: The GenAI Playbook for the Future',
    date: 'December 12, 2024',
    author: 'Gaurav Nigam',
    image: 'https://launchxlabs.ai/static/img/staticBlogs/callCenters.png',
  },
  {
    title: 'When Bold Leaders Ask "Can AI Help?" - A 48-Hour Warning Story',
    date: 'November 20, 2024',
    author: 'Gaurav Nigam',
    image: 'https://launchxlabs.ai/static/img/staticBlogs/BoldLeaders.png',
  },
  {
    title: "Your Company's Memory is Failing",
    date: 'November 14, 2024',
    author: 'Gaurav Nigam',
    image: 'https://launchxlabs.ai/static/img/staticBlogs/companyMemory.png',
  },
];

// Intersection Observer hook for lazy loading images
const LazyImage = ({ src, alt, className, ...props }) => {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={className + (isVisible ? '' : ' bg-gray-200 animate-pulse')}
      {...props}
    />
  );
};

const BlogPostCard = ({ post }) => {
  const cardRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <div
      ref={cardRef}
      className={
        'bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col overflow-hidden border group ' +
        (visible ? 'border-green-500 ring-2 ring-green-300' : 'border-[#e3e8f0]')
      }
      style={{ minHeight: 340, transition: 'border 0.6s, box-shadow 0.6s' }}
    >
      <LazyImage
        src={post.image}
        alt={post.title}
        className="h-40 w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
        draggable="false"
      />
      <div className="flex-1 flex flex-col p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base text-[#22336b]/70 font-medium">{post.date}</span>
          <span className="text-base text-[#22336b] font-bold">{post.author}</span>
        </div>
        <h2 className="text-xl font-bold text-[#22336b] mt-2 mb-1 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[#4f46e5]">{post.title}</h2>
        <p className="text-sm text-[#22336b]/80 mb-2 flex-1 line-clamp-3">{post.excerpt}</p>
      </div>
      {visible && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg animate-bounce z-10">
          In View!
        </div>
      )}
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center px-4 pt-28 pb-12">
      {/* Header Section with Full-Width Background Image */}
      <div className="relative w-full mb-10">
        <div className="absolute inset-0 h-56 md:h-64 w-full -top-10 left-0 z-0 overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/855022728/photo/view-of-the-plateau-soni-kougen-in-japan.jpg?s=612x612&w=0&k=20&c=uAhE4c7B52DPi2r1FmPtfrcV0wZvaQjg8f1B5AsHJXw="
            alt="Blogs background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#22336b]/80 via-[#22336b]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center pt-16 pb-8">
          <h1 className="text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-lg">Blogs</h1>
          <div className="flex justify-center items-center gap-2 text-base text-white/90 font-medium mb-6">
            <Link to="/" className="text-white hover:underline cursor-pointer">Home</Link>
            <span className="mx-1">•</span>
            <span className="text-white font-semibold">Blogs</span>
          </div>
        </div>
      </div>
      {/* Blog Grid */}
      <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <BlogPostCard key={idx} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Blog; 