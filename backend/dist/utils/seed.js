"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const project_model_1 = __importDefault(require("../models/project.model"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../.env') });
const resumeProjects = [
    {
        title: "Karuna Care",
        description: "A comprehensive spiritual and healthcare wellness application. Features include live streaming, community engagement, and spiritual content delivery across Android and iOS.",
        tags: ["Flutter", "Riverpod", "Agora", "Live Stream", "Wellness"],
        link: "https://mykarunacare.com/"
    },
    {
        title: "Makanify – Real Estate CRM",
        description: "High-performance real estate CRM for managing listings, leads, and client interactions with automated analytics and cross-platform support.",
        tags: ["Flutter", "CRM", "Real Estate", "Analytics"],
        link: "https://apps.apple.com/in/app/makanify-real-estate-crm/id6751803129"
    },
    {
        title: "Vista Reels",
        description: "Engaging short-video social platform designed for entertainment and community interaction. Built with smooth performance and modern UI/UX.",
        tags: ["Flutter", "Social Media", "Video Streaming", "UI/UX"],
        link: "https://apps.apple.com/in/app/vista-reel/id6746562815"
    },
    {
        title: "Farm2Biz",
        description: "A B2B agriculture marketplace bridging farmers and agro-businesses for efficient procurement, distribution, and logistics tracking.",
        tags: ["Flutter", "B2B", "Marketplace", "Logistics"],
        link: "https://github.com/sahilkhatri312"
    },
    {
        title: "WearHouse",
        description: "An e-commerce platform for fashion and apparel featuring curated collections, secure payments, and real-time order tracking.",
        tags: ["Flutter", "E-Commerce", "Payments", "Android"],
        link: "https://github.com/sahilkhatri312"
    },
    {
        title: "PawrPose",
        description: "A social project dedicated to animal welfare, animal rescue, and pet adoption.",
        tags: ["Flutter", "Social Impact", "Animal Welfare"],
        link: "https://github.com/sahilkhatri312"
    }
];
const seedDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
        await mongoose_1.default.connect(mongoURI);
        console.log('Connected to MongoDB for seeding...');
        await project_model_1.default.deleteMany({});
        console.log('Cleared existing projects.');
        await project_model_1.default.insertMany(resumeProjects);
        console.log('Successfully seeded database with Sahil Khatri\'s premium projects!');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedDB();
