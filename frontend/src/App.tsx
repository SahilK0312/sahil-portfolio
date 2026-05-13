import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import WhyChooseMe from './components/WhyChooseMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import AIWorkflow from './components/AIWorkflow';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import ScrollProgress from './components/ScrollProgress';
import ProjectDetail from './pages/ProjectDetail';

const HomePage = () => (
  <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">
    <Helmet>
      <title>Sahil Khatri — Sr. Flutter Developer | Portfolio</title>
      <meta name="description" content="Senior Flutter Developer with 3.5+ years building scalable, high-performance mobile applications. Specialized in clean architecture, real-time systems, and AI-assisted development." />
      <meta property="og:title" content="Sahil Khatri — Sr. Flutter Developer" />
      <meta property="og:description" content="Engineering high-performance mobile systems with Flutter, Firebase, and real-time architectures." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://sahilkhatri.dev" />
    </Helmet>

    {/* Dynamic Background with subtle motion */}
    <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(168,85,247,0.12)_0%,_transparent_50%),radial-gradient(circle_at_100%_100%,_rgba(236,72,153,0.08)_0%,_transparent_50%)] pointer-events-none" />
    
    {/* Background blobs with ultra-subtle animation */}
    <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none animate-pulse" />
    <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-600/5 blur-[180px] rounded-full pointer-events-none" />

    <ScrollProgress />
    <Navbar />
    
    <main className="relative z-10 space-y-24 pb-20">
      <Hero />
      <EngineeringPhilosophy />
      <WhyChooseMe />
      <Projects />
      <Experience />
      <Skills />
      <AIWorkflow />
      <Achievements />
      <Education />
      <InquiryForm />
    </main>

    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
