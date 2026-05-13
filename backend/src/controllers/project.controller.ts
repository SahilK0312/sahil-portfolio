import { Request, Response } from 'express';
import Project from '../models/project.model';

// GET /api/projects — Public: Get all published projects
export const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const { featured } = req.query;
        const filter: Record<string, any> = { isPublished: true };

        if (featured === 'true') filter.isFeatured = true;

        const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// GET /api/projects/:slug — Public: Get single project by slug
export const getProjectBySlug = async (req: Request, res: Response): Promise<void> => {
    try {
        const project = await Project.findOne({
            slug: req.params.slug,
            isPublished: true,
        });

        if (!project) {
            res.status(404).json({ message: 'Project not found' });
            return;
        }

        res.json(project);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// POST /api/projects — Admin: Create new project
export const createProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const project = new Project(req.body);
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// PUT /api/projects/:id — Admin: Update project
export const updateProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!project) {
            res.status(404).json({ message: 'Project not found' });
            return;
        }

        res.json(project);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// DELETE /api/projects/:id — Admin: Delete project
export const deleteProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            res.status(404).json({ message: 'Project not found' });
            return;
        }

        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// PATCH /api/projects/:id/toggle-featured — Admin: Toggle featured
export const toggleFeatured = async (req: Request, res: Response): Promise<void> => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            res.status(404).json({ message: 'Project not found' });
            return;
        }

        project.isFeatured = !project.isFeatured;
        await project.save();

        res.json(project);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
