import mongoose, { Schema, Document } from 'mongoose';
import { hashPassword } from '../utils/hash';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'viewer';
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, required: true, select: false },
        role: { type: String, enum: ['admin', 'viewer'], default: 'admin' },
    },
    { timestamps: true }
);

// Hash password before saving
UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    this.password = await hashPassword(this.password as string);
});

export default mongoose.model<IUser>('User', UserSchema);
