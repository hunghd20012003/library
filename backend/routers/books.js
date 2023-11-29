import express from 'express';
import { getBooks, createBook, updateBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);

router.post('/', createBook);

router.post('/update', updateBook);

router.post('/delete', deleteBook);

export default router;