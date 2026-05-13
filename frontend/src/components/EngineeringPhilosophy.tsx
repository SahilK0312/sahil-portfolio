import { motion } from 'framer-motion';
import { Container, Section } from './shared/Layout';

const principles = [
    {
        label: 'Systems Thinking',
        description: 'I architect systems, not just apps. Every component is designed with scalability, maintainability, and performance as first-class concerns.',
    },
    {
        label: 'Performance Obsession',
        description: '60fps is the baseline, not the goal. I profile, measure, and optimize until the user experience feels effortless.',
    },
    {
        label: 'Clean Architecture',
        description: 'Layer separation isn\'t optional — it\'s insurance. Testable business logic, swappable data sources, framework-independent core.',
    },
    {
        label: 'Ship With Confidence',
        description: 'Production-grade means graceful error handling, offline support, and recovery strategies before the first deploy.',
    },
];

const EngineeringPhilosophy = () => {
    return (
        <Section id="philosophy">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main Quote */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.4em] block mb-6">Engineering Philosophy</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
                                I build <span className="text-gradient">systems</span>, <br className="hidden md:block" />
                                not just apps.
                            </h2>
                        </motion.div>
                    </div>

                    {/* Principles Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {principles.map((principle, idx) => (
                            <motion.div
                                key={principle.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="group"
                            >
                                <div className="p-6 md:p-8 glass-card border border-white/5 hover:border-purple-500/30 transition-all duration-500">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 font-black text-sm group-hover:bg-purple-500 group-hover:text-black transition-all duration-300">
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">{principle.label}</h3>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed pl-14">
                                        {principle.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default EngineeringPhilosophy;
