import { Terminal, Cpu, Layers, Target, Globe, Code2, ExternalLink, Users, Zap, Smartphone, Rocket, CheckCircle } from 'lucide-react';

export const personalInfo = {
  name: "Sahil Khatri",
  title: "Sr. Flutter Developer",
  location: "Ahmedabad, India",
  email: "sahilkhatri312@gmail.com",
  phone: "+91 9106955993",
  about: "Flutter Developer with 3.5+ years of experience building scalable, high-performance mobile applications. Specialized in Flutter, Firebase, REST APIs, and real-time systems.",
  github: "https://github.com/SahilK0312",
  linkedin: "https://www.linkedin.com/in/sahil-khatri-b545971b7/",
};

export const trustStats = [
  { label: "Apps Delivered", value: 12, suffix: "+", icon: <Rocket size={32} /> },
  { label: "Users Impacted", value: 50, suffix: "k+", icon: <Smartphone size={32} /> },
  { label: "Perf. Improvement", value: 75, suffix: "%", icon: <Zap size={32} /> },
  { label: "Clients Served", value: 8, suffix: "+", icon: <CheckCircle size={32} /> }
];

export const trustCards = [
  {
    title: "3.5+ Yrs Flutter Exp.",
    desc: "Extensive experience in Dart & Flutter ecosystem building production-ready apps.",
    icon: <Cpu size={24} />
  },
  {
    title: "Live Stream Expert",
    desc: "Specialist in Agora integration, real-time communication, and low-latency streaming.",
    icon: <Users size={24} />
  },
  {
    title: "Clean Architecture",
    desc: "Ensuring scalable, maintainable, and testable codebases using Riverpod & GetX.",
    icon: <Layers size={24} />
  },
  {
    title: "Fast Delivery",
    desc: "Optimized development workflow ensuring high-quality results in shorter timeframes.",
    icon: <Zap size={24} />
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institution: "Hasmukh Goswami College Of Engineering, Ahmedabad",
    year: "Graduated 2022",
    details: "Focused on core computer science principles, software engineering, and mobile app development."
  }
];

export const experience = [
  {
    company: "CodnestX Tech Dynamics Pvt. Ltd.",
    role: "Sr. Flutter Developer",
    period: "March 2025 – Present",
    desc: "Leading mobile architecture for complex wellness platforms. Optimized app performance by 75% and integrated complex REST APIs and live streaming features."
  },
  {
    company: "Ingenious Minds Lab Solution Pvt Ltd",
    role: "Flutter Developer",
    period: "Sept 2022 – March 2025",
    desc: "Designed and developed dynamic, responsive applications including Makanify and Vista Reels. Worked with REST APIs, social login, and push notifications while significantly improving application performance through optimization."
  },
  {
    company: "Technource",
    role: "Flutter Developer Trainee",
    period: "July 2022 – Sept 2022",
    desc: "Developed and maintained mobile applications like WearHouse and Farm2Biz. Gained deep experience with GetX, Firebase integration, and building responsive UI for logistics and e-commerce platforms."
  }
];

export const skills = {
  technical: [
    { name: "Dart", icon: <Terminal size={18} /> },
    { name: "Flutter", icon: <Cpu size={18} /> },
    { name: "Riverpod", icon: <Layers size={18} /> },
    { name: "GetX", icon: <Target size={18} /> },
    { name: "Firebase/Supabase", icon: <Globe size={18} /> },
    { name: "REST APIs", icon: <Code2 size={18} /> },
    { name: "Stripe/RazorPay", icon: <ExternalLink size={18} /> },
    { name: "AI Assisted Dev", icon: <Zap size={18} /> }
  ],
  soft: ["Architecture Design", "Problem Solving", "Rapid Prototyping", "Team Collaboration"],
  aiTools: ["Antigravity", "Cursor", "Windsurf", "ChatGPT"]
};

