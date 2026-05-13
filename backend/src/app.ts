import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import projectRoutes from './routes/project.routes';
import authRoutes from './routes/auth.routes';
import experienceRoutes from './routes/experience.routes';
import skillRoutes from './routes/skill.routes';
import testimonialRoutes from './routes/testimonial.routes';
import inquiryRoutes from './routes/inquiry.routes';
import { errorHandler, notFound } from './middleware/error.middleware';

const app: Application = express();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Health check
app.get('/', (_req: Request, res: Response) => {
    res.json({
        status: 'running',
        version: '2.0.0',
        endpoints: [
            'GET  /api/projects',
            'GET  /api/projects/:slug',
            'GET  /api/experience',
            'GET  /api/skills',
            'GET  /api/testimonials',
            'POST /api/inquiries',
            'POST /api/auth/login',
        ],
    });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
