import { Router } from 'express';
import {
    submitInquiry,
    getInquiries,
    updateInquiryStatus,
    deleteInquiry,
} from '../controllers/inquiry.controller';
import { protect, adminOnly } from '../middleware/auth.middleware';

const router = Router();

// Public
router.post('/', submitInquiry);

// Admin
router.get('/', protect, adminOnly, getInquiries);
router.patch('/:id/status', protect, adminOnly, updateInquiryStatus);
router.delete('/:id', protect, adminOnly, deleteInquiry);

export default router;
