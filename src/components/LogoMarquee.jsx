import React from 'react';

const logos = [
  '/company1.jpg',
  '/company2.png',
  '/company3.jpg',
  '/company4.jpg',
  '/company5.jpg',
  '/company6.jpg',
  '/company7.jpg',
  '/company8.jpg',
  '/company9.jpg',
  '/company10.jpg',
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-16 bg-white relative">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, white 70%, transparent)'}} />
      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, white 70%, transparent)'}} />
      <div className="relative w-full">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Company logo ${idx + 1}`}
              className="h-40 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              draggable="false"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((src, idx) => (
            <img
              key={logos.length + idx}
              src={src}
              alt={`Company logo duplicate ${idx + 1}`}
              className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee; 