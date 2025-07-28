import { Router } from 'express';
import {
    createWorkflow,
    getWorkflows,
    getWorkflowById,
    updateWorkflow,
    deleteWorkflow
} from '../controllers/workflowController';

const router = Router();

router.post('/create/workflows', createWorkflow);
router.get('/collect/workflows/user/:userId', getWorkflows);
router.get('/collect/workflows/user/:id', getWorkflowById);
router.put('/update/workflows/:id', updateWorkflow);
router.delete('/delete/workflows/:id', deleteWorkflow);

export default router;
