import express from 'express';
import {getAllPlans,createPlan, getLimitedPlans,deletePlan,updatePlan} from '../controllers/plans.js';

const router = express.Router();

// Lấy tất cả các gói đăng ký
router.get('/plans', getAllPlans);
router.post('/plans', createPlan);
router.get('/plans/:showCount', getLimitedPlans);
router.delete('/plans/:planId', deletePlan);
router.put('/plans/:planId', updatePlan);
export default router;
