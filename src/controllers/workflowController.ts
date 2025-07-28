import { Request, Response } from 'express';
import Workflow from '../models/Workflow';

export const createWorkflow = async (req: Request, res: Response) => {
    try {
        const workflow = new Workflow(req.body);
        const savedWorkflow = await workflow.save();
        res.status(201).json(savedWorkflow);
    } catch (error) {
        res.status(500).json({ message: 'Error creating workflow', error });
    }
};

export const getWorkflows = async (req: Request, res: Response) => {
    try {
        const workflows = await Workflow.find({ userId: req.params.userId });
        res.status(200).json(workflows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workflows', error });
    }
};

export const getWorkflowById = async (req: Request, res: Response) => {
    try {
        const workflow = await Workflow.findById(req.params.id);
        if (!workflow) {
            return res.status(404).json({ message: 'Workflow not found' });
        }
        res.status(200).json(workflow);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workflow', error });
    }
};

export const updateWorkflow = async (req: Request, res: Response) => {
    try {
        const workflow = await Workflow.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!workflow) {
            return res.status(404).json({ message: 'Workflow not found' });
        }
        res.status(200).json(workflow);
    } catch (error) {
        res.status(500).json({ message: 'Error updating workflow', error });
    }
};

export const deleteWorkflow = async (req: Request, res: Response) => {
    try {
        const workflow = await Workflow.findByIdAndDelete(req.params.id);
        if (!workflow) {
            return res.status(404).json({ message: 'Workflow not found' });
        }
        res.status(200).json({ message: 'Workflow deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting workflow', error });
    }
};
