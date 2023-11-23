import express from 'express';
import { getUsers, createUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.post('/update', updateUser);

export default router;