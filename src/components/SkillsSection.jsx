import React from 'react';
import { ArrowRight } from 'lucide-react'; // Assuming lucide-react is desired for the arrow icon

const SkillsSection = () => {
  return (
    <section className="w-full bg-[#0a192f] text-white py-16 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left side: Text Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Full-stack Artificial Intelligence development skills
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our expertise ranges from ML model training, fine-tuning, AI development, ML Ops, and Chatbot
            Development to Mobile and Web app development
          </p>
          <a
            href="VectorX"
            className="group inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:from-accent hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            LEARN MORE 
            <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right side: Visual Element */}
        <div className="w-full md:w-1/2 min-h-[400px] flex items-center justify-center relative p-8">
          {/* Abstract Design Elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary/30 rounded-full mix-blend-lighten filter blur-2xl opacity-70 animate-float slow" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/30 rounded-full mix-blend-lighten filter blur-2xl opacity-70 animate-float animation-delay-2000 slow" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-magenta/30 rounded-full mix-blend-lighten filter blur-xl opacity-80 animate-float animation-delay-4000" />

          {/* Interconnected Lines/Paths (Abstract) */}
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 800 400">
            <defs>
              <linearGradient id="skillGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#7F5AF0', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#2CB67D', stopOpacity:1}} />
              </linearGradient>
              <linearGradient id="skillGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#2CB67D', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#FF4D9D', stopOpacity:1}} />
              </linearGradient>
            </defs>
            <path d="M 100 200 Q 300 50 500 200 T 700 200" stroke="url(#skillGradient1)" strokeWidth="3" fill="none" />
            <circle cx="100" cy="200" r="10" fill="#7F5AF0" />
            <circle cx="500" cy="200" r="10" fill="#2CB67D" />
            
            <path d="M 200 350 Q 400 250 600 350" stroke="url(#skillGradient2)" strokeWidth="3" fill="none" />
            <circle cx="200" cy="350" r="10" fill="#2CB67D" />
            <circle cx="600" cy="350" r="10" fill="#FF4D9D" />

            <path d="M 700 100 Q 500 0 300 100" stroke="url(#skillGradient1)" strokeWidth="3" fill="none" />
             <circle cx="700" cy="100" r="10" fill="#7F5AF0" />
             <circle cx="300" cy="100" r="10" fill="#2CB67D" />
          </svg>

          {/* Foreground Image */}
          <img 
            src="/robo.png" 
            alt="AI Robot illustration"
            className="relative z-10 w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px] object-contain -mt-28"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 