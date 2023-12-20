import express from 'express';
import { getBooks, createBook, updateBook, deleteBook, getBook, getPage, getLastPage, namePage, nameLastPage, bookIdPage, bookIdLastPage, authorPage, authorLastPage, publishorPage, publishorLastPage, categoryPage, categoryLastPage, userSearch, userSearchLastPage, getBookInTempCart } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);

router.get('/uniquebook', getBook);

router.post('/', createBook);

router.post('/update', updateBook);

router.post('/delete', deleteBook);

router.get("/page", getPage)

router.get("/lastPage", getLastPage)

router.get("/name", namePage)

router.get("/nameLastPage", nameLastPage)

router.get("/bookId", bookIdPage)

router.get("/bookIdLastPage", bookIdLastPage)

router.get("/author", authorPage)

router.get("/authorLastPage", authorLastPage)

router.get("/publishor", publishorPage)

router.get("/publishorLastPage", publishorLastPage)

router.get("/category", categoryPage)

router.get("/categoryLastPage", categoryLastPage)

router.get("/userSearch", userSearch)

router.get("/userSearchLastPage", userSearchLastPage)

router.get("/getTempCart", getBookInTempCart)
export default router;