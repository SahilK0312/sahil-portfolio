import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';
import { Container, Section } from './shared/Layout';
import { Card } from './shared/Base';

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader 
            title="Expertise" 
            icon={<Terminal size={28}/>}
            subtitle="Specialized technical stack focused on scalable architecture and low-latency systems."
        />
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-purple-500/50"></span>
              Technical Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border border-transparent">
              {skills.technical.map((skill, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="h-full"
                >
                    <Card className="p-4 items-center text-center group border-white/5 hover:border-purple-500/30">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all mb-3">
                            {React.isValidElement(skill.icon) && React.cloneElement(skill.icon as React.ReactElement<any>, { size: 24 })}
                        </div>
                        <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase">{skill.name}</span>
                    </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-purple-500/50"></span>
              AI-Assisted Workflow
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.aiTools?.map((tool, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                >
                    <Card className="p-4 flex-row items-center gap-4 border-white/5 hover:border-purple-500/30">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse ring-4 ring-purple-500/20" />
                        <span className="text-xs font-bold text-neutral-300 tracking-wider uppercase">{tool}</span>
                    </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-8">
                <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-4 mb-8">
                  <span className="w-8 h-px bg-purple-500/50"></span>
                  Soft Strengths
                </h3>
                <div className="space-y-4">
                  {skills.soft.map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                        <Card className="p-5 justify-between flex-row items-center border-white/5" hoverLift={false}>
                            <span className="text-neutral-300 font-medium tracking-wide text-base">{skill}</span>
                            <div className="flex gap-1.5">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
                                    />
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
