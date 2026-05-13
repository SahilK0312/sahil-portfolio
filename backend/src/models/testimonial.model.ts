import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar?: string;
    rating: number;
    isFeatured: boolean;
    isPublished: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        company: { type: String, required: true },
        content: { type: String, required: true },
        avatar: { type: String },
        rating: { type: Number, min: 1, max: 5, default: 5 },
        isFeatured: { type: Boolean, default: false },
        isPublished: { type: Boolean, default: true },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

export default mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
