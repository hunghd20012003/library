import express from 'express';
import { totalBook } from '../controllers/book.js';
const router = express.Router();
router.get('/totalbook', totalBook);
export default router;