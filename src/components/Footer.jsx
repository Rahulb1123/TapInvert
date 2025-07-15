import React, { useState, useEffect } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';

const footerLinks = [
  {
    title: 'SERVICES',
    links: [
      { label: 'AI Transformation', href: '#' },
      { label: 'Data Transformation', href: '#' },
      { label: 'Digital Transformation', href: '#' },
    ],
  },
  {
    title: 'CASE STUDIES',
    links: [
      { label: 'Spotify for books', href: '#' },
      { label: 'Social reviews platform', href: '#' },
      { label: 'Anomaly Detection', href: '#' },
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      { label: 'Team', href: '#' },
      { label: 'Career', href: '#' },
      { label: (
        <span className="inline-flex items-center gap-1">
          <span className="font-bold text-black">Linked</span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-5 inline-block align-text-bottom" />
        </span>
      ), href: 'https://www.linkedin.com/company/tapbrand/' },
    ],
  },
];

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <KeyboardArrowUp sx={{ fontSize: 28 }} />
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-background pt-12 pb-6 w-full px-0 border-t border-gray-100 overflow-hidden">
      {/* Animated gradient bar */}
      <div className="gradient-bar absolute top-0 left-0 w-full h-1 z-10" />
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1800px] flex flex-col md:flex-row md:items-start md:justify-between gap-10 px-8 relative mx-auto">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <img src="/Logo.png" alt="Tap Logo" className="h-14 w-auto select-none" draggable="false" />
            <span className="text-lg font-medium text-muted"><span className="text-primary font-bold">Fixed. Income. Investments.</span> <span className="font-normal">for your success</span></span>
          </div>
          {/* Footer links */}
          <div className="flex flex-1 justify-between gap-8 md:gap-16">
            {footerLinks.map((col) => (
              <div key={col.title} className="min-w-[150px]">
                <h4 className="text-lg font-bold mb-3 text-text">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-base text-muted hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1"
                        target={link.href === 'https://www.linkedin.com/company/tapbrand/' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>
        <hr className="my-8 border-gray-200 w-full" />
        <div className="w-full max-w-[1800px] text-center text-muted text-base flex flex-col gap-2 px-8 mx-auto">
          <div>
            © 2024 All rights reserved. Tap Partners Pvt Ltd
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
            <a href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-primary transition-colors duration-200">Terms of Use</a>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer; 