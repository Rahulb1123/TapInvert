import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Lorena García',
    title: 'CEO',
    company: 'Rooty',
    avatar: '/lorena.jpg',
    text: `As a non-tech founder of an Irish startup, navigating the mobile app development process was uncharted territory for me. That's when I partnered with LaunchX, and their team became an invaluable ally on this journey. Their team didn't just focus on coding;  `,
    link: '#',
  },
  {
    name: 'Shubham Deva',
    title: 'CEO-Skoob.al ',
    company: '',
    avatar: '/shubham.jpg',
    text: "I was lucky to have found LaunchX very early while building Skoob. Their leadership team acted as true partners who rolled up their sleeves and worked alongside me like co-founders. They provided the much-needed guardrails, ensuring we stayed focused ",
    link: '#',
  },
  {
    name: 'Pawan Singh',
    title: 'Managing Director - SACHA ',
    company: '',
    avatar: '/pawan.jpg',
    text: 'The LaunchX team took true ownership of my startup vision, refining ideas and shaping the roadmap with invaluable insights. Their commitment to transparency and regular progress updates allowed me to stay informed and focus on running my core business. ',
    link: '#',
  },
  {
    name: 'Alan Cronin ',
    title: 'Ca founder - Rooty ',
    company: '',
    avatar: '/alan.jpg',
    text: 'I was looking for more than just someone to build for me; I was looking for a partner, and LaunchX was just that. From day one, Anuraag and Vineet guided and challenged us-not only with our tech stack, but also by drawing on their own startup ',
    link: '#',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setExpanded(false); // Reset expanded state when testimonial changes
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-[#0a192f] to-[#112240]">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-overlay filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-magenta/10 rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hear from our customers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-magenta mx-auto rounded-full" />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-2xl border border-white/10 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-magenta rounded-full blur-lg opacity-50" />
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="relative">
                      <p className={`text-base md:text-lg text-gray-200 mb-4 italic ${expanded ? '' : 'line-clamp-3'}`}>
                        "{testimonials[currentIndex].text}"
                        {!expanded && testimonials[currentIndex].text.length > 180 && (
                          <span 
                            className="text-primary hover:text-accent cursor-pointer ml-1 inline-block"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpanded(true);
                            }}
                          >
                            ...read more
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentIndex].title} {testimonials[currentIndex].company && `- ${testimonials[currentIndex].company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setExpanded(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-primary to-accent w-8'
                  : 'bg-gray-500/50 hover:bg-gray-400/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;