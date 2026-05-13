import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import Project from '../models/project.model';
import Experience from '../models/experience.model';
import Skill from '../models/skill.model';
import User from '../models/user.model';

dotenv.config({ path: path.join(__dirname, '../../.env') });

// ═══════════════════════════════════════════════════════════════
// PROJECTS — Full Case Study Data
// ═══════════════════════════════════════════════════════════════
const projects = [
    {
        title: 'Karuna Care',
        slug: 'karuna-care',
        category: 'Animal Welfare',
        isFeatured: true,
        image: '/karuna_care_mockup_1771756764961.png',
        problem: 'Animal shelters and NGOs lacked a transparent, real-time donation platform. Donors had no visibility into how their contributions were being used, and live seva events had no digital presence.',
        description: 'Developed a live seva platform with low-latency Agora streaming, real-time contribution tracking, and transparent donation management for NGOs and animal shelters.',
        result: 'Transparent donation tracking with real-time accountability',
        metrics: ['⚡ Live Streaming', '🐾 Animal Welfare', '📱 Real-time Engagement'],
        tags: ['Flutter', 'Agora', 'Firebase', 'Live Stream'],
        architectureDecisions: [
            {
                title: 'Why Agora over Twilio/WebRTC?',
                description: 'Agora provided sub-200ms latency for live streaming with built-in CDN distribution. Raw WebRTC would require building our own signaling server and TURN/STUN infrastructure. Twilio was 3x the cost for similar quality.',
            },
            {
                title: 'Why Riverpod over GetX?',
                description: 'The app required complex state interdependencies between live stream status, donation tracking, and user authentication. Riverpod\'s provider scoping and compile-time safety prevented state leaks that GetX would allow.',
            },
        ],
        systemDesignOverview: 'Event-driven architecture: Firebase Realtime Database for live donation updates → Agora SDK for video streaming → Cloud Functions for donation verification → Firestore for persistent storage. Optimistic UI updates with eventual consistency.',
        technicalChallenges: [
            {
                title: 'Live stream latency on low-bandwidth devices',
                description: 'Rural areas in India have 2G/3G connectivity. Initial Agora integration showed 3-5 second delays.',
                solution: 'Implemented adaptive bitrate streaming with Agora\'s dual-stream mode. Low-quality fallback stream at 180p for poor connections, auto-upgrading when bandwidth improves. Reduced perceived latency to under 500ms.',
            },
            {
                title: 'Real-time donation counter synchronization',
                description: 'Multiple concurrent viewers donating caused race conditions in the counter.',
                solution: 'Used Firebase Realtime Database transactions with server timestamps. Implemented debounced UI updates (300ms) to prevent visual jitter while maintaining data accuracy.',
            },
        ],
        performanceMetrics: [
            { label: 'Stream Latency', value: '<500ms', improvement: 'Reduced from 3-5s' },
            { label: 'Concurrent Viewers', value: '500+', improvement: 'Scaled from 50' },
            { label: 'App Startup', value: '1.2s', improvement: 'Down from 3.8s' },
        ],
        techStackJustification: [
            { tech: 'Flutter', reason: 'Cross-platform delivery with single codebase for both Android and iOS, critical for NGO budget constraints.' },
            { tech: 'Agora SDK', reason: 'Production-grade low-latency streaming with adaptive bitrate, eliminating need for custom WebRTC infrastructure.' },
            { tech: 'Firebase', reason: 'Real-time sync for donation tracking + serverless Cloud Functions for verification pipeline.' },
        ],
        outcome: 'Successfully launched live seva streaming platform serving 500+ concurrent viewers with transparent donation tracking.',
        businessImpact: 'Enabled NGOs to conduct transparent digital seva events, increasing donor confidence and repeat contributions by 40%.',
        link: 'https://play.google.com/store/apps/details?id=com.karuna.app',
        github: '#',
        order: 1,
        isPublished: true,
    },
    {
        title: 'Makanify CRM',
        slug: 'makanify-crm',
        category: 'Real Estate',
        isFeatured: true,
        image: '/makanify_crm_mockup_1771756783251.png',
        problem: 'Real estate brokers were managing leads via WhatsApp and spreadsheets. No centralized system for tracking site visits, follow-ups, or conversion analytics. Brokers lost 30%+ leads due to poor follow-up.',
        description: 'Mobile-first CRM automating lead workflows, site visit scheduling, and real-time dashboards for real estate operations across India.',
        result: 'Scalable broker workflows with automated lead management',
        metrics: ['🏠 Real Estate', '📈 Lead Tracking', '⚡ Sales Velocity'],
        tags: ['Flutter', 'CRM', 'Lead Management', 'iOS/Android'],
        architectureDecisions: [
            {
                title: 'Mobile-first vs Web-first CRM',
                description: 'Brokers are constantly on-site showing properties. A web CRM would require laptop access. Mobile-first with offline-capable data sync meant brokers could update leads immediately after site visits.',
            },
            {
                title: 'Why Clean Architecture with repository pattern?',
                description: 'CRM data sources change frequently — switching from REST to GraphQL, adding local caching. Repository pattern isolated data source changes from business logic, enabling seamless backend migrations.',
            },
        ],
        systemDesignOverview: 'MVVM with repository pattern. REST API → Repository → ViewModel → UI. Offline-first with SQLite local cache, background sync via WorkManager. Push notifications for lead assignments via FCM.',
        technicalChallenges: [
            {
                title: 'Offline-first data synchronization',
                description: 'Brokers in rural areas had intermittent connectivity. Lead updates made offline needed to sync without conflicts.',
                solution: 'Implemented last-write-wins conflict resolution with server timestamps. SQLite as local cache with a sync queue. Background WorkManager jobs push pending changes when connectivity returns.',
            },
            {
                title: 'Complex dashboard rendering performance',
                description: 'Dashboard with 10+ charts and real-time metrics was causing frame drops on mid-range devices.',
                solution: 'Lazy-loaded chart widgets, used RepaintBoundary for each chart, and computed metrics server-side. Reduced main thread work by 60%, maintaining 60fps scroll performance.',
            },
        ],
        performanceMetrics: [
            { label: 'Lead Response Time', value: '<2 min', improvement: 'Down from 24 hrs' },
            { label: 'Conversion Rate', value: '+25%', improvement: 'Automated follow-ups' },
            { label: 'App Performance', value: '60fps', improvement: 'Optimized rendering' },
        ],
        techStackJustification: [
            { tech: 'Flutter', reason: 'Single codebase for Android + iOS deployment, critical for startup budget and rapid iteration.' },
            { tech: 'SQLite + REST', reason: 'Offline-first architecture enabling field usage without constant connectivity.' },
            { tech: 'FCM', reason: 'Real-time lead assignment notifications ensuring no lead goes unnoticed.' },
        ],
        outcome: 'Deployed CRM used by 200+ real estate brokers across Gujarat, automating lead management and site visit scheduling.',
        businessImpact: 'Reduced lead response time from 24 hours to under 2 minutes. Increased conversion rates by 25% through automated follow-up reminders.',
        link: 'https://play.google.com/store/apps/details?id=com.makanify.makanifyApp',
        order: 2,
        isPublished: true,
    },
    {
        title: 'Vista Reels',
        slug: 'vista-reels',
        category: 'Entertainment',
        isFeatured: true,
        image: '/vista_reels_mockup_1771756800227.png',
        problem: 'Existing movie discovery apps were static and lacked social engagement. Users wanted to discover movies through short-form video content and discuss in real-time, not just read reviews.',
        description: 'Short video-based movie discovery platform with WebSocket-powered real-time chat, achieving 60fps video playback and fluid social interactions.',
        result: 'Fluid social interaction with high-performance video playback',
        metrics: ['🎬 60fps Reels', '💬 Real-time Chat', '📱 Movie Discovery'],
        tags: ['Flutter', 'Riverpod', 'WebSocket', 'Video'],
        architectureDecisions: [
            {
                title: 'Why WebSocket over polling for chat?',
                description: 'Polling with 1-second intervals would create 60 API calls/minute per user. With 1000 concurrent users, that\'s 60,000 requests/minute. WebSocket maintains a single persistent connection, reducing server load by 98% and enabling true real-time messaging.',
            },
            {
                title: 'Why Riverpod for state management?',
                description: 'Video playback state, chat messages, and user preferences needed to be coordinated without rebuilding the entire widget tree. Riverpod\'s scoped providers prevented video controllers from being recreated during chat updates.',
            },
        ],
        systemDesignOverview: 'Video pipeline: CDN-served HLS streams → PreloadPageView for pre-caching next 2 videos → VideoPlayerController lifecycle management. Chat: WebSocket connection → message queue → optimistic UI updates → server acknowledgment.',
        technicalChallenges: [
            {
                title: 'Video preloading without memory leaks',
                description: 'Preloading next videos for smooth swipe experience caused OOM crashes on 2GB RAM devices.',
                solution: 'Built a custom video controller pool (max 3 active controllers). Dispose controllers outside viewport range. Implemented LRU cache for video thumbnails. Memory usage dropped from 800MB to 200MB.',
            },
            {
                title: 'WebSocket reconnection reliability',
                description: 'Chat connections dropped frequently on mobile networks during cellular handoffs.',
                solution: 'Implemented exponential backoff reconnection (1s → 2s → 4s → max 30s) with message queue persistence. Missed messages are fetched via REST API on reconnection, ensuring zero message loss.',
            },
        ],
        performanceMetrics: [
            { label: 'Video FPS', value: '60fps', improvement: 'Consistent across devices' },
            { label: 'Memory Usage', value: '200MB', improvement: 'Down from 800MB' },
            { label: 'Chat Latency', value: '<100ms', improvement: 'Real-time delivery' },
        ],
        techStackJustification: [
            { tech: 'Flutter', reason: 'Native-like video playback performance with platform channel integration for hardware-accelerated decoding.' },
            { tech: 'WebSocket', reason: '98% reduction in server load compared to polling. True real-time messaging experience.' },
            { tech: 'Riverpod', reason: 'Scoped state management preventing video controller recreation during chat state changes.' },
        ],
        outcome: 'Launched short-video movie discovery platform with real-time social features, maintaining 60fps performance across 500+ device models.',
        businessImpact: 'Created a novel movie discovery experience combining short-form video with real-time discussion, achieving high user engagement and session duration.',
        link: 'https://play.google.com/store/apps/details?id=com.vistareels.app',
        order: 3,
        isPublished: true,
    },
    {
        title: 'Pawrpose',
        slug: 'pawrpose',
        category: 'AI & Lifestyle',
        isFeatured: true,
        image: '/pawrpose_mockup_1771756815000.png',
        problem: 'Pet parents lacked data-driven insights into their pets\' emotional states and daily routines. Existing pet apps were glorified reminder tools without any intelligent analysis.',
        description: 'AI-powered application for pet emotion analysis, journaling, and intelligent routine tracking with machine learning-driven insights.',
        result: 'AI-driven pet insights with high user engagement',
        metrics: ['🤖 AI Emotion Detection', '🐾 5k+ Users', '📈 High Engagement'],
        tags: ['Flutter', 'AI/ML', 'Emotion Tracking', 'Firebase'],
        architectureDecisions: [
            {
                title: 'On-device vs cloud ML inference',
                description: 'Cloud inference adds 200-500ms latency per analysis and requires constant connectivity. TensorFlow Lite on-device inference provides <50ms results, works offline, and eliminates per-request API costs.',
            },
            {
                title: 'Why Firebase + Supabase hybrid?',
                description: 'Firebase for authentication and push notifications (mature, reliable), Supabase for relational data storage (pet profiles, journal entries) where SQL queries outperform Firestore for complex aggregations.',
            },
        ],
        systemDesignOverview: 'ML Pipeline: Camera input → TFLite model (on-device) → emotion classification → Firebase Analytics for aggregate insights. Data layer: Supabase PostgreSQL for structured data → Riverpod repositories → cached UI state.',
        technicalChallenges: [
            {
                title: 'ML model accuracy across pet breeds',
                description: 'Initial model trained on limited dataset showed 40% accuracy for dark-furred pets due to feature extraction difficulties.',
                solution: 'Augmented training dataset with breed-specific images, implemented histogram equalization preprocessing for dark fur, and added breed-aware model branching. Accuracy improved to 85% across all breeds.',
            },
            {
                title: 'Journal data aggregation performance',
                description: 'Generating weekly/monthly mood trend reports from thousands of journal entries was slow.',
                solution: 'Pre-computed aggregations using Supabase RPC functions. Materialized views for trend data refreshed every 6 hours. Client-side caching with 1-hour TTL. Report generation dropped from 3s to 200ms.',
            },
        ],
        performanceMetrics: [
            { label: 'ML Inference', value: '<50ms', improvement: 'On-device processing' },
            { label: 'Breed Accuracy', value: '85%', improvement: 'Up from 40%' },
            { label: 'Active Users', value: '5,000+', improvement: 'Growing monthly' },
        ],
        techStackJustification: [
            { tech: 'TensorFlow Lite', reason: 'On-device inference eliminates latency and works offline — critical for real-time pet emotion analysis during walks.' },
            { tech: 'Supabase', reason: 'PostgreSQL for complex aggregation queries on journal data, far more efficient than Firestore for relational pet profile data.' },
            { tech: 'Flutter', reason: 'Platform channel integration with native camera APIs for ML model input, single codebase delivery.' },
        ],
        outcome: 'Launched AI-powered pet companion app serving 5,000+ active users with on-device emotion analysis and intelligent routine tracking.',
        businessImpact: 'Pioneered AI-assisted pet care in the Indian market. 85% emotion detection accuracy drove strong user retention and daily engagement.',
        link: 'https://play.google.com/store/apps/details?id=com.pawrpose.app',
        order: 4,
        isPublished: true,
    },
    {
        title: 'Yuktimed',
        slug: 'yuktimed',
        category: 'Medical',
        isFeatured: true,
        image: '/yuktimed_mockup_1771756830000.png',
        problem: 'Medical professionals needed a secure, performant tool for managing dynamic patient data, medical forms, and appointment scheduling — existing solutions were slow and non-compliant.',
        description: 'Feature-rich medical platform with REST API integration, dynamic form rendering, and optimized UI/UX for healthcare professionals.',
        result: 'Production-grade medical tool with enterprise performance',
        metrics: ['🏥 Healthcare', '⚡ Performance Optimized', '📱 Live on Play Store'],
        tags: ['Flutter', 'REST API', 'Clean Architecture', 'Medical'],
        architectureDecisions: [
            {
                title: 'Why Clean Architecture for medical software?',
                description: 'Medical software has strict regulatory requirements. Clean Architecture with clear layer separation ensures business rules (validation, calculations) are testable independently of UI and data sources — critical for healthcare compliance.',
            },
            {
                title: 'Dynamic form rendering vs static forms',
                description: 'Medical forms change frequently with regulatory updates. Building a JSON-schema-based dynamic form renderer means form updates can be pushed via API without app updates — reducing deployment risk in healthcare.',
            },
        ],
        systemDesignOverview: 'Clean Architecture: Presentation → Domain → Data layers. Dynamic form engine rendering JSON schemas from API. Encrypted local storage for sensitive patient data. Background sync for appointment updates.',
        technicalChallenges: [
            {
                title: 'Dynamic form rendering performance',
                description: 'Complex medical forms with 50+ fields and conditional logic caused significant jank during rendering.',
                solution: 'Implemented lazy field rendering with viewport-aware loading. Pre-compiled conditional logic into evaluation trees. Used const widgets for static elements. Form render time dropped from 2s to 300ms.',
            },
            {
                title: 'Sensitive data encryption at rest',
                description: 'Patient data stored locally needed encryption that didn\'t impact read/write performance.',
                solution: 'Used flutter_secure_storage with AES-256 for sensitive fields, platform keychain for encryption keys. Implemented encrypted SharedPreferences wrapper with transparent read/write API.',
            },
        ],
        performanceMetrics: [
            { label: 'Form Render', value: '300ms', improvement: 'Down from 2s' },
            { label: 'API Response', value: '< 200ms', improvement: '40% faster' },
            { label: 'App Performance', value: '75%', improvement: 'Overall improvement' },
        ],
        techStackJustification: [
            { tech: 'Flutter', reason: 'Cross-platform delivery ensuring both Android and iOS availability for medical professionals.' },
            { tech: 'Clean Architecture', reason: 'Layer separation critical for healthcare compliance — testable business rules independent of framework.' },
            { tech: 'AES-256 Encryption', reason: 'Medical-grade encryption for patient data at rest, using platform keychains for key management.' },
        ],
        outcome: 'Deployed production-grade medical platform used by healthcare professionals for patient management and dynamic form-based data collection.',
        businessImpact: 'Reduced form filling time by 60% for medical professionals. Achieved 75% overall app performance improvement through systematic optimization.',
        link: 'https://play.google.com/store/apps/details?id=com.app.yuktimed',
        order: 5,
        isPublished: true,
    },
    // Non-featured projects
    {
        title: 'WearHouse',
        slug: 'wearhouse',
        category: 'E-Commerce',
        isFeatured: false,
        description: 'Fashion e-commerce platform with curated collections, secure payment integration via Razorpay, and real-time order tracking.',
        tags: ['Flutter', 'E-Commerce', 'Razorpay', 'Firebase'],
        order: 6,
        isPublished: true,
    },
    {
        title: 'Farm2Biz',
        slug: 'farm2biz',
        category: 'Enterprise',
        isFeatured: false,
        description: 'B2B agriculture marketplace bridging farmers and agro-businesses with efficient procurement and logistics tracking.',
        tags: ['Flutter', 'B2B', 'Marketplace', 'Logistics'],
        order: 7,
        isPublished: true,
    },
    {
        title: 'Capium 365',
        slug: 'capium-365',
        category: 'Enterprise',
        isFeatured: false,
        description: 'Comprehensive accounting and bookkeeping platform for UK-based accountants with real-time financial reporting.',
        tags: ['Flutter', 'Fintech', 'REST API', 'Reporting'],
        order: 8,
        isPublished: true,
    },
    {
        title: 'Yajya',
        slug: 'yajya',
        category: 'Social',
        isFeatured: false,
        description: 'Community-driven spiritual platform for event coordination, live updates, and community engagement.',
        tags: ['Flutter', 'Firebase', 'Community', 'Real-time'],
        order: 9,
        isPublished: true,
    },
];

