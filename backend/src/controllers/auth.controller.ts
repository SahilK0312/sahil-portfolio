import { Request, Response } from 'express';
import User from '../models/user.model';
import { comparePassword } from '../utils/hash';
import { generateToken } from '../utils/jwt';

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }

        // Find user with password field included
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = generateToken({ userId: String(user._id), role: user.role });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
    try {
        res.json({
            id: req.user?._id,
            name: req.user?.name,
            email: req.user?.email,
            role: req.user?.role,
        });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
