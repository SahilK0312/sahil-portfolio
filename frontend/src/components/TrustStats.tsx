import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { trustStats } from '../data/portfolio';

const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

const TrustStats = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4 md:px-0">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-card border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8 lg:gap-4 relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-purple-500/5 blur-[120px] pointer-events-none" />

        {trustStats.map((stat, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="flex items-center gap-4 group flex-shrink-0"
            >
              <div className="p-3 md:p-4 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-black transition-all duration-300 flex-shrink-0">
                {React.isValidElement(stat.icon) && React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <div className="flex flex-col flex-shrink-0">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none flex items-center">
                  <Counter value={stat.value} />
                  <span className="text-purple-500">{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm text-neutral-500 uppercase font-semibold tracking-wider whitespace-nowrap mt-1 group-hover:text-neutral-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
            
            {/* Divider for desktop */}
            {idx < trustStats.length - 1 && (
              <div className="hidden lg:block h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent mx-2" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};



export default TrustStats;
