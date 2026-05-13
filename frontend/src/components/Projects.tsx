import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ArrowUpRight, Github, ExternalLink, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Container, Section } from './shared/Layout';
import { Card, Button } from './shared/Base';
import { useProjects } from '../hooks/usePortfolio';
import { LoadingSkeleton } from './shared/Status';
import { projects as fallbackProjects } from '../data/portfolio';

const CATEGORIES = ["All", "Animal Welfare", "Real Estate", "Entertainment", "AI & Lifestyle", "Medical", "Enterprise"];

interface Project {
  _id?: string;
  title: string;
  slug?: string;
  category: string;
  isFeatured: boolean;
  image?: string;
  problem?: string;
  description: string;
  result?: string;
  metrics?: string[];
  tags: string[];
  link?: string;
  github?: string;
}

const FilterChips = ({ active, onChange }: { active: string, onChange: (cat: string) => void }) => (
  <div className="flex overflow-x-auto no-scrollbar justify-center gap-3 mb-10 pb-4 px-4 md:px-0 scroll-smooth">
    {CATEGORIES.map((cat) => (
      <button
        key={cat}
        onClick={() => onChange(cat)}
        className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap border ${
          active === cat 
            ? "bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/20" 
            : "bg-white/5 border-white/10 text-neutral-500 hover:border-white/20 hover:text-neutral-300"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
);

const MetricBadge = ({ label }: { label: string }) => {
  const [icon, ...text] = label.split(' ');
  return (
    <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center gap-2">
      <span className="text-sm">{icon}</span>
      <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{text.join(' ')}</span>
    </div>
  );
};

const FeaturedCard = ({ project }: { project: Project }) => (
  <Card className="group relative overflow-hidden flex flex-col md:flex-row gap-6 p-1 h-auto" hoverLift={false}>
    <div className="md:w-1/2 relative h-56 md:h-auto overflow-hidden rounded-[1.8rem]">
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            {project.image ? (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
            ) : (
                <Code2 size={80} className="text-neutral-800 opacity-20" />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full border border-white/10 text-[10px] uppercase font-black tracking-widest text-purple-400">
                {project.category}
            </div>
        </div>
    </div>

    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.metrics?.map(m => <MetricBadge key={m} label={m} />)}
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>

      <div className="space-y-4 mb-8 overflow-hidden">
        {project.problem && (
          <div>
            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-2 opacity-60">The Challenge</span>
            <p className="text-neutral-400 text-sm italic leading-relaxed">"{project.problem}"</p>
          </div>
        )}
        <div>
          <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest block mb-2 opacity-60">The Outcome</span>
          <p className="text-neutral-200 text-sm font-medium leading-relaxed">{project.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-neutral-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
        {project.slug ? (
          <Link to={`/project/${project.slug}`}>
            <Button variant="primary" className="px-6 py-2.5 text-sm font-semibold flex items-center gap-2">
              View Case Study <ArrowUpRight size={16} />
            </Button>
          </Link>
        ) : (
          <Button href={project.link} variant="primary" className="px-6 py-2.5 text-sm font-semibold flex items-center gap-2">
            View Project <ArrowUpRight size={16} />
          </Button>
        )}
        {project.github && project.github !== '#' && (
          <a href={project.github} className="p-3 glass rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-all">
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
  </Card>
);

const ArchiveCard = ({ project }: { project: Project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="p-6 group h-full border-white/5 hover:border-purple-500/30 transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
          {project.category}
        </div>
        {project.link && project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 group-hover:text-purple-400 transition-colors">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      
      <h4 className="text-base font-semibold mb-2 text-white group-hover:translate-x-1 transition-transform">{project.title}</h4>
      <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
      
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs font-medium text-neutral-500">{tag}</span>
        ))}
      </div>
    </Card>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const { data: apiProjects, isLoading } = useProjects();
  
  // Use API data if available, fallback to static data
  const projectData: Project[] = apiProjects || fallbackProjects;

  const filteredFeatured = useMemo(() => 
    projectData.filter(p => p.isFeatured && (filter === "All" || p.category === filter)), 
    [filter, projectData]
  );

  const filteredArchive = useMemo(() => 
    projectData.filter(p => !p.isFeatured && (filter === "All" || p.category === filter)), 
    [filter, projectData]
  );

  return (
    <Section id="projects">
      <Container>
        <SectionHeader 
            title="Featured Projects" 
            icon={<TrendingUp size={28}/>}
            subtitle="Deep dives into architecting high-performance mobile systems."
        />

        <FilterChips active={filter} onChange={setFilter} />

        {isLoading ? (
          <LoadingSkeleton count={3} />
        ) : (
          <>
            {/* Featured Tier */}
            <div className="space-y-8 mb-20">
              <AnimatePresence mode="popLayout">
                {filteredFeatured.map((p, idx) => (
                  <motion.div
                    key={p.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <FeaturedCard project={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Archive Tier */}
            {filteredArchive.length > 0 && (
              <div className="mt-16">
                <div className="flex flex-col items-center gap-4 mb-8">
                   <h3 className="text-lg font-bold text-neutral-300">More Projects</h3>
                   <div className="h-px w-24 bg-purple-500/50" />
                </div>
                
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredArchive.map((p) => (
                      <ArchiveCard key={p.title} project={p} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
          </>
        )}

        {/* Mini CTA */}
        <div className="mt-24 text-center glass-card p-8 py-12 border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/5 blur-[100px] pointer-events-none group-hover:bg-purple-600/10 transition-all duration-700" />
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Have a specific vision?</h3>
            <p className="text-neutral-400 text-sm mb-8 max-w-2xl mx-auto">
                I help startups architect high-performance Flutter apps from 0 to 1. 
                Let's discuss your product roadmap and engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="#contact" variant="primary" className="px-8 py-3 text-sm font-semibold">
                    Consult Availability
                </Button>
                <Button href="#experience" variant="ghost" className="px-8 py-3 text-sm font-semibold text-neutral-300">
                    View My Roadmap
                </Button>
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
