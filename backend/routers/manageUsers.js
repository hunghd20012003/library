import express from 'express';
import { decleteUser, listUser,totalUser} from '../controllers/manageUsers.js';

const router = express.Router();
router.get('/list', listUser);
router.post('/deleteuser', decleteUser);
router.get('/totaluser', totalUser);
export default router;