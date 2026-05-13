import { Request, Response } from 'express';
import Inquiry from '../models/inquiry.model';
import { sendInquiryNotification } from '../services/email.service';

// POST /api/inquiries — Public: Submit inquiry
export const submitInquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, projectType, budgetRange, message } = req.body;

        if (!name || !email || !projectType || !budgetRange || !message) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const inquiry = new Inquiry({ name, email, projectType, budgetRange, message });
        const saved = await inquiry.save();

        // Send email notification (non-blocking)
        sendInquiryNotification({ name, email, projectType, budgetRange, message }).catch(err => {
            console.error('[Email] Failed to send notification:', err.message);
        });

        res.status(201).json({
            message: 'Inquiry submitted successfully! I\'ll get back to you within 24 hours.',
            inquiry: saved,
        });
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// GET /api/inquiries — Admin: Get all inquiries
export const getInquiries = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.query;
        const filter: Record<string, any> = {};

        if (status) filter.status = status;

        const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// PATCH /api/inquiries/:id/status — Admin: Update inquiry status
export const updateInquiryStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.body;

        if (!['new', 'read', 'replied', 'archived'].includes(status)) {
            res.status(400).json({ message: 'Invalid status' });
            return;
        }

        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!inquiry) {
            res.status(404).json({ message: 'Inquiry not found' });
            return;
        }

        res.json(inquiry);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

// DELETE /api/inquiries/:id — Admin: Delete inquiry
export const deleteInquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

        if (!inquiry) {
            res.status(404).json({ message: 'Inquiry not found' });
            return;
        }

        res.json({ message: 'Inquiry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
