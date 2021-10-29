import express from 'express';
import { getUserById, editUserData } from '../controllers/user.js';

const router = express.Router();

router.get('/api/get_user_by_id/:id', getUserById);

router.post('/api/edit_userInfo', editUserData)

export default router;