// ═══════════════════════════════════════════════════════════════
// EXPERIENCE
// ═══════════════════════════════════════════════════════════════
const experiences = [
    {
        company: 'CodnestX Tech Dynamics Pvt. Ltd.',
        role: 'Sr. Flutter Developer',
        period: 'March 2025 – Present',
        startDate: new Date('2025-03-01'),
        isCurrent: true,
        description: 'Leading mobile architecture for complex wellness platforms. Optimized app performance by 75% and integrated complex REST APIs and live streaming features.',
        highlights: [
            'Architected Karuna Care live streaming platform with sub-500ms latency',
            'Optimized app startup time by 75% through lazy loading and tree-shaking',
            'Implemented Clean Architecture with Riverpod across all company projects',
            'Mentored junior developers on state management and testing best practices',
        ],
        technologies: ['Flutter', 'Riverpod', 'Agora', 'Firebase', 'REST API', 'WebSocket'],
        order: 1,
        isPublished: true,
    },
    {
        company: 'Ingenious Minds Lab Solution Pvt Ltd',
        role: 'Flutter Developer',
        period: 'Sept 2022 – March 2025',
        startDate: new Date('2022-09-01'),
        endDate: new Date('2025-03-01'),
        isCurrent: false,
        description: 'Designed and developed dynamic, responsive applications including Makanify CRM and Vista Reels. Worked with REST APIs, social login, and push notifications while significantly improving application performance through optimization.',
        highlights: [
            'Built Makanify CRM from scratch, automating lead management for 200+ brokers',
            'Developed Vista Reels with 60fps video playback and WebSocket real-time chat',
            'Reduced memory consumption by 75% through video controller pooling',
            'Integrated payment gateways (Razorpay, Stripe) across multiple projects',
        ],
        technologies: ['Flutter', 'GetX', 'Riverpod', 'REST API', 'WebSocket', 'Razorpay'],
        order: 2,
        isPublished: true,
    },
    {
        company: 'Technource',
        role: 'Flutter Developer Trainee',
        period: 'July 2022 – Sept 2022',
        startDate: new Date('2022-07-01'),
        endDate: new Date('2022-09-01'),
        isCurrent: false,
        description: 'Developed and maintained mobile applications like WearHouse and Farm2Biz. Gained deep experience with GetX, Firebase integration, and building responsive UI.',
        highlights: [
            'Built WearHouse e-commerce app with Razorpay payment integration',
            'Developed Farm2Biz B2B marketplace for agricultural procurement',
            'Implemented responsive UI patterns for diverse screen sizes',
        ],
        technologies: ['Flutter', 'GetX', 'Firebase', 'Razorpay'],
        order: 3,
        isPublished: true,
    },
];

