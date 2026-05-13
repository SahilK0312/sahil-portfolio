import { Router } from 'express';
import {
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill,
} from '../controllers/skill.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Public
router.get('/', getSkills);

// Admin
router.post('/', protect, adminOnly, createSkill);
router.put('/:id', protect, adminOnly, updateSkill);
router.delete('/:id', protect, adminOnly, deleteSkill);

export default router;
