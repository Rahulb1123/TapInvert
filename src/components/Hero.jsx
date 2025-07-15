import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';

const HEADER_HEIGHT = 80; // px, adjust if your header height changes

// Floating Symbols Component
const FloatingSymbols = () => {
  const symbols = [
    { 
      icon: <SmartToyIcon sx={{ fontSize: 'inherit' }} />, 
      label: 'AI', 
      delay: 0,
      color: 'text-primary'
    },
    { 
      icon: <StorageIcon sx={{ fontSize: 'inherit' }} />, 
      label: 'Database', 
      delay: 0.5,
      color: 'text-accent'
    },
    { 
      icon: <PsychologyIcon sx={{ fontSize: 'inherit' }} />, 
      label: 'Brain', 
      delay: 1,
      color: 'text-magenta'
    },
    { 
      icon: <CodeIcon sx={{ fontSize: 'inherit' }} />, 
      label: 'Code', 
      delay: 1.5,
      color: 'text-primary'
    },
    { 
      icon: <SpeedIcon sx={{ fontSize: 'inherit' }} />, 
      label: 'Processor', 
      delay: 2,
      color: 'text-accent'
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className={`absolute text-5xl md:text-7xl opacity-20 ${symbol.color}`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: symbol.delay,
            ease: "linear"
          }}
        >
          {symbol.icon}
        </motion.div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const headingVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: [1.2, 0.95, 1],
      opacity: 1,
      transition: {
        duration: 1.1,
        type: 'spring',
        stiffness: 200,
        damping: 12,
      },
    },
  };

  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        minHeight: `calc(120vh - ${HEADER_HEIGHT}px)`,
        paddingTop: HEADER_HEIGHT,
        paddingBottom: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Add FloatingSymbols component */}
      <FloatingSymbols />
      
      <div className="flex flex-col justify-center items-center w-full px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full text-center"
        >
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            Home to your
            <br />
            Fixed Income Investments
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            An exclusive platform for Tap Invest Partners
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-green-400 hover:to-blue-400 transition-colors animate-bounce"
            >
              Get Started
            </motion.button>
          </motion.div>
          </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
