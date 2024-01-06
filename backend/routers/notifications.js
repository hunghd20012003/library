import express from 'express';
import { listNotification } from '../controllers/notification.js';
const router = express.Router();
router.get('/listnotification', listNotification);
export default router;
