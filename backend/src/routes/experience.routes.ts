import { Router } from 'express';
import {
    getExperiences,
    createExperience,
    updateExperience,
    deleteExperience,
} from '../controllers/experience.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Public
router.get('/', getExperiences);

// Admin
router.post('/', protect, adminOnly, createExperience);
router.put('/:id', protect, adminOnly, updateExperience);
router.delete('/:id', protect, adminOnly, deleteExperience);

export default router;
