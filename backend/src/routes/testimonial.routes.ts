import { Router } from 'express';
import {
    getTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
} from '../controllers/testimonial.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Public
router.get('/', getTestimonials);

// Admin
router.post('/', protect, adminOnly, createTestimonial);
router.put('/:id', protect, adminOnly, updateTestimonial);
router.delete('/:id', protect, adminOnly, deleteTestimonial);

export default router;
