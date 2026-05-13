import mongoose, { Schema, Document } from 'mongoose';

export interface ISkill extends Document {
    name: string;
    category: 'technical' | 'soft' | 'ai-tools';
    icon?: string;
    proficiency: number; // 1-5
    order: number;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const SkillSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        category: {
            type: String,
            required: true,
            enum: ['technical', 'soft', 'ai-tools'],
        },
        icon: { type: String },
        proficiency: { type: Number, min: 1, max: 5, default: 5 },
        order: { type: Number, default: 0 },
        isPublished: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<ISkill>('Skill', SkillSchema);
