import { Router } from 'express';
import {
    getProjects,
    getProjectBySlug,
    createProject,
    updateProject,
    deleteProject,
    toggleFeatured,
} from '../controllers/project.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);

// Admin routes
router.post('/', protect, adminOnly, createProject);
router.put('/:id', protect, adminOnly, updateProject);
router.delete('/:id', protect, adminOnly, deleteProject);
router.patch('/:id/toggle-featured', protect, adminOnly, toggleFeatured);

export default router;
