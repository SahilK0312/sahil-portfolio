import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    slug: string;
    category: string;
    isFeatured: boolean;
    image?: string;

    // Case Study Fields
    problem: string;
    description: string;
    result: string;
    metrics: string[];
    tags: string[];

    // Deep Case Study
    architectureDecisions: {
        title: string;
        description: string;
    }[];
    systemDesignOverview: string;
    technicalChallenges: {
        title: string;
        description: string;
        solution: string;
    }[];
    performanceMetrics: {
        label: string;
        value: string;
        improvement: string;
    }[];
    techStackJustification: {
        tech: string;
        reason: string;
    }[];
    outcome: string;
    businessImpact: string;

    // Links
    link?: string;
    github?: string;
    playStore?: string;
    appStore?: string;

    order: number;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true, index: true },
        category: { type: String, required: true },
        isFeatured: { type: Boolean, default: false },
        image: { type: String },

        // Case Study
        problem: { type: String, default: '' },
        description: { type: String, required: true },
        result: { type: String, default: '' },
        metrics: [{ type: String }],
        tags: [{ type: String }],

        // Deep Case Study
        architectureDecisions: [
            {
                title: { type: String },
                description: { type: String },
            },
        ],
        systemDesignOverview: { type: String, default: '' },
        technicalChallenges: [
            {
                title: { type: String },
                description: { type: String },
                solution: { type: String },
            },
        ],
        performanceMetrics: [
            {
                label: { type: String },
                value: { type: String },
                improvement: { type: String },
            },
        ],
        techStackJustification: [
            {
                tech: { type: String },
                reason: { type: String },
            },
        ],
        outcome: { type: String, default: '' },
        businessImpact: { type: String, default: '' },

        // Links
        link: { type: String },
        github: { type: String },
        playStore: { type: String },
        appStore: { type: String },

        order: { type: Number, default: 0 },
        isPublished: { type: Boolean, default: true },
    },
    { timestamps: true }
);

// Auto-generate slug from title before save
ProjectSchema.pre('save', function () {
    if (this.isModified('title') && !this.slug) {
        this.slug = (this.title as string)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
});

export default mongoose.model<IProject>('Project', ProjectSchema);
