import express from 'express';
import { userRegister, userlogin,forgotPassword,resetPassword, adminlogin, adminRegister } from '../controllers/login.js';
const router = express.Router();
router.post('/login', userlogin);
router.post("/admin/login",adminlogin);
router.post("/register",userRegister);
router.post("/forgot-password",forgotPassword);
router.post("/admin/register",adminRegister);
router.post("/reset-password",resetPassword);
export default router;