export const projects = [
  { 
    title: "Karuna Care", 
    category: "Animal Welfare",
    isFeatured: true,
    image: "/karuna_care_mockup_1771756764961.png",
    problem: "Real-time donation platform for NGOs and animal shelters needing transparent tracking.",
    description: "Developed a live seva platform with low-latency streaming and real-time contribution features.", 
    result: "Transparent donation tracking",
    metrics: ["⚡ Live Streaming", "🐾 Animal Welfare", "📱 Real-time Engagement"],
    tags: ["Flutter", "Agora", "Firebase", "Live Stream"], 
    link: "https://play.google.com/store/apps/details?id=com.karuna.app",
    github: "#"
  },
  { 
    title: "Makanify CRM", 
    category: "Real Estate",
    isFeatured: true,
    image: "/makanify_crm_mockup_1771756783251.png",
    problem: "Brokers and builders needing efficient lead tracking and site visit management.",
    description: "Mobile-first CRM automating lead workflows and real-time dashboards for real estate operations.", 
    result: "Scalable broker workflows",
    metrics: ["🏠 Real Estate", "📈 Lead Tracking", "⚡ Sales Velocity"],
    tags: ["Flutter", "CRM", "Lead Management", "iOS/Android"], 
    link: "https://play.google.com/store/apps/details?id=com.makanify.makanifyApp" 
  },
  { 
    title: "Vista Reels", 
    category: "Entertainment",
    isFeatured: true,
    image: "/vista_reels_mockup_1771756800227.png",
    problem: "Social movie discovery needing high-performance video playback and real-time chat.",
    description: "Short video-based movie discovery platform with WebSocket-based real-time chat integration.", 
    result: "Fluid social interaction",
    metrics: ["🎬 60fps Reels", "💬 Real-time Chat", "📱 Movie Discovery"],
    tags: ["Flutter", "Riverpod", "WebSocket", "Video"], 
    link: "https://play.google.com/store/apps/details?id=com.vistareels.app" 
  },
  {
    title: "Pawrpose",
    category: "AI & Lifestyle",
    isFeatured: true,
    image: "/pawrpose_mockup_1771756815000.png",
    problem: "Pet parents needing AI-driven insights into pet emotions and routine management.",
    description: "AI-powered application for pet emotion analysis, journaling, and intelligent routine tracking.",
    result: "AI-driven pet insights",
    metrics: ["🤖 AI Emotion Detection", "🐾 5k+ Users", "📈 High Engagement"],
    tags: ["Flutter", "AI/ML", "Emotion Tracking", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.pawrpose.app"
  },
  {
    title: "Yuktimed",
    category: "Medical",
    isFeatured: true,
    image: "/yuktimed_mockup_1771756830000.png",
    problem: "Medical professionals needing production-ready tools for dynamic data management.",
    description: "Feature-rich medical platform with REST API integration and optimized UI/UX for performance.",
    result: "Production-grade medical tool",
    metrics: ["🏥 Healthcare", "⚡ Performance Optimized", "📱 Live on Play Store"],
    tags: ["Flutter", "REST API", "Clean Architecture", "Medical"],
    link: "https://play.google.com/store/apps/details?id=com.app.yuktimed"
  },
  {
    title: "FinTrack AI",
    category: "Fintech",
    isFeatured: false,
    description: "AI-powered expense tracker with automated bank statement parsing.",
    tags: ["Flutter", "Python", "ML"],
    link: "#"
  },
  {
    title: "EcoSwap",
    category: "Social",
    isFeatured: false,
    description: "Sustainable product marketplace for community sharing.",
    tags: ["Flutter", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "SafeRoute",
    category: "Enterprise",
    isFeatured: false,
    description: "Internal logistics tracking app for large-scale fleet management.",
    tags: ["Flutter", "Mapbox", "REST"],
    link: "#"
  },
  {
    title: "Karuna NGO Dash",
    category: "Enterprise",
    isFeatured: false,
    description: "Admin dashboard for managing NGO contributions and reports.",
    tags: ["React", "Tailwind", "Firebase"],
    link: "#"
  },
  {
    title: "HealthLink",
    category: "Fintech",
    isFeatured: false,
    description: "Secure patient portal for health insurance claims.",
    tags: ["Flutter", "Webview", "Security"],
    link: "#"
  },
  {
    title: "QuickPay",
    category: "Fintech",
    isFeatured: false,
    description: "UPI-based payment SDK integration example.",
    tags: ["Flutter", "UPI", "Payment"],
    link: "#"
  },
  {
    title: "Aqua Track",
    category: "Enterprise",
    isFeatured: false,
    description: "IoT integration app to monitor smart city water usage in real-time.",
    tags: ["Flutter", "IoT", "Bluetooth"],
    link: "#"
  },
  {
    title: "FitJourney",
    category: "Social",
    isFeatured: false,
    description: "Community-driven workout planner and activity tracker.",
    tags: ["Flutter", "HealthKit", "Firebase"],
    link: "#"
  },
  {
    title: "CryptoView widget",
    category: "Fintech",
    isFeatured: false,
    description: "Home screen widget for real-time cryptocurrency ticker updates.",
    tags: ["Flutter", "Home Widget", "REST API"],
    link: "#"
  },
  {
    title: "DocuScan Pro",
    category: "Enterprise",
    isFeatured: false,
    description: "On-device OCR scanner with offline PDF generation.",
    tags: ["Flutter", "ML Kit", "OCR"],
    link: "#"
  }
];


