import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = "", hoverLift = true }: { children: React.ReactNode, className?: string, hoverLift?: boolean }) => (
  <motion.div
    whileHover={hoverLift ? { y: -10 } : {}}
    className={`glass-card p-8 flex flex-col h-full hover:border-purple-500/50 ${className}`}
  >
    {children}
  </motion.div>
);

export const Button = ({ 
  children, 
  href, 
  variant = "primary", 
  onClick,
  className = "" 
}: { 
  children: React.ReactNode, 
  href?: string, 
  variant?: "primary" | "secondary" | "ghost",
  onClick?: () => void,
  className?: string
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base md:text-lg";
  
  const variants = {
    primary: "bg-white text-black shadow-xl shadow-white/5 hover:bg-neutral-200",
    secondary: "glass text-white border border-white/10 hover:bg-white/5",
    ghost: "text-neutral-400 hover:text-white transition-colors"
  };

  const content = (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button onClick={onClick}>{content}</button>;
};
