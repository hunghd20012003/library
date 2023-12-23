import express from 'express';
import {changeInfo, changePassword, getAllPlans, getUserInfor} from '../controllers/usersInfors.js'
const router = express.Router();
router.post("/getuserInfor",getUserInfor);
router.post("/getAllPlans",getAllPlans);
router.post("/changeInfo",changeInfo);
router.post("/changePassword",changePassword);
export default router;