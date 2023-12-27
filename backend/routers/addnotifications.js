import express from 'express';
import { addNotification } from '../controllers/addnotification.js';
const router = express.Router();
router.post("/addnotification", addNotification);
export default router;