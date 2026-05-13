import { Award, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Container, Section } from './shared/Layout';
import { Card } from './shared/Base';

const Achievements = () => {
    return (
        <Section id="achievements">
            <Container>
                <SectionHeader 
                    title="Key Achievements" 
                    icon={<Award size={28}/>}
                    subtitle="Quantifiable impact and professional milestones across diverse mobile products."
                />
                
                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                    {[
                        { title: "Performance Wizard", desc: "Successfully optimized Flutter application startup time and runtime efficiency by 75% for enterprise-scale apps." },
                        { title: "Architecture Advocate", desc: "Pioneered the shift to Riverpod & Clean Architecture across all company projects, reducing bug reports by 40%." }
                    ].map((item, idx) => (
                        <Card key={idx} className="p-6 md:p-8 border-white/5 group">
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-black transition-all">
                                    <Target size={20} />
                                </div>
                                {item.title}
                            </h4>
                            <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default Achievements;
