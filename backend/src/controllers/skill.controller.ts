import { Request, Response } from 'express';
import Skill from '../models/skill.model';

// GET /api/skills — Public
export const getSkills = async (_req: Request, res: Response): Promise<void> => {
    try {
        const skills = await Skill.find({ isPublished: true }).sort({ order: 1 });

        // Group by category
        const grouped = {
            technical: skills.filter(s => s.category === 'technical'),
            soft: skills.filter(s => s.category === 'soft'),
            aiTools: skills.filter(s => s.category === 'ai-tools'),
        };

        res.json(grouped);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// POST /api/skills — Admin
export const createSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const skill = new Skill(req.body);
        const saved = await skill.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// PUT /api/skills/:id — Admin
export const updateSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const skill = await Skill.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!skill) {
            res.status(404).json({ message: 'Skill not found' });
            return;
        }

        res.json(skill);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// DELETE /api/skills/:id — Admin
export const deleteSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);

        if (!skill) {
            res.status(404).json({ message: 'Skill not found' });
            return;
        }

        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
