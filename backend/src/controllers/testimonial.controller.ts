import { Request, Response } from 'express';
import Testimonial from '../models/testimonial.model';

// GET /api/testimonials — Public
export const getTestimonials = async (_req: Request, res: Response): Promise<void> => {
    try {
        const testimonials = await Testimonial.find({ isPublished: true }).sort({ order: 1, createdAt: -1 });
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// POST /api/testimonials — Admin
export const createTestimonial = async (req: Request, res: Response): Promise<void> => {
    try {
        const testimonial = new Testimonial(req.body);
        const saved = await testimonial.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// PUT /api/testimonials/:id — Admin
export const updateTestimonial = async (req: Request, res: Response): Promise<void> => {
    try {
        const testimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!testimonial) {
            res.status(404).json({ message: 'Testimonial not found' });
            return;
        }

        res.json(testimonial);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// DELETE /api/testimonials/:id — Admin
export const deleteTestimonial = async (req: Request, res: Response): Promise<void> => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

        if (!testimonial) {
            res.status(404).json({ message: 'Testimonial not found' });
            return;
        }

        res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
