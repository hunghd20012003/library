import express from 'express';
import { userRegister, userlogin } from '../controllers/login.js';
const router = express.Router();
router.post('/login', userlogin);
router.post("/register",userRegister);
export default router;