import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from './shared/Layout';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'AI', href: '#ai-workflow' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'philosophy', 'why-choose-me', 'projects', 'experience', 'skills', 'ai-workflow', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-8'
        }`}
      >
        <Container className="flex justify-center">
          {/* Desktop Nav */}
          <div className="hidden md:flex glass px-6 py-2 rounded-full border border-white/5 items-center gap-2 md:gap-4 relative backdrop-blur-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors ${
                      isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-purple-500/10 border border-purple-500/20 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-3 glass rounded-full border border-white/10 text-white"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </Container>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-8 p-3 glass rounded-full border border-white/10 text-white"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`text-2xl font-bold uppercase tracking-[0.3em] transition-colors ${
                    activeSection === item.href.slice(1) ? 'text-purple-400' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
