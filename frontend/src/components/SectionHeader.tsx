import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, icon, subtitle, className = "" }: SectionHeaderProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-12 flex flex-col items-center text-center ${className}`}
  >
    <div className="flex flex-col items-center gap-4 mb-4">
        {icon && (
          <div className="p-3 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mb-2">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
    </div>
    {subtitle && <p className="text-neutral-500 text-base max-w-2xl font-light">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
