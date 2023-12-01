import express from 'express';
import { getBooks, createBook, updateBook, deleteBook, getBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);

router.get('/uniquebook', getBook);

router.post('/', createBook);

router.post('/update', updateBook);

router.post('/delete', deleteBook);

export default router;