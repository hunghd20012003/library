import express from 'express';
import { getLoans, createLoan, updateLoan, getLoan, updateState } from '../controllers/loans.js';

const router = express.Router();

router.get('/', getLoans);

router.get('/unique', getLoan);

router.get('/updateState', updateState)

router.post('/', createLoan);

router.post('/update', updateLoan);

export default router;