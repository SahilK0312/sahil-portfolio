import { Router } from 'express';
import { loginAdmin, getMe } from '../controllers/auth.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', loginAdmin);
router.get('/me', protect, getMe);

export default router;
