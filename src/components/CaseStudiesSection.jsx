import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FloatingShape = ({ shape, className }) => {
  const randomDuration = Math.random() * 20 + 15; // Between 15-35 seconds
  const randomDelay = Math.random() * -20; // Random start position in the animation

  return (
    <motion.div
      className={`absolute opacity-20 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear",
        delay: randomDelay,
      }}
    >
      {shape}
    </motion.div>
  );
};

const caseStudies = [
  {
    title: 'Building "Spotify for books" in 90 days, a B2C mobile app for skoob.ai',
    image: 'https://launchxlabs.ai/static/img/skoob.jpg',
    link: 'https://launchxlabs.ai/casestudies/spotify-for-books',
  },
  {
    title: 'Hyperlocal, responsive web-app for a social reviews platform',
    image: 'https://launchxlabs.ai/static/img/hyperlocal.jpg',
    link: '#',
  },
  {
    title: 'Anomaly Detection for industrial machineries',
    image: 'https://launchxlabs.ai/static/img/anomalyDetection.jpg',
    link: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.7, y: -80 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 12 }
  }
};

const CaseStudiesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="w-full pt-20 pb-20 bg-gradient-to-b from-white to-[#f8f9fc] relative overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape
        shape={
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="currentColor" />
          </svg>
        }
        className="text-blue-500 top-20 left-[10%]"
      />
      <FloatingShape
        shape={
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="currentColor" />
          </svg>
        }
        className="text-blue-500 top-40 right-[15%]"
      />
      <FloatingShape
        shape={
          <svg width="60" height="52" viewBox="0 0 40 35" fill="none">
            <polygon points="20,0 40,35 0,35" fill="currentColor" />
          </svg>
        }
        className="text-blue-500 bottom-20 left-[20%]"
      />
      <FloatingShape
        shape={
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="currentColor" />
          </svg>
        }
        className="text-blue-500 bottom-40 right-[25%]"
      />
      <FloatingShape
        shape={
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="10" fill="none" />
          </svg>
        }
        className="text-blue-500 top-[30%] left-[30%]"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#181945] mb-14">
          Case Studies
        </h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {caseStudies.map((study, idx) => (
            <motion.a
              key={idx}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group block rounded-3xl overflow-hidden shadow-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-primary/40"
            >
              <div className="relative overflow-hidden h-56 md:h-64 lg:h-72">
                <img
                  src={study.image}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col justify-between h-36">
                <h3 className="text-lg md:text-xl font-semibold text-[#181945] group-hover:text-primary transition-colors duration-300 line-clamp-3">
                  {study.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 