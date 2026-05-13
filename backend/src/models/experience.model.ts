import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
    company: string;
    role: string;
    period: string;
    startDate: Date;
    endDate?: Date;
    isCurrent: boolean;
    description: string;
    highlights: string[];
    technologies: string[];
    order: number;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ExperienceSchema: Schema = new Schema(
    {
        company: { type: String, required: true },
        role: { type: String, required: true },
        period: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        isCurrent: { type: Boolean, default: false },
        description: { type: String, required: true },
        highlights: [{ type: String }],
        technologies: [{ type: String }],
        order: { type: Number, default: 0 },
        isPublished: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model<IExperience>('Experience', ExperienceSchema);
