import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkflow extends Document {
    id: string;
    userId: string;
    clerkUserId: string;
    name: string;
    description: string;
    definition: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

const WorkflowSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'draft'
    }
}, {
    timestamps: true // This will automatically add createdAt and updatedAt fields
});

export default mongoose.model<IWorkflow>('Workflow', WorkflowSchema);
