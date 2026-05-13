import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { education } from '../data/portfolio';
import { Container, Section } from './shared/Layout';
import { Card } from './shared/Base';

const Education = () => {
    return (
        <Section id="education">
            <Container>
                <SectionHeader 
                    title="Academic Record" 
                    icon={<GraduationCap size={28}/>}
                    subtitle="Formal engineering education providing a strong foundation in computer science."
                />
                
                <div className="grid gap-8">
                    {education.map((edu, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="p-6 md:p-8 relative overflow-hidden group border-white/5" hoverLift={false}>
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none translate-x-1/4 -translate-y-1/4">
                                    <GraduationCap size={160} />
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight">{edu.degree}</h3>
                                        <p className="text-purple-400 font-semibold uppercase tracking-wider text-xs">{edu.institution}</p>
                                    </div>
                                    <span className="text-neutral-500 text-xs font-mono block px-3 py-1.5 bg-white/5 whitespace-nowrap w-fit rounded-lg border border-white/10 mt-2 md:mt-0">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-neutral-400 leading-relaxed italic text-sm border-l-2 border-purple-500/30 pl-4 relative z-10">
                                    "{edu.details}"
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Education;
