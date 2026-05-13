import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { trustCards } from '../data/portfolio';
import { Container, Section } from './shared/Layout';
import { Card } from './shared/Base';

const WhyChooseMe = () => {
  return (
    <Section id="why-choose-me" className="bg-black">
      <Container>
        <SectionHeader 
            title="Strategic Edge" 
            icon={<ShieldCheck size={28} className="text-purple-500" />}
            subtitle="The core competitive advantages I bring to every high-stakes mobile project."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trustCards.map((card, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <Card className="p-6 h-full group border-white/5 bg-white/[0.01] hover:bg-white/[0.03] rounded-2xl" hoverLift={true}>
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 mb-6 w-fit group-hover:bg-purple-500 group-hover:text-black transition-all duration-500 shadow-xl shadow-purple-500/0 group-hover:shadow-purple-500/20">
                        {React.isValidElement(card.icon) && React.cloneElement(card.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white tracking-tight leading-snug group-hover:text-purple-400 transition-colors">{card.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                        {card.desc}
                    </p>
                </Card>
            </motion.div>
            ))}
        </div>
      </Container>
    </Section>
  );
};


export default WhyChooseMe;
