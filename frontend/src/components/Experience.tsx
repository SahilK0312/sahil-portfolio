import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';
import { Container, Section } from './shared/Layout';

const Experience = () => {
    return (
        <Section id="experience">
            <Container>
                <SectionHeader 
                    title="Work History" 
                    icon={<Briefcase size={28}/>}
                    subtitle="4+ years of professional engineering contributing to high-performance mobile ecosystems."
                />
                
                <div className="space-y-12">
                    {experience.map((exp, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 border-l border-neutral-800 hover:border-purple-500/50 transition-colors group"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-all" 
                            />
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                                <span className="text-purple-400 text-xs bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mt-2 md:mt-0 font-bold uppercase tracking-wider whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                            
                            <h4 className="text-neutral-400 font-medium mb-4 flex items-center gap-2 text-sm uppercase tracking-wider opacity-80">
                              {exp.company}
                            </h4>
                            
                            <p className="text-neutral-400 leading-relaxed max-w-3xl text-sm md:text-base">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Experience;
