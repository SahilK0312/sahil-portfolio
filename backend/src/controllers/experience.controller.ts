import { Request, Response } from 'express';
import Experience from '../models/experience.model';

// GET /api/experience — Public: Get all published experience
export const getExperiences = async (_req: Request, res: Response): Promise<void> => {
    try {
        const experiences = await Experience.find({ isPublished: true }).sort({ order: 1, startDate: -1 });
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// POST /api/experience — Admin: Create experience
export const createExperience = async (req: Request, res: Response): Promise<void> => {
    try {
        const experience = new Experience(req.body);
        const saved = await experience.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// PUT /api/experience/:id — Admin: Update experience
export const updateExperience = async (req: Request, res: Response): Promise<void> => {
    try {
        const experience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!experience) {
            res.status(404).json({ message: 'Experience not found' });
            return;
        }

        res.json(experience);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// DELETE /api/experience/:id — Admin: Delete experience
export const deleteExperience = async (req: Request, res: Response): Promise<void> => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);

        if (!experience) {
            res.status(404).json({ message: 'Experience not found' });
            return;
        }

        res.json({ message: 'Experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
