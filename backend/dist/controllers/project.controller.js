"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const project_model_1 = __importDefault(require("../models/project.model"));
const getProjects = async (req, res) => {
    try {
        const projects = await project_model_1.default.find().sort({ createdAt: -1 });
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getProjects = getProjects;
const createProject = async (req, res) => {
    try {
        const project = new project_model_1.default(req.body);
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createProject = createProject;
