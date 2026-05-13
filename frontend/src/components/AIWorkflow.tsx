import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap, Brain, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Container, Section } from './shared/Layout';
import { Card } from './shared/Base';

const aiWorkflows = [
    {
        tool: 'Antigravity',
        icon: <Bot size={24} />,
        description: 'Full-stack development acceleration with context-aware code generation, architecture planning, and automated refactoring across entire codebases.',
        gains: ['60% faster feature delivery', 'Architecture-level refactoring', 'Cross-file context awareness'],
    },
    {
        tool: 'Cursor',
        icon: <Sparkles size={24} />,
        description: 'IDE-integrated AI for real-time code completion, inline debugging, and context-aware suggestions that understand the entire project structure.',
        gains: ['Real-time code completion', 'Inline debugging', 'Project-aware suggestions'],
    },
    {
        tool: 'Windsurf',
        icon: <Zap size={24} />,
        description: 'Rapid prototyping and exploration of architectural decisions. Used for evaluating trade-offs before committing to implementation patterns.',
        gains: ['Architecture exploration', 'Rapid prototyping', 'Pattern evaluation'],
    },
    {
        tool: 'ChatGPT',
        icon: <Brain size={24} />,
        description: 'System design reasoning, documentation generation, and complex algorithm optimization. Essential for whiteboard-to-code translation.',
        gains: ['System design reasoning', 'Documentation generation', 'Algorithm optimization'],
    },
];

const AIWorkflow = () => {
    return (
        <Section id="ai-workflow">
            <Container>
                <SectionHeader
                    title="AI-Assisted Engineering"
                    icon={<Bot size={28} />}
                    subtitle="How I leverage AI to deliver senior-level engineering output with accelerated velocity."
                />

                {/* Philosophy Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 border border-purple-500/20 relative overflow-hidden mb-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ring-4 ring-green-500/20" />
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.3em]">Active Workflow</span>
                        </div>
                        <p className="text-lg md:text-xl text-neutral-200 leading-relaxed font-medium max-w-3xl">
                            "I don't just use AI as a code generator — I use it as an <span className="text-purple-400 font-bold">engineering multiplier</span>. 
                            AI accelerates my debugging by 3x, validates architectural decisions in minutes instead of hours, 
                            and lets me focus on <span className="text-purple-400 font-bold">system design and product thinking </span> 
                            while handling implementation velocity."
                        </p>
                    </div>
                </motion.div>

                {/* AI Tool Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {aiWorkflows.map((workflow, idx) => (
                        <motion.div
                            key={workflow.tool}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="p-6 md:p-8 h-full group border-white/5 hover:border-purple-500/30">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all duration-300">
                                        {workflow.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white tracking-tight">{workflow.tool}</h3>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{workflow.description}</p>
                                <div className="space-y-2 mt-auto">
                                    {workflow.gains.map((gain) => (
                                        <div key={gain} className="flex items-center gap-3 text-sm">
                                            <ArrowRight size={14} className="text-purple-500 flex-shrink-0" />
                                            <span className="text-neutral-300 font-medium">{gain}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default AIWorkflow;