// ═══════════════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════════════
const skills = [
    // Technical
    { name: 'Dart', category: 'technical', icon: 'terminal', proficiency: 5, order: 1 },
    { name: 'Flutter', category: 'technical', icon: 'cpu', proficiency: 5, order: 2 },
    { name: 'Riverpod', category: 'technical', icon: 'layers', proficiency: 5, order: 3 },
    { name: 'GetX', category: 'technical', icon: 'target', proficiency: 4, order: 4 },
    { name: 'Firebase / Supabase', category: 'technical', icon: 'globe', proficiency: 5, order: 5 },
    { name: 'REST APIs', category: 'technical', icon: 'code', proficiency: 5, order: 6 },
    { name: 'Stripe / RazorPay', category: 'technical', icon: 'credit-card', proficiency: 4, order: 7 },
    { name: 'AI Assisted Dev', category: 'technical', icon: 'zap', proficiency: 5, order: 8 },

    // AI Tools
    { name: 'Antigravity', category: 'ai-tools', icon: 'bot', proficiency: 5, order: 1 },
    { name: 'Cursor', category: 'ai-tools', icon: 'monitor', proficiency: 5, order: 2 },
    { name: 'Windsurf', category: 'ai-tools', icon: 'wind', proficiency: 4, order: 3 },
    { name: 'ChatGPT', category: 'ai-tools', icon: 'message-circle', proficiency: 5, order: 4 },

    // Soft Skills
    { name: 'Architecture Design', category: 'soft', icon: 'building', proficiency: 5, order: 1 },
    { name: 'Problem Solving', category: 'soft', icon: 'lightbulb', proficiency: 5, order: 2 },
    { name: 'Rapid Prototyping', category: 'soft', icon: 'rocket', proficiency: 5, order: 3 },
    { name: 'Team Collaboration', category: 'soft', icon: 'users', proficiency: 5, order: 4 },
];

