import React from 'react';

export const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`section-container ${className}`}>
    {children}
  </div>
);

export const Section = ({ id, children, className = "", spacing = "lg" }: { 
  id?: string, 
  children: React.ReactNode, 
  className?: string,
  spacing?: "lg" | "md" | "none"
}) => {
  const paddingY = spacing === "lg" ? "py-24" : spacing === "md" ? "py-16" : "py-0";
  return (
    <section id={id} className={`${paddingY} ${className}`}>
      {children}
    </section>
  );
};
