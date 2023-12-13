import express from 'express';
import { acceptUser, addUser, declineUser, listUser } from '../controllers/addUsers.js';
const router = express.Router();
router.post("/adduser", addUser);
router.get('/list', listUser);
router.post("/acceptuser", acceptUser);
router.post("/declineuser", declineUser);
export default router;