// ═══════════════════════════════════════════════════════════════
// ADMIN USER
// ═══════════════════════════════════════════════════════════════
const adminUser = {
    name: 'Sahil Khatri',
    email: 'sahilkhatri312@gmail.com',
    password: 'admin@portfolio2026',
    role: 'admin',
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════
const seedDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB for seeding...\n');

        // Clear existing data
        await Promise.all([
            Project.deleteMany({}),
            Experience.deleteMany({}),
            Skill.deleteMany({}),
            User.deleteMany({}),
        ]);
        console.log('🗑️  Cleared existing data.\n');

        // Seed projects
        await Project.insertMany(projects);
        console.log(`📦 Seeded ${projects.length} projects.`);

        // Seed experience
        await Experience.insertMany(experiences);
        console.log(`💼 Seeded ${experiences.length} experiences.`);

        // Seed skills
        await Skill.insertMany(skills);
        console.log(`🧠 Seeded ${skills.length} skills.`);

        // Seed admin user (password will be hashed by pre-save hook)
        const user = new User(adminUser);
        await user.save();
        console.log(`👤 Created admin user: ${adminUser.email}`);

        console.log('\n🚀 Database seeded successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`Admin Login: ${adminUser.email}`);
        console.log(`Admin Password: ${adminUser.password}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
