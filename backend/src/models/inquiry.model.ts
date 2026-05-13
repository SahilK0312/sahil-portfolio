import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
    name: string;
    email: string;
    projectType: string;
    budgetRange: string;
    message: string;
    status: 'new' | 'read' | 'replied' | 'archived';
    createdAt: Date;
    updatedAt: Date;
}

const InquirySchema: Schema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true },
        projectType: {
            type: String,
            required: true,
            enum: [
                'Mobile App',
                'Web Application',
                'Full Stack',
                'Consulting',
                'Architecture Review',
                'Other',
            ],
        },
        budgetRange: {
            type: String,
            required: true,
            enum: [
                'Under $5k',
                '$5k - $15k',
                '$15k - $50k',
                '$50k+',
                'Let\'s Discuss',
            ],
        },
        message: { type: String, required: true, trim: true },
        status: {
            type: String,
            enum: ['new', 'read', 'replied', 'archived'],
            default: 'new',
        },
    },
    { timestamps: true }
);

export default mongoose.model<IInquiry>('Inquiry', InquirySchema);
