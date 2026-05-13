import { personalInfo } from '../data/portfolio';
import { Container } from './shared/Layout';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-neutral-900 bg-black/40 backdrop-blur-sm relative z-10">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">
                {personalInfo.name.split(' ')[0]} <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
            </h2>
            <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase opacity-60">Architecting Premium Mobile Economies.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-neutral-500 uppercase text-[10px] font-bold tracking-[0.4em]">
            {['About', 'Experience', 'Trust', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <a key={item} href={`#${item === 'Trust' ? 'why-choose-me' : item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                    {item}
                </a>
            ))}
        </div>
      </Container>

      <Container className="mt-20 pt-10 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-neutral-600 text-[10px] font-bold tracking-[0.5em] uppercase">
            © {new Date().getFullYear()} Sahil Khatri. Built for performance.
          </p>
          <p className="text-neutral-700 text-[10px] font-bold tracking-[0.2em] uppercase">
            Strict Architecture Design System v2.0
          </p>
      </Container>
    </footer>
  );
};

export default Footer;
