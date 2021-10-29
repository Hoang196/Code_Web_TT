import express from 'express';
import { getAllUsers, createAccount } from '../controllers/account.js';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', createAccount);

export default router;