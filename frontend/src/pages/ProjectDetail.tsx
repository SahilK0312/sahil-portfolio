import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Layers,
    AlertTriangle,
    BarChart3,
    Wrench,
    Target,
    Lightbulb,
    ArrowUpRight,
} from 'lucide-react';
import { useProject } from '../hooks/usePortfolio';
import { Container } from '../components/shared/Layout';
import { LoadingSpinner, ErrorDisplay } from '../components/shared/Status';

const SectionBlock = ({
    icon,
    label,
    children,
    delay = 0,
}: {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
    delay?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="mb-16"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                {icon}
            </div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.3em]">{label}</h3>
        </div>
        {children}
    </motion.div>
);

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data: project, isLoading, error, refetch } = useProject(slug || '');

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }

    if (error || !project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <ErrorDisplay message="Project not found" onRetry={refetch} />
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{project.title} — Sahil Khatri | Case Study</title>
                <meta name="description" content={project.description} />
                <meta property="og:title" content={`${project.title} — Case Study`} />
                <meta property="og:description" content={project.problem || project.description} />
                {project.image && <meta property="og:image" content={project.image} />}
            </Helmet>

            <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
                {/* Background */}
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(168,85,247,0.08)_0%,_transparent_50%)] pointer-events-none" />

                {/* Nav */}
                <nav className="fixed top-0 left-0 right-0 z-50 py-6">
                    <Container className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <motion.div whileHover={{ x: -4 }} className="p-2 rounded-full glass border border-white/10">
                                <ArrowLeft size={18} />
                            </motion.div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] hidden md:block">Back to Portfolio</span>
                        </Link>
                        <div className="flex items-center gap-3">
                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-all"
                                >
                                    Live App <ExternalLink size={14} />
                                </a>
                            )}
                            {project.github && project.github !== '#' && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full glass border border-white/10 text-neutral-400 hover:text-white transition-all"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                        </div>
                    </Container>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-[0.2em] uppercase border border-purple-500/20">
                                    {project.category}
                                </span>
                                {project.isFeatured && (
                                    <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase border border-yellow-500/20">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                                {project.title}
                            </h1>

                            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed mb-10">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-12">
                                {project.tags?.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-neutral-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Performance Metrics Highlights */}
                            {project.performanceMetrics?.length > 0 && (
                                <div className="glass-card p-6 md:p-8 border-white/5 flex flex-wrap gap-8 md:gap-16">
                                    {project.performanceMetrics.map((metric: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + idx * 0.1 }}
                                        >
                                            <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{metric.value}</div>
                                            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mt-1">{metric.label}</div>
                                            <div className="text-xs text-purple-400 mt-1 font-medium">{metric.improvement}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </Container>
                </section>

                {/* Image */}
                {project.image && (
                    <section className="pb-16">
                        <Container>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-3xl overflow-hidden border border-white/5 bg-neutral-900"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </Container>
                    </section>
                )}

                {/* Deep Dive Content */}
                <section className="py-16">
                    <Container className="max-w-4xl mx-auto">
                        {/* Problem Statement */}
                        {project.problem && (
                            <SectionBlock icon={<Target size={22} />} label="The Problem">
                                <div className="glass-card p-8 border-white/5">
                                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed italic">
                                        "{project.problem}"
                                    </p>
                                </div>
                            </SectionBlock>
                        )}

                        {/* Architecture Decisions */}
                        {project.architectureDecisions?.length > 0 && (
                            <SectionBlock icon={<Layers size={22} />} label="Architecture Decisions" delay={0.1}>
                                <div className="space-y-6">
                                    {project.architectureDecisions.map((decision: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass-card p-6 md:p-8 border-white/5 hover:border-purple-500/20 transition-colors"
                                        >
                                            <h4 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-3">
                                                <Lightbulb size={18} className="text-yellow-400" />
                                                {decision.title}
                                            </h4>
                                            <p className="text-neutral-400 text-sm leading-relaxed">{decision.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </SectionBlock>
                        )}

                        {/* System Design Overview */}
                        {project.systemDesignOverview && (
                            <SectionBlock icon={<Layers size={22} />} label="System Design" delay={0.1}>
                                <div className="glass-card p-8 border-white/5">
                                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-mono">
                                        {project.systemDesignOverview}
                                    </p>
                                </div>
                            </SectionBlock>
                        )}

                        {/* Technical Challenges */}
                        {project.technicalChallenges?.length > 0 && (
                            <SectionBlock icon={<AlertTriangle size={22} />} label="Technical Challenges" delay={0.15}>
                                <div className="space-y-8">
                                    {project.technicalChallenges.map((challenge: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass-card p-6 md:p-8 border-white/5"
                                        >
                                            <h4 className="text-base font-bold text-white mb-4">{challenge.title}</h4>
                                            <div className="space-y-4">
                                                <div>
                                                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] block mb-2">Challenge</span>
                                                    <p className="text-neutral-400 text-sm leading-relaxed">{challenge.description}</p>
                                                </div>
                                                <div className="border-t border-white/5 pt-4">
                                                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em] block mb-2">Solution</span>
                                                    <p className="text-neutral-300 text-sm leading-relaxed">{challenge.solution}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </SectionBlock>
                        )}

                        {/* Performance Metrics */}
                        {project.performanceMetrics?.length > 0 && (
                            <SectionBlock icon={<BarChart3 size={22} />} label="Performance Metrics" delay={0.2}>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {project.performanceMetrics.map((metric: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="glass-card p-6 border-white/5 text-center group hover:border-purple-500/30 transition-all"
                                        >
                                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{metric.value}</div>
                                            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2">{metric.label}</div>
                                            <div className="text-xs text-purple-400 font-medium">{metric.improvement}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </SectionBlock>
                        )}

                        {/* Tech Stack Justification */}
                        {project.techStackJustification?.length > 0 && (
                            <SectionBlock icon={<Wrench size={22} />} label="Tech Stack Justification" delay={0.25}>
                                <div className="space-y-4">
                                    {project.techStackJustification.map((item: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.08 }}
                                            className="glass-card p-5 md:p-6 border-white/5 flex flex-col md:flex-row md:items-center gap-4"
                                        >
                                            <span className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20 whitespace-nowrap w-fit">
                                                {item.tech}
                                            </span>
                                            <p className="text-neutral-400 text-sm leading-relaxed">{item.reason}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </SectionBlock>
                        )}

                        {/* Outcome & Business Impact */}
                        {(project.outcome || project.businessImpact) && (
                            <SectionBlock icon={<Target size={22} />} label="Outcome & Impact" delay={0.3}>
                                <div className="glass-card p-8 md:p-10 border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent pointer-events-none" />
                                    <div className="relative z-10 space-y-6">
                                        {project.outcome && (
                                            <div>
                                                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] block mb-3">Technical Outcome</span>
                                                <p className="text-neutral-200 text-base leading-relaxed">{project.outcome}</p>
                                            </div>
                                        )}
                                        {project.businessImpact && (
                                            <div className="border-t border-purple-500/20 pt-6">
                                                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.2em] block mb-3">Business Impact</span>
                                                <p className="text-neutral-200 text-base leading-relaxed">{project.businessImpact}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SectionBlock>
                        )}

                        {/* Bottom CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center pt-8 pb-16"
                        >
                            <p className="text-neutral-500 text-sm mb-6">Interested in building something similar?</p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link
                                    to="/#contact"
                                    className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all"
                                >
                                    Start a Project <ArrowUpRight size={16} />
                                </Link>
                                <Link
                                    to="/"
                                    className="flex items-center gap-2 px-8 py-3.5 rounded-full glass text-white border border-white/10 font-bold text-sm hover:bg-white/5 transition-all"
                                >
                                    View All Projects
                                </Link>
                            </div>
                        </motion.div>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default ProjectDetail;
