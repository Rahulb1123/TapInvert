import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Close, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const dropdownData = {
  SERVICES: [
    { label: 'AI Transformation', href: '#ai-transformation' },
    { label: 'Data Transformation', href: '#data-transformation' },
    { label: 'Digital Transformation', href: '#digital-transformation' },
  ],
  'CASE STUDIES': [
    { label: 'Spotify for Books', href: '#spotify-for-books' },
    { label: 'Social Reviews Platform', href: '#social-reviews' },
    { label: 'Anomaly Detection', href: '#anomaly-detection' },
  ],
  'ABOUT US': [
    { label: 'Team', href: '/Team' },
    { label: 'Careers', href: '/career' },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'APIS', href: '/vectorx' },
    { name: 'SERVICES', href: '#services', dropdown: true },
    { name: 'CASE STUDIES', href: '#case-studies', dropdown: true },
    { name: 'ABOUT US', href: '#about', dropdown: true },
    { name: 'BLOGS', href: '/blog' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <div className="gradient-bar fixed w-full z-[60] top-0 left-0" />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/70 shadow-2xl backdrop-blur-xl border-b border-gray-100' : 'bg-white/40 backdrop-blur-xl'
        } rounded-b-2xl`}
        style={{
          boxShadow: scrolled ? '0 8px 32px 0 rgba(127, 90, 240, 0.10)' : '0 2px 8px 0 rgba(44, 182, 125, 0.04)',
        }}
      >
        <div className="container flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Link to="/" className="flex items-center gap-2">
              <img src="/Logo.png" alt="Tap Invest Partners Logo" className="h-20 w-auto select-none" draggable="false" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center"
                onMouseEnter={() => item.dropdown && setDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setDropdown(null)}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`uppercase tracking-wide font-semibold px-2 py-2 transition-all duration-200 relative rounded-xl text-text hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary shadow-sm`}
                  >
                    {item.name}
                  </Link>
                ) : item.name === 'BLOGS' ? (
                  <Link
                    to={item.href}
                    className={`uppercase tracking-wide font-semibold px-2 py-2 transition-all duration-200 relative rounded-xl text-text hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary shadow-sm`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.10 }}
                    className={`uppercase tracking-wide font-semibold px-2 py-2 transition-all duration-200 relative rounded-xl
                      ${item.highlight ? 'text-magenta font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-text'}
                      ${item.dropdown ? 'flex items-center gap-1' : ''}
                      hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary shadow-sm`}
                    style={item.highlight ? { letterSpacing: '0.08em' } : {}}
                  >
                    {item.name}
                    {item.dropdown && <ExpandMore fontSize="small" className="-mr-1" />}
                  </motion.a>
                )}
                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && dropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-3 w-60 rounded-2xl bg-surface/95 shadow-2xl border border-gray-100 py-2 z-50 backdrop-blur-xl"
                    >
                      {dropdownData[item.name].map((drop) => (
                        <a
                          key={drop.label}
                          href={drop.href}
                          className="block px-5 py-3 text-text hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary font-medium transition-all duration-200 rounded-xl"
                        >
                          {drop.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-magenta focus:outline-none"
            >
              {isOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-4 pb-4 pt-2 bg-surface/95 backdrop-blur-lg shadow-xl rounded-b-2xl border-b border-gray-200"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`uppercase tracking-wide font-semibold px-3 py-2 rounded-xl transition-all duration-200 text-text hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary flex items-center justify-between`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : item.name === 'BLOGS' ? (
                  <Link
                    to={item.href}
                    className={`uppercase tracking-wide font-semibold px-3 py-2 rounded-xl transition-all duration-200 text-text hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary flex items-center justify-between`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`uppercase tracking-wide font-semibold px-3 py-2 rounded-xl transition-all duration-200 ${item.highlight ? 'text-magenta bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-text'} hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary flex items-center justify-between`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.dropdown && <ExpandMore fontSize="small" />}
                  </a>
                )}
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="pl-4">
                    {dropdownData[item.name].map((drop) => (
                      <a
                        key={drop.label}
                        href={drop.href}
                        className="block px-3 py-2 text-text hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary font-medium transition-all duration-200 rounded-xl"
                        onClick={() => setIsOpen(false)}
                      >
                        {drop.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar; 