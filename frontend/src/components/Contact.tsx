import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MessageCircle, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { Container, Section } from './shared/Layout';
import { Button } from './shared/Base';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

  return (
    <Section id="contact">
      <Container>
        <div className="glass-card p-12 md:p-32 relative overflow-hidden border border-white/5 text-center">
            {/* Background Blob */}
            <div className="bg-purple-600/10 blur-[120px] w-[500px] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" />
            
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
                    Let's scale your <br/>
                    <span className="text-purple-400">vision.</span>
                </h2>
                <p className="text-neutral-400 mb-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Looking for a senior architect or a dedicated team lead? Let’s engineering high-impact solutions together.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <Button href={`mailto:${personalInfo.email}`} variant="primary" className="px-6 py-3 text-sm font-semibold">
                        Schedule a Strategy Call
                    </Button>
                    <Button onClick={copyEmail} variant="secondary" className="px-6 py-3 text-sm font-semibold flex items-center gap-2">
                        {copied ? <Check size={18} className="text-green-500"/> : <Mail size={18}/>}
                        {copied ? "Email Copied" : "Copy Email"}
                    </Button>
                    <Button 
                        href={`https://wa.me/${personalInfo.phone.replace(/\s+/g, '')}`} 
                        variant="secondary" 
                        className="px-6 py-3 text-sm font-semibold !text-[#25D366] !border-[#25D366]/20 flex items-center gap-2"
                    >
                        <MessageCircle size={18}/> WhatsApp
                    </Button>
                </div>
                
                <div className="flex justify-center gap-8 text-neutral-500">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-110"><Github size={24} /></a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-110"><Linkedin size={24} /></a>
                    <a href="#" className="hover:text-white transition-all transform hover:scale-110"><Twitter size={24} /></a>
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
