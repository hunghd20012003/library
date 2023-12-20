import express from 'express';
import {getUserInfor} from '../controllers/usersInfors.js'
const router = express.Router();
router.post("/getuserInfor",getUserInfor);
export default router;