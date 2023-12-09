import express from 'express';
import { userRegister, userlogin,forgotPassword,resetPassword } from '../controllers/login.js';
const router = express.Router();
router.post('/login', userlogin);
router.post("/register",userRegister);
router.post("/forgot-password",forgotPassword);
router.get("/reset-password",resetPassword);
export default router;