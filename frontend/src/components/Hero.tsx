import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import TrustStats from './TrustStats';
import { Container, Section } from './shared/Layout';
import { Button } from './shared/Base';

const Hero = () => {
  return (
    <Section id="about" className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative overflow-hidden" spacing="none">
      <Container className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 w-full"
        >
          <div className="flex flex-col items-center gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase glass border border-purple-500/20">
                Top Rated Flutter Engineering
              </span>
              <div className="flex items-center gap-6 text-neutral-500 text-sm">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-purple-500"/> {personalInfo.location}</span>
                  <span className="flex items-center gap-2"><Briefcase size={16} className="text-purple-500"/> Sr. Flutter Engineer</span>
              </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            {personalInfo.name.split(' ')[0]} <span className="text-purple-400">{personalInfo.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.about}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button href="#projects" variant="primary" className="px-6 py-2.5 text-sm font-semibold">
              View Case Studies
            </Button>
            <Button href="#contact" variant="secondary" className="px-6 py-2.5 text-sm font-semibold">
              Start a Project
            </Button>
          </div>

          <TrustStats />
        </motion.div>
      </Container>

      <motion.a
        href="#experience"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ChevronDown className="text-neutral-500" />
      </motion.a>
    </Section>
  );
};

export default Hero;
